import type { GetCardCountsQuery } from "../graphql/__generated__/graphql";
import NodeTraversalsS from "./NodeTraversalsS";

export type ComputedCardCounts = {
	holidayCount: number;
	travelCompanionCount: number;
	continentsCount: number;
	countriesCount: number;
	citiesCount: number;
	capitalsCount: number;
	townsCount: number;
	islandsCount: number;
};

/**
 * Derives dashboard card counts from a single GetCardCounts GraphQL payload.
 * Mirrors logic previously split across multiple list queries.
 */
export function computeCardCountsFromGetCardCounts(data: GetCardCountsQuery | undefined): ComputedCardCounts | null {
	if (!data) return null;

	const visitedContinentsData =
		data.continents?.filter((continent) =>
			continent.placesLocatedIn?.some((location) => {
				return location.placesLocatedIn?.some((sub) => (sub.linkedHolidays?.length ?? 0) > 0) ?? false;
			}),
		) ?? [];

	const visitedCountriesData =
		data.countries?.filter((country) =>
			country.placesLocatedIn?.some((place) => (place.linkedHolidays?.length ?? 0) > 0),
		) ?? [];

	const visitedCitiesData =
		(data.cities ?? []).filter((city) => (city.linkedHolidays?.length ?? 0) > 0).map((city) => ({
			...city,
			linkedHolidays: city.linkedHolidays ?? [],
		})) ?? [];

	const visitedCapitalData = visitedCitiesData.filter((city) => city.capital === true);

	const visitedTownsData =
		(data.towns ?? []).filter((town) => (town.linkedHolidays?.length ?? 0) > 0).map((town) => ({
			...town,
			linkedHolidays: town.linkedHolidays ?? [],
		})) ?? [];

	const visitedIslandsData =
		(data.islands ?? []).filter((island) => (island.linkedHolidays?.length ?? 0) > 0).map((island) => ({
			...island,
			linkedHolidays: island.linkedHolidays ?? [],
		})) ?? [];

	const travelledWithCompanionData =
		(data.people ?? [])
			.filter((person) => (person.attendedHolidays?.length ?? 0) > 0)
			.map((person) => ({
				...person,
				attendedHolidays: person.attendedHolidays ?? [],
			})) ?? [];

	return {
		holidayCount: data.holidays?.length ?? 0,
		travelCompanionCount: travelledWithCompanionData.length,
		continentsCount: visitedContinentsData.length,
		countriesCount: visitedCountriesData.length,
		citiesCount: visitedCitiesData.length,
		capitalsCount: visitedCapitalData.length,
		townsCount: visitedTownsData.length,
		islandsCount: visitedIslandsData.length,
	};
}

/** Unique holiday count per country (for choropleth), keyed by exact GraphQL country name. */
export function buildCountryNameToVisitCount(data: GetCardCountsQuery | undefined): Map<string, number> {
	const map = new Map<string, number>();
	if (!data?.countries) return map;
	for (const country of data.countries) {
		const n = NodeTraversalsS.findHolidayCountOfLocation(country);
		if (n > 0) map.set(country.name, n);
	}
	return map;
}
