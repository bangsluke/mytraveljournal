import Layout from "../../components/Layouts/Layout";
import HolidayList from "../../components/Lists/HolidayList";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "../../styles/Home.module.css";

export default function HolidaysPage(props: any) {
	return (
		<Layout NavbarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Holidays' />

				<HolidayList />
			</section>
		</Layout>
	);
}
