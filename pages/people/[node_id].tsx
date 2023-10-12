import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import Layout from "../../components/Layouts/Layout";
import { Person } from "../../types/types";

export default function PersonPage() {
	const router = useRouter();
	const { node_id } = router.query; // Use the same variable name as the [node_id] file name
	console.log("node_id: ", node_id);

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_PERSON_BY_ID, {
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

	// Extract the data into usable variables
	const { name, aliases, text_body_text }: Person = data.people[0];

	console.log("person data: ", data);

	return (
		<Layout NavBarStyle='Opaque'>
			<h1>Person Page</h1>

			<h2 style={{ fontWeight: 600, fontSize: 25 }}>{node_id}</h2>

			<h3>Person Name: {name}</h3>

			<h4>Aliases : {aliases}</h4>

			<h4>Text: {text_body_text}</h4>

			<div>Holidays been on</div>
		</Layout>
	);
}
