import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../graphql/GraphQLQueriesS";
import LogS from "../../services/LogS";
import { Country } from "../../types/types";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function CountryList() {
	const router = useRouter(); // Import the Next router

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_COUNTRIES);
	if (loading) return <p>Loading...</p>;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("GraphQLQueriesS.GET_COUNTRIES GraphQL Error: ", error.message);
		return (
			<>
				<p>Error : {error.message}</p>
				<Toast message={"GraphQLQueriesS.GET_COUNTRIES GraphQL Error: " + error.message} duration={5} />
			</>
		);
	}

	return (
		<div className={styles.dataList}>
			<ul>
				{data.countries.map(({ name, nodeId }: Country) => (
					<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/countries/${nodeId}` })}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
