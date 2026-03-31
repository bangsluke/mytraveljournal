/** Map Natural Earth / topojson country labels to GraphQL `Country.name` where they differ. */
const GEO_NAME_TO_DB: Record<string, string> = {
	"united states of america": "United States",
	"united states": "United States",
	usa: "United States",
	russia: "Russia",
	"russian federation": "Russia",
	"korea, republic of": "South Korea",
	"south korea": "South Korea",
	"korea, democratic people's republic of": "North Korea",
	"north korea": "North Korea",
	"viet nam": "Vietnam",
	vietnam: "Vietnam",
	"united kingdom": "United Kingdom",
	"united kingdom of great britain and northern ireland": "United Kingdom",
	czechia: "Czech Republic",
	"democratic republic of the congo": "Democratic Republic of the Congo",
	"republic of the congo": "Republic of the Congo",
	"ivory coast": "Côte d'Ivoire",
	"côte d'ivoire": "Côte d'Ivoire",
	"bolivia (plurinational state of)": "Bolivia",
	"venezuela (bolivarian republic of)": "Venezuela",
	"tanzania, united republic of": "Tanzania",
	"iran (islamic republic of)": "Iran",
	"lao people's democratic republic": "Laos",
	"syrian arab republic": "Syria",
	moldova: "Moldova",
	"republic of moldova": "Moldova",
	"the bahamas": "Bahamas",
	bahamas: "Bahamas",
	"brunei darussalam": "Brunei",
	"eswatini": "Eswatini",
	swaziland: "Eswatini",
	"macedonia, the former yugoslav republic of": "North Macedonia",
	"north macedonia": "North Macedonia",
	turkey: "Turkey",
	türkiye: "Turkey",
};

export function normalizeCountryKey(name: string): string {
	return name
		.toLowerCase()
		.normalize("NFD")
		.replace(/\p{M}/gu, "")
		.replace(/\s+/g, " ")
		.trim();
}

/** Optional capital labels when zoomed in (bonus feature). Keyed by GraphQL country name. */
export const CAPITAL_LABEL_BY_COUNTRY: Record<string, string> = {
	"United States": "Washington, D.C.",
	"United Kingdom": "London",
	France: "Paris",
	Germany: "Berlin",
	Italy: "Rome",
	Spain: "Madrid",
	Portugal: "Lisbon",
	Netherlands: "Amsterdam",
	Belgium: "Brussels",
	Switzerland: "Bern",
	Austria: "Vienna",
	Greece: "Athens",
	Poland: "Warsaw",
	"New Zealand": "Wellington",
	Australia: "Canberra",
	Canada: "Ottawa",
	Japan: "Tokyo",
	China: "Beijing",
	India: "New Delhi",
	Thailand: "Bangkok",
	Vietnam: "Hanoi",
	Indonesia: "Jakarta",
	Malaysia: "Kuala Lumpur",
	Singapore: "Singapore",
	Philippines: "Manila",
	"South Korea": "Seoul",
	"South Africa": "Pretoria",
	Egypt: "Cairo",
	Morocco: "Rabat",
	Turkey: "Ankara",
	Mexico: "Mexico City",
	Brazil: "Brasília",
	Argentina: "Buenos Aires",
	Chile: "Santiago",
	Peru: "Lima",
	Colombia: "Bogotá",
	Norway: "Oslo",
	Sweden: "Stockholm",
	Finland: "Helsinki",
	Denmark: "Copenhagen",
	Ireland: "Dublin",
	"Czech Republic": "Prague",
	Hungary: "Budapest",
	Romania: "Bucharest",
	Croatia: "Zagreb",
	Iceland: "Reykjavík",
	Israel: "Jerusalem",
	"United Arab Emirates": "Abu Dhabi",
	Fiji: "Suva",
};

/** world-atlas@2 uses `properties.name`; older Natural Earth GeoJSON often uses `NAME`, `ADMIN`, etc. */
function collectGeoNameCandidates(geoProperties: Record<string, unknown>): string[] {
	const keys = ["name", "NAME", "ADMIN", "NAME_LONG", "BRK_NAME", "FORMAL_EN", "formal_en", "ADM0_A3"];
	const seen = new Set<string>();
	const out: string[] = [];
	for (const k of keys) {
		const v = geoProperties[k];
		if (typeof v !== "string") continue;
		const t = v.trim();
		if (!t || seen.has(t)) continue;
		seen.add(t);
		out.push(t);
	}
	return out;
}

export function resolveCountryVisitCount(
	geoProperties: Record<string, unknown>,
	visitByCountry: Map<string, number>,
): { count: number; matchedName: string | null } {
	return createVisitLookup(visitByCountry).resolve(geoProperties);
}

/** O(1) normalized-name lookup; reuse one instance per stable `visitByCountry` map. */
export type VisitCountryLookup = {
	resolve: (geoProperties: Record<string, unknown>) => { count: number; matchedName: string | null };
};

export function createVisitLookup(visitByCountry: Map<string, number>): VisitCountryLookup {
	const normalizedKeyToDb = new Map<string, { dbName: string; count: number }>();
	for (const [dbName, count] of Array.from(visitByCountry.entries())) {
		normalizedKeyToDb.set(normalizeCountryKey(dbName), { dbName, count });
	}

	return {
		resolve(geoProperties) {
			const candidates = collectGeoNameCandidates(geoProperties);

			for (const n of candidates) {
				if (visitByCountry.has(n)) return { count: visitByCountry.get(n)!, matchedName: n };
			}

			for (const n of candidates) {
				const key = normalizeCountryKey(n);
				const mapped = GEO_NAME_TO_DB[key];
				if (mapped && visitByCountry.has(mapped)) return { count: visitByCountry.get(mapped)!, matchedName: mapped };
			}

			for (const n of candidates) {
				const nn = normalizeCountryKey(n);
				const hit = normalizedKeyToDb.get(nn);
				if (hit) return { count: hit.count, matchedName: hit.dbName };
			}

			return { count: 0, matchedName: null };
		},
	};
}
