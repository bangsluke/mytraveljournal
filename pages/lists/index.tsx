import CitiesList from "../../components/Lists/CitiesList";
import CountryList from "../../components/Lists/CountriesList";
import HolidayList from "../../components/Lists/HolidayList";
import styles from "../../styles/Home.module.css";

export default function ListsPage(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}
			<section>
				<h1>Site Lists</h1>

				<div id='listsSection' className={styles.listsSection}>
					<HolidayList />

					<CountryList />

					<CitiesList />
				</div>
			</section>
		</>
	);
}
