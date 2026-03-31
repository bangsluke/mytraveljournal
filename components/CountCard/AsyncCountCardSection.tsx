/* eslint-disable react-hooks/set-state-in-effect --
   Travel stats: read daily localStorage cache after mount (SSR-safe); cannot initialize from localStorage in useState without hydration mismatch. */
import { useQuery } from "@apollo/client";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HouseIcon from "@mui/icons-material/House";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PublicIcon from "@mui/icons-material/Public";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useEffect, useMemo, useState } from "react";
import { GetCardCountsDocument } from "../../graphql/__generated__/graphql";
import { computeCardCountsFromGetCardCounts } from "../../services/computeCardCounts";
import CountCard from "./CountCard";
import styles from "./CountCard.module.css";

const CountCardLoadingSpinner = () => (
	<div
		style={{
			width: "40px",
			height: "40px",
			border: "4px solid rgba(255, 255, 255, 0.3)",
			borderTop: "4px solid #fff",
			borderRadius: "50%",
			animation: "spin 1s linear infinite",
			margin: "0 auto",
		}}
	/>
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

const CACHE_KEY = "travelStatsCache";

const getTodayDateString = () => new Date().toISOString().split("T")[0];

const getCachedStats = (): CachedStats | null => {
	if (typeof window === "undefined") return null;
	try {
		const cached = localStorage.getItem(CACHE_KEY);
		if (!cached) return null;
		const parsed: CachedStats = JSON.parse(cached);
		if (parsed.date !== getTodayDateString()) {
			localStorage.removeItem(CACHE_KEY);
			return null;
		}
		return parsed;
	} catch {
		return null;
	}
};

const setCachedStats = (stats: Omit<CachedStats, "date">) => {
	if (typeof window === "undefined") return;
	try {
		const cacheData: CachedStats = {
			...stats,
			date: getTodayDateString(),
		};
		localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
	} catch (error) {
		console.error("Failed to cache stats:", error);
	}
};

export default function AsyncCountCardSection() {
	const [cacheChecked, setCacheChecked] = useState(false);
	const [cachedStats, setCachedStatsState] = useState<CachedStats | null>(null);
	const [shouldFetch, setShouldFetch] = useState(false);

	useEffect(() => {
		const cached = getCachedStats();
		if (cached) {
			setCachedStatsState(cached);
			setShouldFetch(false);
			if (process.env.NODE_ENV === "development") {
				console.info("[travelStats] cache hit — skipping GetCardCounts network request");
			}
		} else {
			setShouldFetch(true);
			if (process.env.NODE_ENV === "development") {
				console.info("[travelStats] cache miss — fetching GetCardCounts (single query)");
			}
		}
		setCacheChecked(true);
	}, []);

	const { loading, data } = useQuery(GetCardCountsDocument, {
		skip: !shouldFetch,
		onCompleted: (d) => {
			const c = computeCardCountsFromGetCardCounts(d);
			if (!c) return;
			setCachedStats(c);
			setCachedStatsState({ ...c, date: getTodayDateString() });
			if (process.env.NODE_ENV === "development") {
				console.info("[travelStats] GetCardCounts loaded and written to daily cache");
			}
		},
	});

	const computed = useMemo(() => computeCardCountsFromGetCardCounts(data), [data]);
	const display = cachedStats ?? computed;

	const getCountValue = (isLoading: boolean, count: number | undefined) =>
		isLoading ? <CountCardLoadingSpinner /> : (count ?? 0);

	const isLoadingAll = !cacheChecked || (shouldFetch && loading && !cachedStats);

	return (
		<>
			<style>{spinnerStyles}</style>
			<div id='countCardSection' className={styles.countCardSection}>
				<CountCard
					id='1'
					cardTitle='Holiday Count'
					countValue={getCountValue(isLoadingAll, display?.holidayCount)}
					pagePath='/holidays'
					enabledBoolean={!isLoadingAll}
					backgroundIcon={<FlightTakeoffIcon fontSize='large' />}
				/>

				<CountCard
					id='2'
					cardTitle='Travel Companion Count'
					countValue={getCountValue(isLoadingAll, display?.travelCompanionCount)}
					pagePath='/people'
					enabledBoolean={!isLoadingAll}
					backgroundIcon={<SupervisorAccountIcon fontSize='large' />}
				/>

				<CountCard
					id='3'
					cardTitle='Continent Count'
					countValue={getCountValue(isLoadingAll, display?.continentsCount)}
					pagePath='/continents'
					enabledBoolean={!isLoadingAll}
					backgroundIcon={<PublicIcon fontSize='large' />}
				/>

				<CountCard
					id='4'
					cardTitle='Countries Count'
					countValue={getCountValue(isLoadingAll, display?.countriesCount)}
					pagePath='/countries'
					enabledBoolean={!isLoadingAll}
					backgroundIcon={<MapIcon fontSize='large' />}
				/>

				<CountCard
					id='5'
					cardTitle='Cities Count'
					countValue={getCountValue(isLoadingAll, display?.citiesCount)}
					pagePath='/cities'
					enabledBoolean={!isLoadingAll}
					backgroundIcon={<LocationCityIcon fontSize='large' />}
				/>

				<CountCard
					id='6'
					cardTitle='Capitals Count'
					countValue={getCountValue(isLoadingAll, display?.capitalsCount)}
					pagePath='/cities'
					enabledBoolean={!isLoadingAll}
					backgroundIcon={<PinDropIcon fontSize='large' />}
				/>

				<CountCard
					id='7'
					cardTitle='Towns Count'
					countValue={getCountValue(isLoadingAll, display?.townsCount)}
					pagePath='/locations'
					enabledBoolean={!isLoadingAll}
					backgroundIcon={<HouseIcon fontSize='large' />}
				/>

				<CountCard
					id='8'
					cardTitle='Islands Count'
					countValue={getCountValue(isLoadingAll, display?.islandsCount)}
					pagePath='/locations'
					enabledBoolean={!isLoadingAll}
					backgroundIcon={<BeachAccessIcon fontSize='large' />}
				/>
			</div>
		</>
	);
}
