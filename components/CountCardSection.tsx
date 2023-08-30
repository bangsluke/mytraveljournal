import { useQuery } from "@apollo/client";
import GraphQLQueriesS from "../backend/graphql/GraphQLQueriesS";
import styles from "../styles/Travel.module.css";
import CountCard from "./CountCard";

// Get the number of continents
const useGetContinentCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CONTINENTS);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) return (numberOfItems = error.message); // If error - show error message
	numberOfItems = Object.keys(data.continents).length; // Else - get the number of items
	console.log("data from useGetContinentCount", data);
	return numberOfItems;
};

// Get the number of countries
const useGetCountryCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_COUNTRIES);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) return (numberOfItems = error.message); // If error - show error message
	numberOfItems = Object.keys(data.countries).length; // Else - get the number of items
	console.log("data from useGetCountryCount", data);
	return numberOfItems;
};

// Get the number of cities
const useGetCityCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CITIES);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) return (numberOfItems = error.message); // If error - show error message
	numberOfItems = Object.keys(data.cities).length; // Else - get the number of items
	console.log("data from useGetCityCount", data);
	return numberOfItems;
};

// Get the number of islands
const useGetIslandCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_ISLANDS);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) return (numberOfItems = error.message); // If error - show error message
	numberOfItems = Object.keys(data.islands).length; // Else - get the number of items
	console.log("data from useGetIslandCount", data);
	return numberOfItems;
};

// Get the number of people
const useGetPersonCount = () => {
	console.log("useGetPersonCount");
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_PERSONS);
	console.log("data from useGetPersonCount", data);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) return (numberOfItems = error.message); // If error - show error message
	numberOfItems = Object.keys(data.persons).length; // Else - get the number of items
	console.log("data from useGetPersonCount", data);
	return numberOfItems;
};

// Get the number of holidays
const useGetHolidayCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_HOLIDAYS);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) return (numberOfItems = error.message); // If error - show error message
	numberOfItems = Object.keys(data.holidays).length; // Else - get the number of items
	console.log("data from useGetHolidayCount", data);
	return numberOfItems;
};

// Define a count card section that holds several count card components.
export default function CountCardSection() {
	return (
		<div id='countCardSection' className={styles.countCardSection}>
			<CountCard id='1' cardTitle='Continent Count' countValue={useGetContinentCount()} />
			<CountCard id='2' cardTitle='Countries Count' countValue={useGetCountryCount()} />
			<CountCard id='3' cardTitle='Cities Count' countValue={useGetCityCount()} />
			<CountCard id='4' cardTitle='Islands Count' countValue={useGetIslandCount()} />
			<CountCard id='5' cardTitle='Travel Partners Count' countValue={useGetPersonCount()} />
			<CountCard id='6' cardTitle='Holiday Count' countValue={useGetHolidayCount()} />
		</div>
	);
}
