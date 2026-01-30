import { useQuery } from "@apollo/client";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HouseIcon from "@mui/icons-material/House";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PublicIcon from "@mui/icons-material/Public";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useEffect, useState } from "react";
import {
	GetHolidaysDocument,
	GetPeopleDocument,
	GetContinentsListDocument,
	GetCountriesListDocument,
	GetCitiesListDocument,
	GetCapitalsListDocument,
	GetTownsListDocument,
	GetIslandsListDocument,
} from "../../graphql/__generated__/graphql";
import CountCard from "./CountCard";
import styles from "./CountCard.module.css";

const CountCardLoadingSpinner = () => (
	<div style={{
		width: '40px',
		height: '40px',
		border: '4px solid rgba(255, 255, 255, 0.3)',
		borderTop: '4px solid #fff',
		borderRadius: '50%',
		animation: 'spin 1s linear infinite',
		margin: '0 auto'
	}} />
);

const spinnerStyles = `
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;

interface CachedStats {
	holidayCount: number;
	travelCompanionCount: number;
	continentsCount: number;
	countriesCount: number;
	citiesCount: number;
	capitalsCount: number;
	townsCount: number;
	islandsCount: number;
	date: string;
}

const CACHE_KEY = 'travelStatsCache';

const getTodayDateString = () => new Date().toISOString().split('T')[0];

const getCachedStats = (): CachedStats | null => {
	if (typeof window === 'undefined') return null;
	try {
		const cached = localStorage.getItem(CACHE_KEY);
		if (!cached) return null;
		const parsed: CachedStats = JSON.parse(cached);
		// Invalidate if date has changed
		if (parsed.date !== getTodayDateString()) {
			localStorage.removeItem(CACHE_KEY);
			return null;
		}
		return parsed;
	} catch {
		return null;
	}
};

const setCachedStats = (stats: Omit<CachedStats, 'date'>) => {
	if (typeof window === 'undefined') return;
	try {
		const cacheData: CachedStats = {
			...stats,
			date: getTodayDateString()
		};
		localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
	} catch (error) {
		console.error('Failed to cache stats:', error);
	}
};

export default function AsyncCountCardSection() {
	const [cachedStats, setCachedStatsState] = useState<CachedStats | null>(null);
	const [shouldFetch, setShouldFetch] = useState(false);

	// Check cache on mount
	useEffect(() => {
		const cached = getCachedStats();
		if (cached) {
			setCachedStatsState(cached);
			setShouldFetch(false);
		} else {
			setShouldFetch(true);
		}
	}, []);
	const { loading: holidaysLoading, data: holidaysData } = useQuery(GetHolidaysDocument, { skip: !shouldFetch });
	const holidayCount = holidaysData?.holidays?.length ?? 0;

	const { loading: peopleLoading, data: peopleData } = useQuery(GetPeopleDocument, { skip: !shouldFetch });
	const filteredTravelCompanionCount = (peopleData?.people ?? []).filter((p: any) => (p.attendedHolidays ?? []).length > 0).length;

	const { loading: continentsLoading, data: continentsData } = useQuery(GetContinentsListDocument, { skip: !shouldFetch });
	const filteredContinentsCount = ((continentsData?.continents ?? []).filter((continent: any) => {
		return (continent.placesLocatedIn ?? []).some((location: any) => {
			if ((location.linkedHolidays ?? []).length > 0) return true;
			return (location.placesLocatedIn ?? []).some((sub: any) => (sub.linkedHolidays ?? []).length > 0);
		});
	})).length;

	const { loading: countriesLoading, data: countriesData } = useQuery(GetCountriesListDocument, { skip: !shouldFetch });
	const filteredCountriesCount = ((countriesData?.countries ?? []).filter((country: any) => {
		return (country.placesLocatedIn ?? []).some((place: any) => (place.linkedHolidays ?? []).length > 0);
	})).length;

	const { loading: citiesLoading, data: citiesData } = useQuery(GetCitiesListDocument, { skip: !shouldFetch });
	const filteredCitiesCount = (citiesData?.cities ?? []).filter((c: any) => (c.linkedHolidays ?? []).length > 0).length;

	const { loading: capitalsLoading, data: capitalsData } = useQuery(GetCapitalsListDocument, { variables: { capitalCheck: true }, skip: !shouldFetch });
	const filteredCapitalsCount = (capitalsData?.cities ?? []).filter((c: any) => (c.linkedHolidays ?? []).length > 0).length;

	const { loading: townsLoading, data: townsData } = useQuery(GetTownsListDocument, { skip: !shouldFetch });
	const filteredTownsCount = (townsData?.towns ?? []).filter((t: any) => (t.linkedHolidays ?? []).length > 0).length;

	const { loading: islandsLoading, data: islandsData } = useQuery(GetIslandsListDocument, { skip: !shouldFetch });
	const filteredIslandsCount = (islandsData?.islands ?? []).filter((i: any) => (i.linkedHolidays ?? []).length > 0).length;

	// Cache the data when all queries complete
	useEffect(() => {
		if (shouldFetch && !holidaysLoading && !peopleLoading && !continentsLoading &&
			!countriesLoading && !citiesLoading && !capitalsLoading && !townsLoading && !islandsLoading) {
			setCachedStats({
				holidayCount,
				travelCompanionCount: filteredTravelCompanionCount,
				continentsCount: filteredContinentsCount,
				countriesCount: filteredCountriesCount,
				citiesCount: filteredCitiesCount,
				capitalsCount: filteredCapitalsCount,
				townsCount: filteredTownsCount,
				islandsCount: filteredIslandsCount
			});
			setCachedStatsState({
				holidayCount,
				travelCompanionCount: filteredTravelCompanionCount,
				continentsCount: filteredContinentsCount,
				countriesCount: filteredCountriesCount,
				citiesCount: filteredCitiesCount,
				capitalsCount: filteredCapitalsCount,
				townsCount: filteredTownsCount,
				islandsCount: filteredIslandsCount,
				date: getTodayDateString()
			});
		}
	}, [shouldFetch, holidaysLoading, peopleLoading, continentsLoading, countriesLoading,
		citiesLoading, capitalsLoading, townsLoading, islandsLoading, holidayCount,
		filteredTravelCompanionCount, filteredContinentsCount, filteredCountriesCount,
		filteredCitiesCount, filteredCapitalsCount, filteredTownsCount, filteredIslandsCount]);

	const getCountValue = (isLoading: boolean, count: number) => (isLoading ? <CountCardLoadingSpinner /> : count);

	// Use cached values if available, otherwise use fetched values
	const displayHolidayCount = cachedStats?.holidayCount ?? holidayCount;
	const displayTravelCompanionCount = cachedStats?.travelCompanionCount ?? filteredTravelCompanionCount;
	const displayContinentsCount = cachedStats?.continentsCount ?? filteredContinentsCount;
	const displayCountriesCount = cachedStats?.countriesCount ?? filteredCountriesCount;
	const displayCitiesCount = cachedStats?.citiesCount ?? filteredCitiesCount;
	const displayCapitalsCount = cachedStats?.capitalsCount ?? filteredCapitalsCount;
	const displayTownsCount = cachedStats?.townsCount ?? filteredTownsCount;
	const displayIslandsCount = cachedStats?.islandsCount ?? filteredIslandsCount;

	// Only show loading if we're fetching and don't have cached data
	const isLoadingHolidays = shouldFetch && holidaysLoading && !cachedStats;
	const isLoadingPeople = shouldFetch && peopleLoading && !cachedStats;
	const isLoadingContinents = shouldFetch && continentsLoading && !cachedStats;
	const isLoadingCountries = shouldFetch && countriesLoading && !cachedStats;
	const isLoadingCities = shouldFetch && citiesLoading && !cachedStats;
	const isLoadingCapitals = shouldFetch && capitalsLoading && !cachedStats;
	const isLoadingTowns = shouldFetch && townsLoading && !cachedStats;
	const isLoadingIslands = shouldFetch && islandsLoading && !cachedStats;

	return (
		<>
			<style>{spinnerStyles}</style>
			<div id='countCardSection' className={styles.countCardSection}>
				<CountCard
					id='1'
					cardTitle='Holiday Count'
					countValue={getCountValue(isLoadingHolidays, displayHolidayCount)}
					pagePath='/holidays'
					enabledBoolean={!isLoadingHolidays}
					backgroundIcon={<FlightTakeoffIcon fontSize='large' />}
				/>

				<CountCard
					id='2'
					cardTitle='Travel Companion Count'
					countValue={getCountValue(isLoadingPeople, displayTravelCompanionCount)}
					pagePath='/people'
					enabledBoolean={!isLoadingPeople}
					backgroundIcon={<SupervisorAccountIcon fontSize='large' />}
				/>

				<CountCard
					id='3'
					cardTitle='Continent Count'
					countValue={getCountValue(isLoadingContinents, displayContinentsCount)}
					pagePath='/continents'
					enabledBoolean={!isLoadingContinents}
					backgroundIcon={<PublicIcon fontSize='large' />}
				/>

				<CountCard
					id='4'
					cardTitle='Countries Count'
					countValue={getCountValue(isLoadingCountries, displayCountriesCount)}
					pagePath='/countries'
					enabledBoolean={!isLoadingCountries}
					backgroundIcon={<MapIcon fontSize='large' />}
				/>

				<CountCard
					id='5'
					cardTitle='Cities Count'
					countValue={getCountValue(isLoadingCities, displayCitiesCount)}
					pagePath='/cities'
					enabledBoolean={!isLoadingCities}
					backgroundIcon={<LocationCityIcon fontSize='large' />}
				/>

				<CountCard
					id='6'
					cardTitle='Capitals Count'
					countValue={getCountValue(isLoadingCapitals, displayCapitalsCount)}
					pagePath='/cities'
					enabledBoolean={!isLoadingCapitals}
					backgroundIcon={<PinDropIcon fontSize='large' />}
				/>

				<CountCard
					id='7'
					cardTitle='Towns Count'
					countValue={getCountValue(isLoadingTowns, displayTownsCount)}
					pagePath='/locations'
					enabledBoolean={!isLoadingTowns}
					backgroundIcon={<HouseIcon fontSize='large' />}
				/>

				<CountCard
					id='8'
					cardTitle='Islands Count'
					countValue={getCountValue(isLoadingIslands, displayIslandsCount)}
					pagePath='/locations'
					enabledBoolean={!isLoadingIslands}
					backgroundIcon={<BeachAccessIcon fontSize='large' />}
				/>
			</div>
		</>
	);
}

