import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Layout from "../../components/Layouts/Layout";
import AttendedHolidayList from "../../components/Lists/AttendedHolidayList";
import PageHeader from "../../components/PageHeader/PageHeader";
import GraphQLQueriesS from "../../graphql/GraphQLQueriesS";
import LogS from "../../services/LogS";
import styles from "../../styles/Home.module.css";
import { Person } from "../../types/types";

export default function PersonPage() {
	const router = useRouter(); // Import the Next router
	const { nodeId } = router.query; // Use the same variable name as the [nodeId] file name
	LogS.log("nodeId: ", nodeId);

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_PERSON_BY_ID, {
		variables: { nodeId }, // Pass the variable to the query
	});
	LogS.log("data", data);

	if (loading) return <p>Loading...</p>;
	if (error)
		return (
			<>
				<p>Error : {error.message}</p>
				<div
					className={styles.ErrorMessageDiv}
					onClick={() => router.back()} // Go back to the last visited page
				>
					<h4>Click here to go back</h4>
				</div>
			</>
		);

	// Extract the data into usable variables
	const { name, aliases, attendedHolidays }: Person = data.people[0];

	console.log("person data: ", data);
	console.log("attendedHolidays data: ", attendedHolidays);

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
