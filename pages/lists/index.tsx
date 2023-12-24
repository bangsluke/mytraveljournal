import { Session } from "next-auth";
import Layout from "../../components/Layouts/Layout";
import CitiesList from "../../components/Lists/CitiesList";
import CountryList from "../../components/Lists/CountriesList";
import HolidayList from "../../components/Lists/HolidayList";
import PageHeader from "../../components/PageHeader/PageHeader";
import withAuth from "../../lib/withAuth";
import styles from "../../styles/Home.module.css";

function ListsPage(props: any, { session }: { session: Session }) {
	return (
		<Layout NavbarStyle='Opaque'>
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

export default withAuth(ListsPage);
