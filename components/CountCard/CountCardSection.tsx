import { useQuery } from "@apollo/client";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HouseIcon from "@mui/icons-material/House";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PublicIcon from "@mui/icons-material/Public";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { GetCardCountsDocument } from "../../graphql/__generated__/graphql";
import { computeCardCountsFromGetCardCounts } from "../../services/computeCardCounts";
import LogS from "../../services/LogS";
import CountCard from "./CountCard";
import styles from "./CountCard.module.css";

type CardCountResults = {
	holidayCount: number;
	filteredTravelCompanionCount: number;
	filteredContinentsCount: number;
	filteredCountriesCount: number;
	filteredCitiesCount: number;
	filteredCapitalsCount: number;
	filteredTownsCount: number;
	filteredIslandsCount: number;
	isLoading: boolean;
};

const emptyCounts: CardCountResults = {
	holidayCount: 0,
	filteredTravelCompanionCount: 0,
	filteredContinentsCount: 0,
	filteredCountriesCount: 0,
	filteredCitiesCount: 0,
	filteredCapitalsCount: 0,
	filteredTownsCount: 0,
	filteredIslandsCount: 0,
	isLoading: true,
};

const useGetCardCounts = () => {
	const { loading, error, data } = useQuery(GetCardCountsDocument);

	if (loading) return { ...emptyCounts, isLoading: true };

	if (error) {
		LogS.error("useGetCardCounts GraphQL Error: ", error.message);
		return { ...emptyCounts, isLoading: false };
	}

	const c = computeCardCountsFromGetCardCounts(data);
	if (!c) return { ...emptyCounts, isLoading: false };

	return {
		holidayCount: c.holidayCount,
		filteredTravelCompanionCount: c.travelCompanionCount,
		filteredContinentsCount: c.continentsCount,
		filteredCountriesCount: c.countriesCount,
		filteredCitiesCount: c.citiesCount,
		filteredCapitalsCount: c.capitalsCount,
		filteredTownsCount: c.townsCount,
		filteredIslandsCount: c.islandsCount,
		isLoading: false,
	};
};

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

export default function CountCardSection() {
	const countCardData = useGetCardCounts();

	const getCountValue = (count: number) => (countCardData.isLoading ? <CountCardLoadingSpinner /> : count);

	return (
		<>
			<style>{spinnerStyles}</style>
			<div id='countCardSection' className={styles.countCardSection}>
				<CountCard
					id='1'
					cardTitle='Holiday Count'
					countValue={getCountValue(countCardData.holidayCount)}
					pagePath='/holidays'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={<FlightTakeoffIcon />}
				/>

				<CountCard
					id='2'
					cardTitle='Travel Companion Count'
					countValue={getCountValue(countCardData.filteredTravelCompanionCount)}
					pagePath='/people'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={<SupervisorAccountIcon />}
				/>

				<CountCard
					id='3'
					cardTitle='Continent Count'
					countValue={getCountValue(countCardData.filteredContinentsCount)}
					pagePath='/continents'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={<PublicIcon />}
				/>
				<CountCard
					id='4'
					cardTitle='Countries Count'
					countValue={getCountValue(countCardData.filteredCountriesCount)}
					pagePath='/countries'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={<MapIcon />}
				/>
				<CountCard
					id='5'
					cardTitle='Cities Count'
					countValue={getCountValue(countCardData.filteredCitiesCount)}
					pagePath='/cities'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={<LocationCityIcon />}
				/>
				<CountCard
					id='6'
					cardTitle='Capitals Count'
					countValue={getCountValue(countCardData.filteredCapitalsCount)}
					pagePath='/cities'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={<PinDropIcon />}
				/>
				<CountCard
					id='7'
					cardTitle='Towns Count'
					countValue={getCountValue(countCardData.filteredTownsCount)}
					pagePath='/locations'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={<HouseIcon />}
				/>
				<CountCard
					id='8'
					cardTitle='Islands Count'
					countValue={getCountValue(countCardData.filteredIslandsCount)}
					pagePath='/locations'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={<BeachAccessIcon />}
				/>
			</div>
		</>
	);
}
