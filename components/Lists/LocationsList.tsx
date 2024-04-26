import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GetLocationsListDocument, Town } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function LocationsList() {
	const router = useRouter(); // Import the Next router

	// Get the list of locations
	const { loading, error, data } = useQuery(GetLocationsListDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetLocationsListDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetLocationsListDocument) GraphQL Error: " + error.message} duration={5} />;
	}

	LogS.log("locations data: ", data);

	function removeZeroLinkedHolidays(obj) {
		let result = {
			counties: [],
			islands: [],
			states: [],
			towns: [],
		};

		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				let filteredItems = obj[key].filter((item) => item.linkedHolidays.length > 0);
				result[key] = filteredItems;
			}
		}

		return result;
	}

	let output = removeZeroLinkedHolidays(data);
	console.log("output: ", output);

	const locations = Object.values(output).flatMap((item) => item);
	const newObject = {
		locations,
	};

	console.log("newObject: ", newObject);

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
