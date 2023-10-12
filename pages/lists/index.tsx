import Layout from "../../components/Layouts/Layout";
import CitiesList from "../../components/Lists/CitiesList";
import CountryList from "../../components/Lists/CountriesList";
import HolidayList from "../../components/Lists/HolidayList";
import PageHeader from "../../components/PageHeader";
import styles from "../../styles/Home.module.css";

export default function ListsPage(props: any) {
	return (
		<Layout NavBarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Site Lists' />

				<div id='listsSection' className={styles.listsSection}>
					<HolidayList />

					<CountryList />

					<CitiesList />
				</div>
			</section>
		</Layout>
	);
}
