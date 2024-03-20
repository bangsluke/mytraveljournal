import { Session } from "next-auth";
import HolidayList from "../../components/Lists/HolidayList";
import PageHeader from "../../components/PageHeader/PageHeader";
import Layout from "../../layouts/Layout";
import withAuth from "../../lib/withAuth";
import styles from "../../styles/Home.module.css";

function HolidaysPage(props: any, { session }: { session: Session }) {
	return (
		<Layout NavbarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Holidays' />

				<HolidayList />
			</section>
		</Layout>
	);
}

export default withAuth(HolidaysPage);
