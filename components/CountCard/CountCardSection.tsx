import { useQuery } from "@apollo/client";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HouseIcon from "@mui/icons-material/House";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PublicIcon from "@mui/icons-material/Public";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import GraphQLQueriesS from "../../graphql/GraphQLQueriesS";
import { GetCardCountsDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import Toast from "../Toast/Toast";
import { Person } from "./../../types/types";
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
	townsCount: number;
	islandsData: CountValue[] | undefined;
	islandsCount: number;
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
		townsCount: 0,
		islandsData: [],
		islandsCount: 0,
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
		townsCount: data?.towns.length ?? 0, // TODO: Filter out towns not visited
		islandsData: data?.islands ?? [],
		islandsCount: data?.islands.length ?? 0, // TODO: Filter out islands not visited
	};
	LogS.log("data from useGetCardCounts", cardCounts);
	return cardCounts;
};

// Get the number of people
const useGetPeopleCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_PEOPLE);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = ""); // If loading - show blank text
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useGetPeopleCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetPeopleCount GraphQL Error: " + error.message} duration={5} />;
	}
	// Else - get the number of items and filter out people with no holidays
	const peopleWithAtLeastOneHoliday = data.people.filter((person: Person) => person.attendedHolidays && person.attendedHolidays.length > 0);
	// LogS.log("peopleWithAtLeastOneHoliday", peopleWithAtLeastOneHoliday);
	numberOfItems = peopleWithAtLeastOneHoliday.length;
	return numberOfItems;
};

// Define a count card section that holds several count card components.
export default function CountCardSection() {
	const countCardData: CardCountResults = useGetCardCounts();

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
				countValue={countCardData.townsCount}
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
				countValue={countCardData.islandsCount}
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
				countValue={useGetPeopleCount()}
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
