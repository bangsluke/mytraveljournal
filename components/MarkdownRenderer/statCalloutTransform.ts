/**
 * Obsidian `> [!stat] Title` callouts → markdown heading + GFM list.
 *
 * Rules (only these patterns start list lines; other "-" stay in prose):
 * - `> - ` → top-level bullet (`- …`)
 * - `> ` + tabs + `- ` → nested bullet (`  - …` for GFM)
 * - `> [!stat] ` removed from the opening line; remainder is the section title
 */

/** Unify newlines (incl. unusual separators) so line-based parsing works. */
export function normalizeMarkdownNewlines(markdown: string): string {
	return markdown.replace(/\r\n/g, "\n").replace(/\r/g, "\n").replace(/\u2028/g, "\n");
}

/** Some pipelines HTML-escape blockquote markers. */
export function decodeEscapedBlockquoteMarkers(markdown: string): string {
	return markdown.replace(/^(\s*)&gt;/gm, "$1>");
}

function decodeLine(line: string): string {
	return line.replace(/^\s*&gt;/, ">");
}

function isStatHeaderLine(line: string): boolean {
	return /^>\s*\[!stat\]/i.test(decodeLine(line).trimStart());
}

function isBlockquoteLine(line: string): boolean {
	return decodeLine(line).trimStart().startsWith(">");
}

/**
 * `> -\s` with exactly one space after `>` ("> - …") → top-level list item.
 * `> ` + one or more tabs before `-` (e.g. "> \t- …") → nested list item.
 */
function statBodyLineToMarkdown(line: string): string | null {
	let dec = decodeLine(line).trimEnd().replace(/^\s+/, "");

	const nested = dec.match(/^> +\t+-\s+(.*)$/);
	if (nested) {
		return `  - ${nested[1]}`;
	}

	const top = dec.match(/^> -\s+(.*)$/);
	if (top) {
		return `- ${top[1]}`;
	}

	return null;
}

export function transformObsidianStatCallouts(markdown: string): string {
	const lines = markdown.split("\n");
	const out: string[] = [];
	let i = 0;

	while (i < lines.length) {
		const raw = lines[i];
		if (!isStatHeaderLine(raw)) {
			out.push(raw);
			i += 1;
			continue;
		}

		const first = decodeLine(raw).trimStart();
		const titleMatch = first.match(/^>\s*\[!stat\]\s*(.*)$/i);
		const title = (titleMatch?.[1] ?? "").trim() || "Stats";

		const body: string[] = [];
		i += 1;
		while (i < lines.length) {
			const L = lines[i];
			if (L.trim() === "") break;
			if (!isBlockquoteLine(L)) break;

			const item = statBodyLineToMarkdown(L);
			if (item === null) {
				break;
			}
			body.push(item);
			i += 1;
		}

		out.push(`## ${title}`);
		out.push("");
		out.push(...body);
	}

	return out.join("\n");
}
