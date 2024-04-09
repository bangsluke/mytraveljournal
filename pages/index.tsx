// import jsonData from "../backend/output.json"; // Adjust the path accordingly
import CountCardSection from "../components/CountCard/CountCardSection";
import HolidayCardList from "../components/HolidayCardList/HolidayCardList";
import Layout from "../components/Layout/Layout";
// import MapChart from "../components/MapChart";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import Loading from "../components/Loading/Loading";
import Toast from "../components/Toast/Toast";
import GraphQLQueriesS from "../graphql/GraphQLQueriesS";
import SignIn from "../pages/auth/signin";
import LogS from "../services/LogS";
import styles from "../styles/Home.module.css";

export default function Home(props: any) {
	const { data: session, status } = useSession();
	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_HOLIDAYS);
	const isDevelopmentMode = process.env.NEXT_PUBLIC_DEVELOPMENT_MODE;

	LogS.log("Status and Session: ", status, session);

	// If the users authentication is loading or if the graphql query is loading
	if (status === "loading" || loading) {
		return <Loading BackgroundStyle={"Opaque"} />;
	}

	// Show a message if teh NextAuth process is skipped due to development mode
	if (isDevelopmentMode) {
		LogS.log("NextAuth authentication skipped as in development mode");
	}

	// If the user is not authenticated, show the sign in component
	if (status === "unauthenticated" && !isDevelopmentMode) {
		return <SignIn />;
	}

	// If error - show error message, and raise an error toast
	if (error) {
		LogS.error("GraphQLQueriesS.GET_HOLIDAYS GraphQL Error: ", error.message);
		return (
			<>
				<p>Error : {error.message}</p>
				<Toast message={"GraphQLQueriesS.GET_HOLIDAYS GraphQL Error: " + error.message} duration={5} />
			</>
		);
	}

	LogS.log("holiday data: ", data);

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
