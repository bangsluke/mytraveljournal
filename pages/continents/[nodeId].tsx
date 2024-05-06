import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import Loading from "../../components/Loading/Loading";
import PageHeader from "../../components/PageHeader/PageHeader";
import Toast from "../../components/Toast/Toast";
import { GetContinentByIdDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import NodeTraversalsS from "../../services/NodeTraversalsS";
import styles from "../../styles/Home.module.css";
import withAuth from "../api/auth/withAuth";

function ContinentPage() {
	const router = useRouter(); // Import the Next router
	const { nodeId }: any = router.query; // Use the same variable name as the [nodeId] file name
	// LogS.log("nodeId: ", nodeId);

	// Get the continent by Id
	const { loading, error, data } = useQuery(GetContinentByIdDocument, {
		variables: { nodeId }, // Pass the variable to the query);
	});
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetContinentByIdDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetContinentByIdDocument) GraphQL Error: " + error.message} duration={5} />;
	}
	// LogS.log("Continent [nodeId]: data", data);

	// Extract the data into usable variables
	const continent: any = data?.continents[0];
	const timesVisited: number | undefined = NodeTraversalsS.findHolidayCountOfLocation(continent);
	const lastHoliday: any = NodeTraversalsS.findHighestSortDateValueHolidayOfLocation(continent);
	// LogS.log("continent data: ", continent);

	return (
		<Layout NavbarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle={continent.name} />

				<h1>Continent Page</h1>

				<h3>Continent Name: {continent.name}</h3>
				<p>{nodeId}</p>

				<p>Number of times visited: {timesVisited}</p>

				<div>
					Last visited:{" "}
					<p className={styles.lastHoliday} onClick={() => router.push({ pathname: `/holidays/${lastHoliday.nodeId}` })}>
						{lastHoliday.name} (
						{new Date(parseInt(lastHoliday.dateYear, 10), parseInt(lastHoliday.dateMonth, 10), 1).toLocaleString(undefined, { month: "short" })}{" "}
						{lastHoliday.dateYear})
					</p>
				</div>
			</section>
		</Layout>
	);
}

export default withAuth(ContinentPage);
