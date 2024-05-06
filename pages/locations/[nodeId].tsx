import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import Loading from "../../components/Loading/Loading";
import PageHeader from "../../components/PageHeader/PageHeader";
import Toast from "../../components/Toast/Toast";
import { GetLocationByIdDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import NodeTraversalsS from "../../services/NodeTraversalsS";
import styles from "../../styles/Home.module.css";
import withAuth from "../api/auth/withAuth";

function LocationsPage() {
	const router = useRouter(); // Import the Next router
	const { nodeId }: any = router.query; // Use the same variable name as the [nodeId] file name
	// LogS.log("nodeId: ", nodeId);

	// Get the town by Id
	const { loading, error, data } = useQuery(GetLocationByIdDocument, {
		variables: { nodeId }, // Pass the variable to the query);
	});
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetLocationByIdDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetLocationByIdDocument) GraphQL Error: " + error.message} duration={5} />;
	}
	// LogS.log("Location [nodeId]: data", data);

	// Extract the data into usable variables
	const location: any = data?.locations[0];
	const timesVisited: number | undefined = NodeTraversalsS.findHolidayCountOfLocation(location);
	const lastHoliday: any = NodeTraversalsS.findHighestSortDateValueHolidayOfLocation(location);

	return (
		<Layout NavbarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle={location.name} />

				<h1>Location Page</h1>

				<h3>Location Name: {location.name}</h3>
				<p>{nodeId}</p>

				<div>Number of times visited: {timesVisited}</div>

				<p>
					Last visited continent:{" "}
					<p className={styles.lastHoliday} onClick={() => router.push({ pathname: `/holidays/${lastHoliday.nodeId}` })}>
						{lastHoliday.name} (
						{new Date(parseInt(lastHoliday.dateYear, 10), parseInt(lastHoliday.dateMonth, 10), 1).toLocaleString(undefined, { month: "short" })}{" "}
						{lastHoliday.dateYear})
					</p>
				</p>
			</section>
		</Layout>
	);
}

export default withAuth(LocationsPage);
