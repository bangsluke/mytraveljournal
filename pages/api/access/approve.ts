import type { NextApiRequest, NextApiResponse } from "next";
import { verifyApprovalToken } from "../../../lib/token";
import { addEmailToAllowedJsonAndPR } from "../../../lib/github";
import { getAppBaseUrl, sendEmail } from "../../../lib/email";

// Helper to get developer email from env (same as FROM_EMAIL)
function getDeveloperEmail(): string {
	const email = process.env.FROM_EMAIL;
	if (!email) throw new Error("FROM_EMAIL not configured");
	return email;
}

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
					to: getDeveloperEmail(),
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
		// Create PR (this is the critical operation - must complete)
		const { prUrl, mergeCommitSha } = await addEmailToAllowedJsonAndPR(payload.email);

		// Start async operations (emails and monitoring) but don't await them
		// These will continue in the background after the response is sent
		Promise.all([
			// Email requester
			sendEmail({
				to: payload.email,
				subject: "Access approved for My Travel Journal",
				html: `<p>Your email has been approved for access to <strong>My Travel Journal</strong>.</p><p>Visit the site: <a href="${getAppBaseUrl()}">${getAppBaseUrl()}</a></p><p>Note: Access will be available after the GitHub PR is merged and deployed.</p><p>PR reference: <a href="${prUrl}">${prUrl}</a></p>`,
			}).catch((e) => console.error("Failed to send approval email:", e)),

			// Notify developer
			sendEmail({
				to: getDeveloperEmail(),
				subject: `Approval initiated for ${payload.email}`,
				html: `<p>PR created to approve ${payload.email} for <strong>My Travel Journal</strong>.</p><p><a href="${prUrl}">${prUrl}</a></p>`,
			}).catch((e) => console.error("Failed to send developer email:", e)),

			// If auto-merged, monitor Netlify deploy (this can take up to 3 minutes - definitely async)
			process.env.GITHUB_AUTO_MERGE === "true" && mergeCommitSha
				? maybeNotifyNetlifyOnFailure(mergeCommitSha).catch((e) => console.error("Failed to monitor Netlify:", e))
				: Promise.resolve(),
		]).catch((e) => console.error("Background task error:", e));

		// Redirect to confirmation page immediately to avoid timeout
		const base = getAppBaseUrl().replace(/\/$/, "");
		return res.redirect(302, `${base}/auth/approval-confirmation?token=${encodeURIComponent(token)}`);
	} catch (e: any) {
		console.error("Approval error:", e);
		// Try to send error email, but don't wait for it
		sendEmail({
			to: getDeveloperEmail(),
			subject: "Approval failed",
			html: `<p>Error approving ${payload?.email || "unknown"}: ${(e && e.message) || e}</p>`,
		}).catch(() => {});
		return res.status(500).send("Approval failed. Check server logs for details.");
	}
}


