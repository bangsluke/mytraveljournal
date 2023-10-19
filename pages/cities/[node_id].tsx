import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import Layout from "../../components/Layouts/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "../../styles/Home.module.css";
import { City } from "../../types/types";

export default function CityPage() {
	const router = useRouter(); // Import the Next router
	const { nodeId } = router.query; // Use the same variable name as the [nodeId] file name
	console.log("nodeId: ", nodeId);

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CITY_BY_ID, {
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

	// console.log("data", data);

	// Extract the data into usable variables
	const { name }: City = data.cities[0];

	// console.log("city data: ", data);

	return (
		<Layout NavbarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle={name} />

				<h1>City Page</h1>

				<h3>City Name: {name}</h3>
				<p>{nodeId}</p>

				<div>Number of times visited:</div>
			</section>
		</Layout>
	);
}
