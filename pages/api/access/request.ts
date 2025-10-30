import type { NextApiRequest, NextApiResponse } from "next";
import { rateLimitCheck } from "../../../lib/rateLimit";
import { createApprovalToken } from "../../../lib/token";
import { getAppBaseUrl, sendEmail } from "../../../lib/email";
import Constants from "../../../constants/constants";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
	const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown";
	const { email } = req.body || {};
	if (typeof email !== "string" || !email.includes("@")) return res.status(400).json({ error: "Invalid email" });

	// Rate limit by IP and by email
	if (!rateLimitCheck(`ip:${ip}`, 5, 60_000)) return res.status(429).json({ error: "Too many requests from this IP. Try later." });
	if (!rateLimitCheck(`email:${email}`, 3, 10 * 60_000)) return res.status(429).json({ error: "Too many requests for this email. Try later." });

	// Optional CAPTCHA verification (Cloudflare Turnstile)
	if (process.env.TURNSTILE_SECRET) {
		try {
			const token = req.body?.turnstileToken as string;
			if (!token) return res.status(400).json({ error: "Missing CAPTCHA token" });
			const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
				method: "POST",
				headers: { "content-type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET, response: token }),
			});
			const verify = (await verifyRes.json()) as { success: boolean };
			if (!verify.success) return res.status(400).json({ error: "CAPTCHA failed" });
		} catch {
			return res.status(400).json({ error: "CAPTCHA error" });
		}
	}

	try {
		const approvalToken = createApprovalToken(email);
		const base = getAppBaseUrl().replace(/\/$/, ""); // Remove trailing slash if present
		const approveUrl = `${base}/api/access/approve?token=${encodeURIComponent(approvalToken)}`;

		// Send email to developer with approve link
		await sendEmail({
			to: Constants.developerEmail,
			subject: `Access Request for My Travel Journal: ${email}`,
			html: `
				<p>Hello,</p>
				<p><strong>${email}</strong> has requested access to <strong>My Travel Journal</strong> website.</p>
				<p>Click the button below to approve their access request:</p>
				<p style="margin: 20px 0;">
					<a href="${approveUrl}" style="display:inline-block;padding:12px 24px;background:#0a7;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold">Approve Access</a>
				</p>
				<p>If the button doesn't work, you can approve by clicking this link: <a href="${approveUrl}" style="color:#0a7;text-decoration:underline">Approve Access Request</a></p>
				<p style="margin-top: 30px; color: #666; font-size: 12px;">This approval link will expire in 24 hours.</p>
			`,
		});

		// Send acknowledgement to requester (optional)
		try {
			await sendEmail({
				to: email,
				subject: "Access Request Received for My Travel Journal",
				html: `<p>Hello,</p><p>Thank you for requesting access to <strong>My Travel Journal</strong>. Your request has been received and is pending review. You'll receive an email notification if your request is approved.</p>`,
			});
		} catch (e) {
			// Ignore errors sending acknowledgement email
			console.error("Failed to send acknowledgement email:", e);
		}

		return res.status(200).json({ ok: true });
	} catch (error: any) {
		console.error("Error in access request handler:", error);
		return res.status(500).json({ error: error?.message || "Failed to process request. Please check server configuration." });
	}
}


