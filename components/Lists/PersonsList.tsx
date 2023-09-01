import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import styles from "../../styles/Travel.module.css";
import { Person } from "../../types/types";

export default function PersonsList() {
	const router = useRouter();

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_PERSONS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<div className={styles.dataList}>
			<h3 className={styles.clickableHeader} onClick={() => router.push({ pathname: `/persons` })}>
				Travel Comapanions
			</h3>
			<ul>
				{data.persons.map(({ name, node_id }: Person) => (
					<li key={node_id} className={styles.clickableListItem}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
