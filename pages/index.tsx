// import jsonData from "../backend/output.json"; // Adjust the path accordingly
import CountCardSection from "../components/CountCard/CountCardSection";
import HolidayCardList from "../components/HolidayCardList/HolidayCardList";
import Layout from "../components/Layouts/Layout";
// import MapChart from "../components/MapChart";
import { useQuery } from "@apollo/client";
import GraphQLQueriesS from "../backend/graphql/GraphQLQueriesS";
import Toast from "../components/Toast/Toast";
import styles from "../styles/Home.module.css";

export default function Home(props: any) {
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_HOLIDAYS);
	if (loading) return <p>Loading...</p>;
	if (error) {
		// If error - show error message, and raise an error toast
		console.error("GraphQLQueriesS.GET_HOLIDAYS GraphQL Error: ", error.message);
		return (
			<>
				<p>Error : {error.message}</p>
				<Toast message={"GraphQLQueriesS.GET_HOLIDAYS GraphQL Error: " + error.message} duration={5} />
			</>
		);
	}

	console.log("holiday data: ", data);

	return (
		<Layout NavbarStyle='Opaque'>
			{/* Initial header for SEO */}
			<h1 className={styles.hidden}>My Travel Journal</h1>
			{/* Top section holding the map and count card elements */}
			<section className={styles.section}>
				<h2 id={styles.homepageHeader}>Visited Locations</h2>

				{/* <div className={styles.mapContainer}>
					<MapChart />
				</div> */}

				<CountCardSection />
			</section>

			{/* Bottom section holds the holiday cards */}
			<section className={styles.section}>
				{/* <HolidayCardList data={jsonData} /> */}
				{/* TODO: Previously used jsonData from output file, "../backend/output.json". Switched to using GraphQL query data from holiday nodes. Either need updated jsonData file from Python code, or better data on the holiday nodes */}
				<HolidayCardList data={data.holidays} />
			</section>
		</Layout>
	);
}
