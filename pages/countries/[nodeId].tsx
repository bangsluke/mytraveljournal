import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import Loading from "../../components/Loading/Loading";
import PageHeader from "../../components/PageHeader/PageHeader";
import Toast from "../../components/Toast/Toast";
import { GetCountryByIdDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import NodeTraversalsS from "../../services/NodeTraversalsS";
import styles from "../../styles/Home.module.css";
import withAuth from "../api/auth/withAuth";

function CountryPage() {
	const router = useRouter(); // Import the Next router
	const { nodeId }: any = router.query; // Use the same variable name as the [nodeId] file name
	// LogS.log("nodeId: ", nodeId);

	// Get the country by Id
	const { loading, error, data } = useQuery(GetCountryByIdDocument, {
		variables: { nodeId }, // Pass the variable to the query);
	});
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetCountryByIdDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetCountryByIdDocument) GraphQL Error: " + error.message} duration={5} />;
	}
	// LogS.log("Country [nodeId]: data", data);

	// Extract the data into usable variables
	const country: any = data?.countries[0];
	const timesVisited: number | undefined = NodeTraversalsS.findHolidayCountOfLocation(country);
	// LogS.log("country data: ", country);

	return (
		<Layout NavbarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle={country.name} />

				<h1>Country Page</h1>

				<h3>Country Name: {country.name}</h3>
				<p>{nodeId}</p>

				<div>Number of times visited: {timesVisited}</div>
			</section>
		</Layout>
	);
}

export default withAuth(CountryPage);
