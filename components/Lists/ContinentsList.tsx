import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Continent, GetContinentsDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function ContinentsList() {
	const router = useRouter(); // Import the Next router

	// Get the list of continents
	const { loading, error, data } = useQuery(GetContinentsDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetContinentsDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetContinentsDocument) GraphQL Error: " + error.message} duration={5} />;
	}

	LogS.log("ContinentsList: continents data: ", data);

	// Filter out continents not visited
	const sortedAndFilteredContinents: any = data?.continents;
	// TODO: Order continents by number of times visited

	return (
		<div className={styles.dataList}>
			<ul>
				{sortedAndFilteredContinents.map(({ name, nodeId }: Continent) => (
					<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/continents/${nodeId}` })}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
