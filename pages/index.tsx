import jsonData from "../backend/output.json"; // Adjust the path accordingly
import CountCardSection from "../components/CountCard/CountCardSection";
import HolidayCardList from "../components/HolidayCardList/HolidayCardList";
import Layout from "../components/Layouts/Layout";
// import MapChart from "../components/MapChart";
import styles from "../styles/Home.module.css";

export default function Home(props: any) {
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
				{/* TODO: Need updated jsonData file from Python code */}
				<HolidayCardList data={jsonData} />
			</section>
		</Layout>
	);
}
