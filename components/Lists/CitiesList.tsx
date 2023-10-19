import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import { City } from "../../types/types";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function CitiesList() {
	const router = useRouter(); // Import the Next router

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CITIES);
	if (loading) return <p>Loading...</p>;
	if (error) {
		// If error - show error message, and raise an error toast
		console.error("GraphQLQueriesS.GET_CITIES GraphQL Error: ", error.message);
		return (
			<>
				<p>Error : {error.message}</p>
				<Toast message={"GraphQLQueriesS.GET_CITIES GraphQL Error: " + error.message} duration={5} />
			</>
		);
	}

	return (
		<div className={styles.dataList}>
			<h3 className={styles.clickableHeader} onClick={() => router.push({ pathname: `/cities` })}>
				Cities Visited
			</h3>
			<ul>
				{data.cities.map(({ name, node_id }: City) => (
					<li key={node_id} className={styles.clickableListItem}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
