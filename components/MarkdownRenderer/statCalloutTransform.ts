/**
 * Obsidian `> [!stat] Title` callouts → markdown heading + GFM list.
 *
 * Supported shapes:
 * - Multiline: `> [!stat] Title` then `> - …` (top) / `> \t- …` (nested → `  - …`).
 * - Single-line export: `> [!stat] Stats \- first item \- second item …` (markdown-escaped
 *   hyphens mark bullets; prose hyphens stay as `-` inside each segment).
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

/** Split `Title \- bullet \- bullet` (Obsidian / CMS single-line stat blocks). */
function parseEscapedHyphenBullets(afterDirective: string): { title: string; bullets: string[] } | null {
	const parts = afterDirective.split(/\s+\\-\s+/);
	if (parts.length < 2) {
		return null;
	}
	const title = (parts[0] ?? "").trim() || "Stats";
	const bullets = parts
		.slice(1)
		.map((p) => p.trim().replace(/\\-/g, "-"))
		.filter(Boolean);
	return bullets.length > 0 ? { title, bullets } : null;
}

/** True when the source has an Obsidian stat callout line (`> [!stat] …`). */
export function hasObsidianStatCallout(markdown: string): boolean {
	const d = decodeEscapedBlockquoteMarkers(normalizeMarkdownNewlines(markdown));
	return /^\s*>\s*\[!stat\]/im.test(d);
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
		const m = first.match(/^>\s*\[!stat\]\s*(.*)$/i);
		const afterDirective = (m?.[1] ?? "").trimEnd();

		const body: string[] = [];
		let title: string;

		const escaped = parseEscapedHyphenBullets(afterDirective);
		if (escaped) {
			title = escaped.title;
			for (const b of escaped.bullets) {
				body.push(`- ${b}`);
			}
		} else {
			title = afterDirective.trim() || "Stats";
		}

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
