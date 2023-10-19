import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import { Continent } from "../../types/types";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function ContinentsList() {
	const router = useRouter(); // Import the Next router

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CONTINENTS);
	if (loading) return <p>Loading...</p>;
	if (error) {
		// If error - show error message, and raise an error toast
		console.error("GraphQLQueriesS.GET_CONTINENTS GraphQL Error: ", error.message);
		return (
			<>
				<p>Error : {error.message}</p>
				<Toast message={"GraphQLQueriesS.GET_CONTINENTS GraphQL Error: " + error.message} duration={5} />
			</>
		);
	}

	return (
		<div className={styles.dataList}>
			<h3 className={styles.clickableHeader} onClick={() => router.push({ pathname: `/continents` })}>
				Continents Visited
			</h3>
			<ul>
				{data.continents.map(({ name, nodeId }: Continent) => (
					<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/continents/${nodeId}` })}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
