type Key = string;

type Entry = {
	counters: number[]; // timestamps (ms)
};

const store = new Map<Key, Entry>();

export function rateLimitCheck(key: string, limit: number, windowMs: number): boolean {
	const now = Date.now();
	const entry = store.get(key) || { counters: [] };
	// drop old
	entry.counters = entry.counters.filter((t) => now - t < windowMs);
	if (entry.counters.length >= limit) {
		store.set(key, entry);
		return false;
	}
	entry.counters.push(now);
	store.set(key, entry);
	return true;
}


