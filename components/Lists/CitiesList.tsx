import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { City, GetCitiesListDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function CitiesList() {
	const router = useRouter(); // Import the Next router

	// Get the list of cities
	const { loading, error, data } = useQuery(GetCitiesListDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetCitiesListDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetCitiesListDocument) GraphQL Error: " + error.message} duration={5} />;
	}

	// LogS.log("CitiesList: cities data: ", data);

	// Filter out cities with no holidays and then sort by the length of timesVisited
	//const sortedAndFilteredCities = data.cities;
	const sortedAndFilteredCities: any = data?.cities
		.filter((city: any) => city.linkedHolidays && city.linkedHolidays.length > 0)
		.sort((a: any, b: any) => b.linkedHolidays.length - a.linkedHolidays.length);

	LogS.log("CitiesList: Sorted and filtered city data: ", sortedAndFilteredCities);

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
