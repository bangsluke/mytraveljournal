import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../graphql/GraphQLQueriesS";
import LogS from "../../services/LogS";
import { Town } from "../../types/types";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function TownsList() {
	const router = useRouter(); // Import the Next router

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_TOWNS);
	if (loading) return <Loading />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("GraphQLQueriesS.GET_TOWNS GraphQL Error: ", error.message);
		return (
			<>
				<p>Error : {error.message}</p>
				<Toast message={"GraphQLQueriesS.GET_TOWNS GraphQL Error: " + error.message} duration={5} />
			</>
		);
	}

	LogS.log("towns data: ", data);

	// Filter out towns with no holidays and then sort by the length of timesVisited
	//const sortedAndFilteredTowns = data.towns;
	const sortedAndFilteredTowns = data.towns
		.filter((town: Town) => town.linkedHolidays && town.linkedHolidays.length > 0)
		.sort((a: any, b: any) => b.linkedHolidays.length - a.linkedHolidays.length);

	LogS.log("Sorted and filtered town data: ", sortedAndFilteredTowns);

	// TODO: Order towns by number of times visited

	return (
		<div className={styles.dataList}>
			<ul>
				{sortedAndFilteredTowns.map(({ name, nodeId }: Town) => (
					<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/towns/${nodeId}` })}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
