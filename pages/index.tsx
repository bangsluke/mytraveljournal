import jsonData from "../backend/output.json"; // Adjust the path accordingly
import CountCardSection from "../components/CountCardSection";
import CitiesList from "../components/Lists/CitiesList";
import CountryList from "../components/Lists/CountriesList";
import HolidayList from "../components/Lists/HolidayList";
import MapChart from "../components/MapChart";
import MarkdownList from "../components/MarkdownList";
import styles from "../styles/Home.module.css";

export default function Home(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}

			<section>
				<h1>My Travel Journal</h1>

				<MapChart />

				<CountCardSection />

				<div id='listsSection' className={styles.listsSection}>
					<HolidayList />

					<CountryList />

					<CitiesList />
				</div>

				<MarkdownList data={jsonData} />
			</section>
		</>
	);
}
