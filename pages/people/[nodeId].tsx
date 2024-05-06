import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import AttendedHolidayList from "../../components/Lists/AttendedHolidayList";
import Loading from "../../components/Loading/Loading";
import PageHeader from "../../components/PageHeader/PageHeader";
import Toast from "../../components/Toast/Toast";
import { GetPersonByIdDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import styles from "../../styles/Home.module.css";
import withAuth from "../api/auth/withAuth";

function PersonPage() {
	const router = useRouter(); // Import the Next router
	const { nodeId }: any = router.query; // Use the same variable name as the [nodeId] file name
	//LogS.log("nodeId: ", nodeId);

	// Get the person by Id
	const { loading, error, data } = useQuery(GetPersonByIdDocument, {
		variables: { nodeId }, // Pass the variable to the query);
	});
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetCountryByIdDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetCountryByIdDocument) GraphQL Error: " + error.message} duration={5} />;
	}
	//LogS.log("Person [nodeId]: data", data);

	// Extract the data into usable variables
	const { name, aliases, attendedHolidays }: any = data?.people[0];
	//LogS.log("person data: ", data?.people[0]);
	// LogS.log("attendedHolidays data: ", attendedHolidays);

	return (
		<Layout NavbarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle={name} />

				<h2>Person Name: {name}</h2>

				<h3>Aliases: {aliases}</h3>

				<h4>Attended Holiday Count: {attendedHolidays.length}</h4>

				<h4>Holidays been on:</h4>

				<AttendedHolidayList holidays={attendedHolidays} />
			</section>
		</Layout>
	);
}

export default withAuth(PersonPage);
