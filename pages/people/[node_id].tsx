import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import Layout from "../../components/Layouts/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "../../styles/Home.module.css";
import { Person } from "../../types/types";

export default function PersonPage() {
	const router = useRouter(); // Import the Next router
	const { nodeId } = router.query; // Use the same variable name as the [nodeId] file name
	console.log("nodeId: ", nodeId);

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_PERSON_BY_ID, {
		variables: { nodeId }, // Pass the variable to the query
	});

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
	const { name, aliases, textBodyText }: Person = data.people[0];

	console.log("person data: ", data);

	return (
		<Layout NavbarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle={name} />

				<h1>Person Page</h1>

				<p>{nodeId}</p>

				<h3>Person Name: {name}</h3>

				<h4>Aliases : {aliases}</h4>

				<h4>Text: {textBodyText}</h4>

				<div>Holidays been on</div>
			</section>
		</Layout>
	);
}
