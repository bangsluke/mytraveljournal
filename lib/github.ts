import { Octokit } from "@octokit/rest";

export type GitHubConfig = {
	repo: string; // owner/repo
	token: string;
};

function getConfig(): GitHubConfig {
	const token = process.env.GITHUB_TOKEN as string;
	const repo = process.env.GITHUB_REPOSITORY as string; // e.g. owner/name
	if (!token || !repo) throw new Error("GitHub env not configured");
	return { token, repo };
}

export async function addEmailToAllowedJsonAndPR(email: string) {
	const { token, repo } = getConfig();
	const [owner, repoName] = repo.split("/");
	const octokit = new Octokit({ auth: token });

	// Get current file content from default branch
	const { data: repoData } = await octokit.repos.get({ owner, repo: repoName });
	const base = repoData.default_branch;
	const path = "constants/allowedEmails.json";
	const { data: fileData } = await octokit.repos.getContent({ owner, repo: repoName, path, ref: base });
	if (!("content" in fileData) || typeof fileData.content !== "string") throw new Error("Invalid file content response");
	const sha = (fileData as any).sha as string;
	const decoded = Buffer.from(fileData.content, "base64").toString("utf-8");
	const json = JSON.parse(decoded);
	const list: string[] = Array.isArray(json.allowed) ? json.allowed : [];
	if (!list.includes(email)) list.push(email);
	const updated = JSON.stringify({ allowed: list.sort() }, null, 2) + "\n";

	// Create branch name
	const branch = `allowlist/${email.replace(/[^a-zA-Z0-9._-]/g, "_")}-${Date.now()}`;

	// Create ref from base
	const { data: baseRef } = await octokit.git.getRef({ owner, repo: repoName, ref: `heads/${base}` });
	await octokit.git.createRef({ owner, repo: repoName, ref: `refs/heads/${branch}`, sha: baseRef.object.sha });

	// Commit file to new branch
	await octokit.repos.createOrUpdateFileContents({
		owner,
		repo: repoName,
		path,
		message: `chore: approve ${email} for site access`,
		content: Buffer.from(updated, "utf-8").toString("base64"),
		branch,
		sha,
	});

	// Open PR
	const { data: pr } = await octokit.pulls.create({ owner, repo: repoName, head: branch, base, title: `Approve ${email} for access`, body: `Adds ${email} to allowedEmails.json` });

	// Auto-merge if enabled
	let mergeCommitSha: string | null = null;
	if (process.env.GITHUB_AUTO_MERGE === "true") {
		try {
			const mergeResult = await octokit.pulls.merge({ owner, repo: repoName, pull_number: pr.number, merge_method: "squash" });
			if (mergeResult.data.merged && mergeResult.data.sha) {
				mergeCommitSha = mergeResult.data.sha;
			}
			// Also try to get the merged commit from the PR after a short delay
			if (!mergeCommitSha) {
				await new Promise((r) => setTimeout(r, 1000));
				const { data: updatedPR } = await octokit.pulls.get({ owner, repo: repoName, pull_number: pr.number });
				if (updatedPR.merged && updatedPR.merge_commit_sha) {
					mergeCommitSha = updatedPR.merge_commit_sha;
				}
			}
		} catch (e) {
			// ignore; PR remains open for manual review
		}
	}

	return { prNumber: pr.number, prUrl: pr.html_url, branch, base, mergeCommitSha };
}


