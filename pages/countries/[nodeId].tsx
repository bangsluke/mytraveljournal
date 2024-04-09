import { useQuery } from "@apollo/client";
import { Session } from "next-auth";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import Loading from "../../components/Loading/Loading";
import PageHeader from "../../components/PageHeader/PageHeader";
import GraphQLQueriesS from "../../graphql/GraphQLQueriesS";
import { Country } from "../../graphql/__generated__/graphql";
import withAuth from "../../lib/withAuth";
import LogS from "../../services/LogS";
import styles from "../../styles/Home.module.css";

function CountryPage({ session }: { session: Session }) {
	const router = useRouter(); // Import the Next router
	const { nodeId } = router.query; // Use the same variable name as the [nodeId] file name
	LogS.log("nodeId: ", nodeId);

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_COUNTRY_BY_ID, {
		variables: { nodeId }, // Pass the variable to the query
	});

	if (loading) return <Loading BackgroundStyle={"Opaque"} />;
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

	// LogS.log("data", data);

	// Extract the data into usable variables
	const { name }: Country = data.countries[0];

	// LogS.log("country data: ", data);

	return (
		<Layout NavbarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle={name} />

				<h1>Country Page</h1>

				<h3>Country Name: {name}</h3>
				<p>{nodeId}</p>

				<div>Number of times visited:</div>
			</section>
		</Layout>
	);
}

export default withAuth(CountryPage);
