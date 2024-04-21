import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { City, GetCapitalsDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function CapitalsList() {
	const router = useRouter(); // Import the Next router

	// Get the list of capitals
	const { loading, error, data } = useQuery(GetCapitalsDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetCapitalsDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetCapitalsDocument) GraphQL Error: " + error.message} duration={5} />;
	}

	// const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CAPITALS);
	// if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	// if (error) {
	// 	// If error - show error message, and raise an error toast
	// 	LogS.error("GraphQLQueriesS.GET_CAPITALS GraphQL Error: ", error.message);
	// 	return (
	// 		<>
	// 			<p>Error : {error.message}</p>
	// 			<Toast message={"GraphQLQueriesS.GET_CAPITALS GraphQL Error: " + error.message} duration={5} />
	// 		</>
	// 	);
	// }

	LogS.log("CapitalsList: capitals data: ", data);

	// Filter out capitals with no holidays and then sort by the length of timesVisited
	//const sortedAndFilteredCapitals = data.capitals;
	const sortedAndFilteredCapitals: any = data?.cities
		.filter((cities: any) => cities.linkedHolidays && cities.capital && cities.linkedHolidays.length > 0)
		.sort((a: any, b: any) => b.linkedHolidays.length - a.linkedHolidays.length);

	LogS.log("CapitalsList: Sorted and filtered capital data: ", sortedAndFilteredCapitals);

	return (
		<div className={styles.dataList}>
			<ul>
				{sortedAndFilteredCapitals.map(({ name, nodeId }: City) => (
					<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/capitals/${nodeId}` })}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
