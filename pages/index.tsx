import jsonData from "../backend/output.json"; // Adjust the path accordingly
import CountCardSection from "../components/CountCardSection";
import MapChart from "../components/MapChart";
import MarkdownList from "../components/MarkdownList";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}

			{/* Include the navbar */}
			<NavBar />

			{/* Initial header for SEO */}
			<h1 className={styles.hidden}>My Travel Journal</h1>
			{/* Top section holding the map and count card elements */}
			<section>
				<h2 id={styles.homepageHeader}>Visited Locations</h2>

				<div className={styles.mapContainer}>
					<MapChart />
				</div>

				<CountCardSection />
			</section>

			{/* TODO: Delete this section once sidebar is implemented */}
			<section>
				<a href='/lists'>Lists Page</a>
			</section>

			{/* Bottom section holds the holiday cards */}
			<section>
				<MarkdownList data={jsonData} />
			</section>
		</>
	);
}
