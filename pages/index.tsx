// import jsonData from "../backend/output.json"; // Adjust the path accordingly
//import CountCardSection from "../components/CountCard/CountCardSection";
import AsyncCountCardSection from "../components/CountCard/AsyncCountCardSection";
import HolidayCardList from "../components/HolidayCardList/HolidayCardList";
import Layout from "../components/Layout/Layout";
// import MapChart from "../components/MapChart";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import Divider from "../components/Divider/Divider";
import Loading from "../components/Loading/Loading";
import Toast from "../components/Toast/Toast";
import Constants from "../constants/constants";
import { GetHolidaysDocument } from "../graphql/__generated__/graphql";
import SignIn from "../pages/auth/signin";
import LogS from "../services/LogS";
import styles from "../styles/Home.module.css";

export default function Home() {
	// Get the users authentication status and session
	const { data: session, status } = useSession();
	// LogS.log(" Status and Session: ", status, session);

	// Get the list of holidays
	const { loading, error, data } = useQuery(GetHolidaysDocument);
	if (status === "loading" || loading) return <Loading BackgroundStyle={"Opaque"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetHolidaysDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetHolidaysDocument) GraphQL Error: " + error.message} duration={5} />;
	}

	// Show a message if the NextAuth process is skipped due to development mode
	if (Constants.SkipAuth) {
		LogS.log(" NextAuth authentication skipped as SkipAuth set to true in Constants.ts");
	}

	// If the user is not authenticated, show the sign in component
	if (status === "unauthenticated" && !Constants.SkipAuth) {
		return <SignIn />;
	}

	// LogS.log("holiday data: ", data);

	return (
		<Layout NavbarStyle='Opaque'>
			{/* Initial header for SEO */}
			<h1 className={styles.hidden}>My Travel Journal</h1>
			{/* Top section holding the map and count card elements */}
			<section className={styles.section}>
				<h2 id={styles.homepageHeader}>travel stats.</h2>

				{/* <div className={styles.mapContainer}>
					<MapChart />
				</div> */}

				{/* <CountCardSection /> */}
				<AsyncCountCardSection />
			</section>

			{/* Divider to visually separate the sections */}
			<Divider />

			{/* Bottom section holds the holiday cards */}
			<section className={styles.section}>
				{/* <HolidayCardList data={jsonData} /> */}
				{/* TODO: Previously used jsonData from output file, "../backend/output.json". Switched to using GraphQL query data from holiday nodes. Either need updated jsonData file from Python code, or better data on the holiday nodes */}
				<HolidayCardList data={data?.holidays} />
			</section>
		</Layout>
	);
}
