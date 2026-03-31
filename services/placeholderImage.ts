/** Stable picsum.photos id from a string (avoids Math.random in render). */
export function picsumIdFromSeed(seed: string): number {
	let h = 0;
	for (let i = 0; i < seed.length; i++) {
		h = (h * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return (h % 999) + 1;
}

export function picsumPlaceholderUrl(seed: string, width = 375, height = 600): string {
	return `https://picsum.photos/id/${picsumIdFromSeed(seed)}/${width}/${height}`;
}
