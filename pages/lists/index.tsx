import CitiesList from "../../components/Lists/CitiesList";
import CountryList from "../../components/Lists/CountriesList";
import HolidayList from "../../components/Lists/HolidayList";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import styles from "../../styles/Home.module.css";

export default function ListsPage(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}

			{/* Include the navbar */}
			<NavBar />

			<section>
				<PageHeader PageHeaderTitle='Site Lists' />

				<div id='listsSection' className={styles.listsSection}>
					<HolidayList />

					<CountryList />

					<CitiesList />
				</div>
			</section>
		</>
	);
}
