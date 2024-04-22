import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Country, GetCountriesListDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function CountryList() {
	const router = useRouter(); // Import the Next router

	// Get the list of countries
	const { loading, error, data } = useQuery(GetCountriesListDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetCountriesListDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetCountriesListDocument) GraphQL Error: " + error.message} duration={5} />;
	}

	// TODO: Order countries by number of times visited
	LogS.log("CountriesList: countries data: ", data);

	// Filter out continents not visited
	const sortedAndFilteredCountries: any = data?.countries;

	return (
		<div className={styles.dataList}>
			<ul>
				{sortedAndFilteredCountries.map(({ name, nodeId }: Country) => (
					<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/countries/${nodeId}` })}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>
		</div>
	);
}
