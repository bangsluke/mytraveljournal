/** Normalize Obsidian-style `[[Display|Short]]` or `Long|Short` for location pill labels. */
export function normalizeLocationPillLabel(raw: string): string {
	let s = raw.trim();
	if (!s) return s;

	const wiki = /^\[\[(.+)\]\]$/.exec(s);
	if (wiki) {
		const inner = wiki[1].trim();
		if (inner.includes("|")) {
			const parts = inner.split("|").map((p) => p.trim()).filter(Boolean);
			return parts[parts.length - 1] ?? inner;
		}
		return inner;
	}

	if (s.includes("|")) {
		const parts = s.split("|").map((p) => p.trim()).filter(Boolean);
		return parts[parts.length - 1] ?? s;
	}

	return s;
}
