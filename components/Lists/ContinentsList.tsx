import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import styles from "../../styles/Home.module.css";
import { Continent } from "../../types/types";

export default function ContinentsList() {
	const router = useRouter(); // Import the Next router

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CONTINENTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<div className={styles.dataList}>
			<h3 className={styles.clickableHeader} onClick={() => router.push({ pathname: `/continents` })}>
				Continents Visited
			</h3>
			<ul>
				{data.continents.map(({ name, node_id }: Continent) => (
					<li key={node_id} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/continents/${node_id}` })}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
