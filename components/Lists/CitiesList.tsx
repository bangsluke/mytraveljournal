import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../graphql/GraphQLQueriesS";
import LogS from "../../services/LogS";
import { City } from "../../types/types";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function CitiesList() {
	const router = useRouter(); // Import the Next router

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CITIES);
	if (loading) return <Loading />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("GraphQLQueriesS.GET_CITIES GraphQL Error: ", error.message);
		return (
			<>
				<p>Error : {error.message}</p>
				<Toast message={"GraphQLQueriesS.GET_CITIES GraphQL Error: " + error.message} duration={5} />
			</>
		);
	}

	LogS.log("cities data: ", data);

	// Filter out cities with no holidays and then sort by the length of timesVisited
	//const sortedAndFilteredCities = data.cities;
	const sortedAndFilteredCities = data.cities
		.filter((city: City) => city.linkedHolidays && city.linkedHolidays.length > 0)
		.sort((a: any, b: any) => b.linkedHolidays.length - a.linkedHolidays.length);

	LogS.log("Sorted and filtered city data: ", sortedAndFilteredCities);

	return (
		<div className={styles.dataList}>
			<ul>
				{sortedAndFilteredCities.map(({ name, nodeId }: City) => (
					<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/cities/${nodeId}` })}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
