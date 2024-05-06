import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { BaseInformation } from "../../components/BaseInformation/BaseInformation";
import Layout from "../../components/Layout/Layout";
import Loading from "../../components/Loading/Loading";
import PageHeader from "../../components/PageHeader/PageHeader";
import Toast from "../../components/Toast/Toast";
import { GetCityByIdDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import NodeTraversalsS from "../../services/NodeTraversalsS";
import styles from "../../styles/Home.module.css";
import withAuth from "../api/auth/withAuth";

function CityPage() {
	const router = useRouter(); // Import the Next router
	const { nodeId }: any = router.query; // Use the same variable name as the [nodeId] file name
	// LogS.log("nodeId: ", nodeId);

	// Get the city by Id
	const { loading, error, data } = useQuery(GetCityByIdDocument, {
		variables: { nodeId }, // Pass the variable to the query);
	});
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetCityByIdDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetCityByIdDocument) GraphQL Error: " + error.message} duration={5} />;
	}
	// LogS.log("City [nodeId]: data", data);

	// Extract the data into usable variables
	const city: any = data?.cities[0];
	const timesVisited: number | undefined = city.linkedHolidays.length;
	const lastHoliday: any = NodeTraversalsS.findHighestSortDateValueHolidayOfLocation(city);
	// LogS.log("City [nodeId]:", data?.cities[0].linkedHolidays.length);

	return (
		<Layout NavbarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle={city.name} />

				<h1>City Page</h1>

				<BaseInformation node={city} timesVisited={timesVisited} lastHoliday={lastHoliday} />
			</section>
		</Layout>
	);
}

export default withAuth(CityPage);
