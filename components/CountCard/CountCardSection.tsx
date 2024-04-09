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
import LogS from "../../services/LogS";
import Toast from "../Toast/Toast";
import CountCard from "./CountCard";
import styles from "./CountCard.module.css";

// Define a count type that just returns the name for now
type CountValue = {
	name: string;
	nodeId: string;
};

type CardCountResults = {
	holidayData: CountValue[] | undefined;
	holidayCount: number;
	continentData: CountValue[] | undefined;
	continentCount: number;
	countriesData: CountValue[] | undefined;
	countriesCount: number;
	citiesData: CountValue[] | undefined;
	filteredCitiesData: CountValue[] | undefined;
	filteredCitiesCount: number;
	filteredCapitalsData: CountValue[] | undefined;
	filteredCapitalsCount: number;
	townsData: CountValue[] | undefined;
	filteredTownsCount: number;
	islandsData: CountValue[] | undefined;
	filteredIslandsCount: number;
	filteredTravelCompanionData: CountValue[] | undefined;
	filteredTravelCompanionCount: number;
};

const useGetCardCounts = () => {
	const { loading, error, data } = useQuery(GetCardCountsDocument);
	let cardCounts: CardCountResults = {
		holidayData: [],
		holidayCount: 0,
		continentData: [],
		continentCount: 0,
		countriesData: [],
		countriesCount: 0,
		citiesData: [],
		filteredCitiesData: [],
		filteredCitiesCount: 0,
		filteredCapitalsData: [],
		filteredCapitalsCount: 0,
		townsData: [],
		filteredTownsCount: 0,
		islandsData: [],
		filteredIslandsCount: 0,
		filteredTravelCompanionData: [],
		filteredTravelCompanionCount: 0,
	};
	if (loading) return cardCounts; // If loading - show zeros
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useGetCardCounts GraphQL Error: ", error.message), cardCounts;
		return <Toast message={"useGetCardCounts GraphQL Error: " + error.message} duration={5} />;
	}

	// Reduce cities down to visited cities
	const visitedCitiesData =
		(data?.cities ?? [])
			.filter((city: any) => city.linkedHolidays?.length > 0) // Filter out cities not visited
			.map((city: any) => ({
				...city,
				linkedHolidays: city.linkedHolidays ?? [], // Ensure linkedHolidays is not undefined
			})) ?? [];

	// Reduce cities down to visited capitals
	const visitedCapitalData =
		(data?.cities ?? [])
			.filter((city: any) => city.linkedHolidays?.length > 0 && city.capital === true) // Filter out cities not visited and not capitals
			.map((city: any) => ({
				...city,
				linkedHolidays: city.linkedHolidays ?? [], // Ensure linkedHolidays is not undefined
				capital: city.capital ?? false, // Ensure capital is not undefined
			})) ?? [];

	// Reduce towns down to visited towns
	const visitedTownsData =
		(data?.towns ?? [])
			.filter((town: any) => town.linkedHolidays?.length > 0) // Filter out towns not visited
			.map((town: any) => ({
				...town,
				linkedHolidays: town.linkedHolidays ?? [], // Ensure linkedHolidays is not undefined
				capital: town.capital ?? false, // Ensure capital is not undefined
			})) ?? [];

	// Reduce islands down to visited islands
	const visitedIslandsData =
		(data?.islands ?? [])
			.filter((island: any) => island.linkedHolidays?.length > 0) // Filter out islands not visited
			.map((island: any) => ({
				...island,
				linkedHolidays: island.linkedHolidays ?? [], // Ensure linkedHolidays is not undefined
			})) ?? [];

	// Reduce down travel companion data to those that have been to a holiday
	const travelledWithCompanionData =
		(data?.people ?? [])
			.filter((person: any) => person.attendedHolidays?.length > 0) // Filter out people not travelled with
			.map((person: any) => ({
				...person,
				attendedHolidays: person.attendedHolidays ?? [], // Ensure linkedHolidays is not undefined
			})) ?? [];

	console.log("data", data);

	// Finalise the card counts data
	cardCounts = {
		holidayData: data?.holidays ?? [],
		holidayCount: data?.holidays.length ?? 0,
		continentData: data?.continents ?? [],
		continentCount: data?.continents.length ?? 0, // TODO: Filter out continents not visited
		countriesData: data?.countries ?? [],
		countriesCount: data?.countries.length ?? 0, // TODO: Filter out countries not visited
		citiesData: data?.cities ?? [],
		filteredCitiesData: visitedCitiesData,
		filteredCitiesCount: visitedCitiesData.length,
		filteredCapitalsData: visitedCapitalData,
		filteredCapitalsCount: visitedCapitalData.length,
		townsData: data?.towns ?? [],
		filteredTownsCount: visitedTownsData.length,
		islandsData: data?.islands ?? [],
		filteredIslandsCount: visitedIslandsData.length,
		filteredTravelCompanionData: travelledWithCompanionData,
		filteredTravelCompanionCount: travelledWithCompanionData.length,
	};
	LogS.log("data from useGetCardCounts", cardCounts);
	return cardCounts;
};

// Define a count card section that holds several count card components.
export default function CountCardSection() {
	const countCardData: any = useGetCardCounts();

	return (
		<div id='countCardSection' className={styles.countCardSection}>
			<CountCard
				id='1'
				cardTitle='Holiday Count'
				countValue={countCardData.holidayCount}
				pagePath='/holidays'
				backgroundIcon={
					<FlightTakeoffIcon
						// @ts-ignore
						fontSize='40'
					/>
				}
			/>

			<CountCard
				id='2'
				cardTitle='Continent Count'
				countValue={countCardData.continentCount}
				pagePath='/continents'
				backgroundIcon={
					<PublicIcon
						// @ts-ignore
						fontSize='40'
					/>
				}
			/>
			<CountCard
				id='3'
				cardTitle='Countries Count'
				countValue={countCardData.countriesCount}
				pagePath='/countries'
				backgroundIcon={
					<MapIcon
						// @ts-ignore
						fontSize='40'
					/>
				}
			/>
			<CountCard
				id='4'
				cardTitle='Cities Count'
				countValue={countCardData.filteredCitiesCount}
				pagePath='/cities'
				backgroundIcon={
					<LocationCityIcon
						// @ts-ignore
						fontSize='40'
					/>
				}
			/>
			<CountCard
				id='5'
				cardTitle='Capitals Count'
				countValue={countCardData.filteredCapitalsCount}
				pagePath='/capitals'
				backgroundIcon={
					<PinDropIcon
						// @ts-ignore
						fontSize='40'
					/>
				}
			/>
			<CountCard
				id='6'
				cardTitle='Towns Count'
				countValue={countCardData.filteredTownsCount}
				pagePath='/towns'
				backgroundIcon={
					<HouseIcon
						// @ts-ignore
						fontSize='40'
					/>
				}
			/>
			<CountCard
				id='7'
				cardTitle='Islands Count'
				countValue={countCardData.filteredIslandsCount}
				pagePath='/islands'
				backgroundIcon={
					<BeachAccessIcon
						// @ts-ignore
						fontSize='40'
					/>
				}
			/>
			<CountCard
				id='8'
				cardTitle='Travel Companion Count'
				countValue={countCardData.filteredTravelCompanionCount}
				pagePath='/people'
				backgroundIcon={
					<SupervisorAccountIcon
						// @ts-ignore
						fontSize='40'
					/>
				}
			/>
		</div>
	);
}
