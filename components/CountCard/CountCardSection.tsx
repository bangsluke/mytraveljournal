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
import { City, GetCardCountsDocument } from "../../graphql/__generated__/graphql";
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
	filteredCitiesCount: number;
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
		filteredCitiesCount: 0,
	};
	if (loading) return cardCounts; // If loading - show zeros
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useGetCardCounts GraphQL Error: ", error.message), cardCounts;
		return <Toast message={"useGetCardCounts GraphQL Error: " + error.message} duration={5} />;
	}

	// Filter out cities not visited
	const cityData =
		data?.cities.map((city: any) => ({
			...city,
			linkedHolidays: city.linkedHolidays ?? [], // Ensure linkedHolidays is not undefined
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
		filteredCitiesCount: cityData.filter((city: City) => city.linkedHolidays && city.linkedHolidays.length > 0).length,
	};
	LogS.log("data from useGetCardCounts", cardCounts);
	return cardCounts;
};

// Get the number of capitals
const useGetCapitalCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CAPITALS, {
		variables: { capitalBoolean: true }, // Pass the variable to the query
	});
	LogS.log("data from useGetCapitalCount", data);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = ""); // If loading - show blank text
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useGetCapitalCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetCapitalCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(
		data.cities.filter((city: City) => city.linkedHolidays && city.capital && city.linkedHolidays.length > 0),
	).length; // Else - get the number of items - filtered to number of visits
	// LogS.log("data from useGetCapitalCount", data);
	return numberOfItems;
};

// Get the number of towns
const useGetTownCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_TOWNS);
	// LogS.log("data from useGetTownCount", data);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = ""); // If loading - show blank text
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useGetTownCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetTownCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.towns).length; // Else - get the number of items
	// LogS.log("data from useGetTownCount", data);
	return numberOfItems;

	// TODO: Filter out towns not visited
};

// Get the number of islands
const useGetIslandCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_ISLANDS);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = ""); // If loading - show blank text
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useGetIslandCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetIslandCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.islands).length; // Else - get the number of items
	// LogS.log("data from useGetIslandCount", data);
	return numberOfItems;

	// TODO: Filter out islands not visited
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
				countValue={useGetCapitalCount()}
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
				countValue={useGetTownCount()}
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
				countValue={useGetIslandCount()}
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
