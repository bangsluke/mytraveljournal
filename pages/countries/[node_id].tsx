import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import Layout from "../../components/Layouts/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "../../styles/Home.module.css";
import { Country } from "../../types/types";

export default function CountryPage() {
	const router = useRouter();
	const { node_id } = router.query; // Use the same variable name as the [node_id] file name
	console.log("node_id: ", node_id);

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_COUNTRY_BY_ID, {
		variables: { node_id }, // Pass the variable to the query
	});

	if (loading) return <p>Loading...</p>;
	if (error)
		return (
			<>
				<p>Error : {error.message}</p>
				<div
					style={{
						backgroundColor: "blue",
						color: "white",
						margin: "3rem auto 0rem auto",
						padding: "0.3rem 1.5rem",
						lineHeight: "0.5",
						borderRadius: "0.5rem",
						cursor: "pointer",
					}}
					onClick={() => router.back()} // Go back to the last visited page
				>
					<h4>Click here to go back</h4>
				</div>
			</>
		);

	// console.log("data", data);

	// Extract the data into usable variables
	const { name }: Country = data.countries[0];

	// console.log("country data: ", data);

	return (
		<Layout NavbarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle={name} />

				<h1>Country Page</h1>

				<h2 style={{ fontWeight: 600, fontSize: 25 }}>{node_id}</h2>

				<h3>Country Name: {name}</h3>

				<div>Number of times visited:</div>
			</section>
		</Layout>
	);
}
