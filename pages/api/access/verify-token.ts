import type { NextApiRequest, NextApiResponse } from "next";
import { verifyApprovalToken } from "../../../lib/token";

// Server-side only module - must only be imported in API routes (pages/api/*)
if (typeof window !== "undefined") {
	throw new Error("This module can only be used server-side");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") return res.status(405).send("Method not allowed");
	const token = req.query.token as string;
	if (!token) return res.status(400).json({ error: "Missing token" });

	const payload = verifyApprovalToken(token);
	if (!payload) return res.status(400).json({ error: "Invalid or expired token" });

	return res.status(200).json({ email: payload.email });
}

