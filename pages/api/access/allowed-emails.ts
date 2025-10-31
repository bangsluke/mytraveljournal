import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/rest";

// Server-side only module - must only be imported in API routes (pages/api/*)
if (typeof window !== "undefined") {
	throw new Error("This module can only be used server-side");
}

function getConfig() {
	const token = process.env.GITHUB_TOKEN;
	const repo = process.env.GITHUB_REPOSITORY;
	if (!token || !repo) throw new Error("GITHUB_TOKEN and GITHUB_REPOSITORY must be set");
	return { token, repo };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") return res.status(405).send("Method not allowed");

	try {
		const { token, repo } = getConfig();
		const [owner, repoName] = repo.split("/");
		const octokit = new Octokit({ auth: token });

		// Get current file content from default branch
		const { data: repoData } = await octokit.repos.get({ owner, repo: repoName });
		const base = repoData.default_branch;
		const path = "constants/allowedEmails.json";
		const { data: fileData } = await octokit.repos.getContent({ owner, repo: repoName, path, ref: base });
		if (!("content" in fileData) || typeof fileData.content !== "string") throw new Error("Invalid file content response");
		const decoded = Buffer.from(fileData.content, "base64").toString("utf-8");
		const json = JSON.parse(decoded);
		const list: string[] = Array.isArray(json.allowed) ? json.allowed : [];

		return res.status(200).json({ allowed: list.sort() });
	} catch (e: any) {
		console.error("Error fetching allowed emails:", e);
		return res.status(500).json({ error: e?.message || "Failed to fetch allowed emails" });
	}
}

