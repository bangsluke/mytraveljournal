import { useQuery } from "@apollo/client";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PublicIcon from "@mui/icons-material/Public";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import GraphQLQueriesS from "../../graphql/GraphQLQueriesS";
import LogS from "../../services/LogS";
import Toast from "../Toast/Toast";
import { Person } from "./../../types/types";
import CountCard from "./CountCard";
import styles from "./CountCard.module.css";

// Get the number of holidays
const useGetHolidayCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_HOLIDAYS);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useGetHolidayCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetHolidayCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.holidays).length; // Else - get the number of items
	LogS.log("data from useGetHolidayCount", data);
	return numberOfItems;
};

// Get the number of continents
const useGetContinentCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CONTINENTS);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useGetContinentCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetContinentCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.continents).length; // Else - get the number of items
	// LogS.log("data from useGetContinentCount", data);
	return numberOfItems;
};

// Get the number of countries
const useGetCountryCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_COUNTRIES);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useGetCountryCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetCountryCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.countries).length; // Else - get the number of items
	// LogS.log("data from useGetCountryCount", data);
	return numberOfItems;
};

// Get the number of cities
const useGetCityCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CITIES);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useGetCityCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetCityCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.cities).length; // Else - get the number of items
	// LogS.log("data from useGetCityCount", data);
	return numberOfItems;
};

// Get the number of islands
const useGetIslandCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_ISLANDS);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useGetIslandCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetIslandCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.islands).length; // Else - get the number of items
	// LogS.log("data from useGetIslandCount", data);
	return numberOfItems;
};

// Get the number of people
const useGetPeopleCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_PEOPLE);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
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

// Get the number of capitals
const useGetCapitalCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CAPITALS, {
		variables: { capitalBoolean: true }, // Pass the variable to the query
	});
	// LogS.log("data from useGetCapitalCount", data);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useGetCapitalCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetCapitalCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.cities).length; // Else - get the number of items
	// LogS.log("data from useGetCapitalCount", data);
	return numberOfItems;
};

// Define a count card section that holds several count card components.
export default function CountCardSection() {
	return (
		<div id='countCardSection' className={styles.countCardSection}>
			<CountCard
				id='1'
				cardTitle='Holiday Count'
				countValue={useGetHolidayCount()}
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
				countValue={useGetContinentCount()}
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
				countValue={useGetCountryCount()}
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
				countValue={useGetCityCount()}
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
				id='6'
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
			<CountCard
				id='7'
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
		</div>
	);
}
