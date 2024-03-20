import { Session } from "next-auth";
import PersonsList from "../../components/Lists/PersonsList";
import PageHeader from "../../components/PageHeader/PageHeader";
import withAuth from "../../lib/withAuth";
import styles from "../../styles/Home.module.css";
import Layout from "../Layout";

function PersonsPage(props: any, { session }: { session: Session }) {
	return (
		<Layout NavbarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Travel Companions' />

				<PersonsList />
			</section>
		</Layout>
	);
}

export default withAuth(PersonsPage);
