import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import styles from "../../styles/Home.module.css";
import { Country } from "../../types/types";

export default function CountryList() {
	const router = useRouter();

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_COUNTRIES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<div className={styles.dataList}>
			<h3 className={styles.clickableHeader} onClick={() => router.push({ pathname: `/countries` })}>
				Countries Visited
			</h3>
			<ul>
				{data.countries.map(({ name, node_id }: Country) => (
					<li key={node_id} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/countries/${node_id}` })}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
