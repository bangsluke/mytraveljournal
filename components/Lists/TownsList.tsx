import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GetTownsListDocument, Town } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function TownsList() {
	const router = useRouter(); // Import the Next router

	// Get the list of towns
	const { loading, error, data } = useQuery(GetTownsListDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetTownsListDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetTownsListDocument) GraphQL Error: " + error.message} duration={5} />;
	}

	LogS.log("towns data: ", data);

	// Filter out towns with no holidays and then sort by the length of timesVisited
	//const sortedAndFilteredTowns = data.towns;
	const sortedAndFilteredTowns: any = data?.towns
		.filter((town: any) => town.linkedHolidays && town.linkedHolidays.length > 0)
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
