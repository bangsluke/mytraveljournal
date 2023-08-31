import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import { Cities } from "../../types/types";
import styles from "../styles/Travel.module.css";

export default function CitiesList() {
	const router = useRouter();

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CITIES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<div className={styles.dataList}>
			<h3 className={styles.clickableHeader} onClick={() => router.push({ pathname: `/cities` })}>
				Cities Visited
			</h3>
			<ul>
				{data.cities.map(({ name }: Cities) => (
					<li key={name} className={styles.clickableListItem}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
