import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import Layout from "../../components/Layouts/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "../../styles/Home.module.css";
import { City } from "../../types/types";

export default function CityPage() {
	const router = useRouter();
	const { node_id } = router.query; // Use the same variable name as the [node_id] file name
	console.log("node_id: ", node_id);

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CITY_BY_ID, {
		variables: { node_id }, // Pass the variable to the query
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
				<p>{node_id}</p>

				<div>Number of times visited:</div>
			</section>
		</Layout>
	);
}
