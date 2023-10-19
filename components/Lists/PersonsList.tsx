import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import { Person } from "../../types/types";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function PersonsList() {
	const router = useRouter(); // Import the Next router

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_PEOPLE);
	if (loading) return <p>Loading...</p>;
	if (error) {
		// If error - show error message, and raise an error toast
		console.error("GraphQLQueriesS.GET_PEOPLE GraphQL Error: ", error.message);
		return (
			<>
				<p>Error : {error.message}</p>
				<Toast message={"GraphQLQueriesS.GET_PEOPLE GraphQL Error: " + error.message} duration={5} />
			</>
		);
	}

	// console.log("person data: ", data);

	return (
		<div className={styles.dataList}>
			<h3 className={styles.clickableHeader} onClick={() => router.push({ pathname: `/people` })}>
				Travel Comapanions
			</h3>
			<ul>
				{data.people.map(({ name, node_id }: Person) => (
					<li key={node_id} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/people/${node_id}` })}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
