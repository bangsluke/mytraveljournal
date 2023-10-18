import { useQuery } from "@apollo/client";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import Toast from "../Toast/Toast";
import CountCard from "./CountCard";
import styles from "./CountCard.module.css";

// Get the number of continents
const useGetContinentCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CONTINENTS);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) {
		// If error - show error message, and raise an error toast
		console.error("useGetContinentCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetContinentCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.continents).length; // Else - get the number of items
	// console.log("data from useGetContinentCount", data);
	return numberOfItems;
};

// Get the number of countries
const useGetCountryCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_COUNTRIES);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) {
		// If error - show error message, and raise an error toast
		console.error("useGetCountryCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetCountryCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.countries).length; // Else - get the number of items
	// console.log("data from useGetCountryCount", data);
	return numberOfItems;
};

// Get the number of cities
const useGetCityCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CITIES);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) {
		// If error - show error message, and raise an error toast
		console.error("useGetCityCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetCityCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.cities).length; // Else - get the number of items
	// console.log("data from useGetCityCount", data);
	return numberOfItems;
};

// Get the number of islands
const useGetIslandCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_ISLANDS);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) {
		// If error - show error message, and raise an error toast
		console.error("useGetIslandCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetIslandCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.islands).length; // Else - get the number of items
	// console.log("data from useGetIslandCount", data);
	return numberOfItems;
};

// Get the number of people
const useGetPeopleCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_PEOPLE);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) {
		// If error - show error message, and raise an error toast
		console.error("useGetPeopleCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetPeopleCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.people).length; // Else - get the number of items
	// console.log("data from useGetPersonCount", data);
	return numberOfItems;
};

// Get the number of holidays
const useGetHolidayCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_HOLIDAYS);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) {
		// If error - show error message, and raise an error toast
		console.error("useGetHolidayCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetHolidayCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.holidays).length; // Else - get the number of items
	// console.log("data from useGetHolidayCount", data);
	return numberOfItems;
};

// Get the number of capitals
const useGetCapitalCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CAPITALS, {
		variables: { capitalBoolean: true }, // Pass the variable to the query
	});
	console.log("data from useGetCapitalCount", data);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) {
		// If error - show error message, and raise an error toast
		console.error("useGetCapitalCount GraphQL Error: ", error.message), (numberOfItems = 0);
		return <Toast message={"useGetCapitalCount GraphQL Error: " + error.message} duration={5} />;
	}
	numberOfItems = Object.keys(data.cities).length; // Else - get the number of items
	console.log("data from useGetCapitalCount", data);
	return numberOfItems;
};

// Define a count card section that holds several count card components.
export default function CountCardSection() {
	return (
		<div id='countCardSection' className={styles.countCardSection}>
			<CountCard id='1' cardTitle='Holiday Count' countValue={useGetHolidayCount()} pagePath='/holidays' />
			<CountCard id='2' cardTitle='Continent Count' countValue={useGetContinentCount()} pagePath='/continents' />
			<CountCard id='3' cardTitle='Countries Count' countValue={useGetCountryCount()} pagePath='/countries' />
			<CountCard id='4' cardTitle='Cities Count' countValue={useGetCityCount()} pagePath='/cities' />
			<CountCard id='5' cardTitle='Islands Count' countValue={useGetIslandCount()} pagePath='/islands' />
			<CountCard id='6' cardTitle='Travel Companion Count' countValue={useGetPeopleCount()} pagePath='/people' />
			<CountCard id='7' cardTitle='Capitals Count' countValue={useGetCapitalCount()} pagePath='/capitals' />
		</div>
	);
}
