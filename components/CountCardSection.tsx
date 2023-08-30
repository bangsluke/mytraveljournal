import { useQuery } from "@apollo/client";
import GraphQLQueriesS from "../backend/graphql/GraphQLQueriesS";
import styles from "../styles/Travel.module.css";
import CountCard from "./CountCard";

// Get the number of countries
const getCountryCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_COUNTRIES);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) return (numberOfItems = error.message); // If error - show error message
	numberOfItems = Object.keys(data.countries).length; // Else - get the number of items
	console.log("data from getCountryCount", data);
	return numberOfItems;
};

// Get the number of cities
const getCityCount = () => {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CITIES);
	let numberOfItems: number | string = 0;
	if (loading) return (numberOfItems = "Loading..."); // If loading - show loading text
	if (error) return (numberOfItems = error.message); // If error - show error message
	numberOfItems = Object.keys(data.cities).length; // Else - get the number of items
	console.log("data from getCountryCount", data);
	return numberOfItems;
};

// Define a count card section that holds several count card components.
export default function CountCardSection() {
	return (
		<div id='countCardSection' className={styles.countCardSection}>
			<CountCard id='1' cardTitle='Countries Count' countValue={getCountryCount()} />
			<CountCard id='2' cardTitle='Cities Count' countValue={getCityCount()} />
		</div>
	);
}
