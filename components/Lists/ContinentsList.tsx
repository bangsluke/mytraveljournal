import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../graphql/GraphQLQueriesS";
import LogS from "../../services/LogS";
import { Continent } from "../../types/types";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function ContinentsList() {
	const router = useRouter(); // Import the Next router

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CONTINENTS);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("GraphQLQueriesS.GET_CONTINENTS GraphQL Error: ", error.message);
		return (
			<>
				<p>Error : {error.message}</p>
				<Toast message={"GraphQLQueriesS.GET_CONTINENTS GraphQL Error: " + error.message} duration={5} />
			</>
		);
	}

	// TODO: Order continents by number of times visited

	return (
		<div className={styles.dataList}>
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
