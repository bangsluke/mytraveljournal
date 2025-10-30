// Server-side only module - must only be imported in API routes (pages/api/*)
if (typeof window !== "undefined") {
	throw new Error("This module can only be used server-side");
}
import nodemailer from "nodemailer";

type SendEmailArgs = {
	to: string;
	subject: string;
	html: string;
};

let cachedTransporter: nodemailer.Transporter | null = null;

function getTransporter() {
	if (cachedTransporter) return cachedTransporter;
	const host = process.env.SMTP_HOST as string;
	const port = Number(process.env.SMTP_PORT || 587);
	const user = process.env.SMTP_USER as string;
	const pass = process.env.SMTP_PASS as string;

	if (!host || !user || !pass) {
		throw new Error("SMTP environment variables are not configured");
	}

	// For development, allow self-signed certificates by default
	// In production, set SMTP_REJECT_UNAUTHORIZED=true to enforce proper SSL
	const rejectUnauthorized = process.env.NODE_ENV === "production" ? process.env.SMTP_REJECT_UNAUTHORIZED !== "false" : process.env.SMTP_REJECT_UNAUTHORIZED === "true";

	cachedTransporter = nodemailer.createTransport({
		host,
		port,
		secure: port === 465,
		auth: { user, pass },
		tls: {
			rejectUnauthorized,
		},
	});
	return cachedTransporter;
}

export async function sendEmail({ to, subject, html }: SendEmailArgs) {
	const transporter = getTransporter();
	// Use FROM_EMAIL env var directly - do NOT import Constants to avoid client-side bundling
	// If FROM_EMAIL is not set, throw error rather than using a fallback that creates dependencies
	const from = process.env.FROM_EMAIL;
	if (!from) {
		throw new Error("FROM_EMAIL environment variable is not configured");
	}
	await transporter.sendMail({ from, to, subject, html });
}

export function getAppBaseUrl() {
	return (
		process.env.NEXTAUTH_URL ||
		process.env.APP_BASE_URL ||
		(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
	);
}


