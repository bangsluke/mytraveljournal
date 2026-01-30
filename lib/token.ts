// Server-side only module - must only be imported in API routes (pages/api/*)
if (typeof window !== "undefined") {
	throw new Error("This module can only be used server-side");
}
import crypto from "crypto";

const DEFAULT_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export type ApprovalTokenPayload = {
	email: string;
	nonce: string;
	expiresAt: number;
};

export function createApprovalToken(email: string, ttlMs: number = DEFAULT_TTL_MS) {
	const secret = process.env.NEXTAUTH_SECRET;
	if (!secret) throw new Error("NEXTAUTH_SECRET not set");
	const payload: ApprovalTokenPayload = {
		email,
		nonce: crypto.randomBytes(16).toString("hex"),
		expiresAt: Date.now() + ttlMs,
	};
	const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
	const sig = crypto.createHmac("sha256", secret).update(data).digest("base64url");
	return `${data}.${sig}`;
}

export function verifyApprovalToken(token: string): ApprovalTokenPayload | null {
	const secret = process.env.NEXTAUTH_SECRET;
	if (!secret) throw new Error("NEXTAUTH_SECRET not set");
	const parts = token.split(".");
	if (parts.length !== 2) return null;
	const [data, sig] = parts;
	const expected = crypto.createHmac("sha256", secret).update(data).digest("base64url");
	const sigBuffer = Buffer.from(sig);
	const expectedBuffer = Buffer.from(expected);
	if (sigBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(new Uint8Array(sigBuffer), new Uint8Array(expectedBuffer))) return null;
	const payload = JSON.parse(Buffer.from(data, "base64url").toString());
	if (typeof payload?.expiresAt !== "number" || Date.now() > payload.expiresAt) return null;
	return payload as ApprovalTokenPayload;
}


