import type { NextApiRequest, NextApiResponse } from "next";
import { verifyApprovalToken } from "../../../lib/token";
import { addEmailToAllowedJsonAndPR } from "../../../lib/github";
import { getAppBaseUrl, sendEmail } from "../../../lib/email";
import Constants from "../../../constants/constants";

async function maybeNotifyNetlifyOnFailure(commitSha: string) {
	const token = process.env.NETLIFY_TOKEN;
	const siteId = process.env.NETLIFY_SITE_ID;
	if (!token || !siteId) return; // not configured
	// Poll latest deploys for up to ~3 minutes
	const deadline = Date.now() + 3 * 60_000;
	let notified = false;
	while (Date.now() < deadline) {
		const resp = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/deploys?per_page=10`, { headers: { Authorization: `Bearer ${token}` } });
		const deploys = (await resp.json()) as any[];
		const match = deploys.find((d) => d.commit_ref === commitSha || d.committer === commitSha || d.title?.includes(commitSha));
		const d = match || deploys[0];
		if (d?.state === "ready") return; // success
		if (d?.state === "error" || d?.state === "failed") {
			if (!notified) {
				notified = true;
				await sendEmail({
					to: Constants.developerEmail,
					subject: "Netlify deploy failed after approval",
					html: `<p>Deploy failed for commit ${commitSha}.</p><p>Deploy: ${d?.id || "unknown"}</p>`,
				});
			}
			return;
		}
		await new Promise((r) => setTimeout(r, 5000));
	}
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") return res.status(405).send("Method not allowed");
	const token = req.query.token as string;
	if (!token) return res.status(400).send("Missing token");
	const payload = verifyApprovalToken(token);
	if (!payload) return res.status(400).send("Invalid or expired token");

	try {
		const { prUrl, mergeCommitSha } = await addEmailToAllowedJsonAndPR(payload.email);

		// Optionally email requester with success immediately on auto-merge, or after manual merge webhook. Here: send success now with PR link; note access may take a moment post-merge.
		try {
			await sendEmail({
				to: payload.email,
				subject: "Access approved",
				html: `<p>Your email has been approved for access.</p><p>Visit the site: <a href="${getAppBaseUrl()}">${getAppBaseUrl()}</a></p><p>PR reference: <a href="${prUrl}">${prUrl}</a></p>`,
			});
		} catch {}

		// Notify developer with PR link
		try {
			await sendEmail({
				to: Constants.developerEmail,
				subject: `Approval initiated for ${payload.email}`,
				html: `<p>PR created to approve ${payload.email}.</p><p><a href="${prUrl}">${prUrl}</a></p>`,
			});
		} catch {}

		// If auto-merged, optionally poll Netlify deploy and email on failure
		if (process.env.GITHUB_AUTO_MERGE === "true" && mergeCommitSha) {
			try {
				await maybeNotifyNetlifyOnFailure(mergeCommitSha);
			} catch {}
		}

		res.setHeader("Content-Type", "text/html; charset=utf-8");
		return res.status(200).send(`<html><body><h3>Approval started for ${payload.email}.</h3><p>You can close this window.</p></body></html>`);
	} catch (e: any) {
		await sendEmail({ to: Constants.developerEmail, subject: "Approval failed", html: `<p>Error approving: ${(e && e.message) || e}</p>` });
		return res.status(500).send("Approval failed");
	}
}


