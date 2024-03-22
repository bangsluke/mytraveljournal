import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../graphql/GraphQLQueriesS";
import LogS from "../../services/LogS";
import { Person } from "../../types/types";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function PersonsList() {
	const router = useRouter(); // Import the Next router

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_PEOPLE);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("GraphQLQueriesS.GET_PEOPLE GraphQL Error: ", error.message);
		return (
			<>
				<p>Error : {error.message}</p>
				<Toast message={"GraphQLQueriesS.GET_PEOPLE GraphQL Error: " + error.message} duration={5} />
			</>
		);
	}

	LogS.log("person data: ", data);

	// Filter out people with no holidays and then sort by the length of attendedHolidays
	const sortedAndFilteredPeople = data.people
		.filter((person: Person) => person.attendedHolidays && person.attendedHolidays.length > 0)
		.sort((a: Person, b: Person) => b.attendedHolidays.length - a.attendedHolidays.length);

	LogS.log("Sorted and filtered person data: ", sortedAndFilteredPeople);

	return (
		<div className={styles.dataList}>
			<ul>
				{sortedAndFilteredPeople.map(({ name, nodeId }: Person) => (
					<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/people/${nodeId}` })}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
