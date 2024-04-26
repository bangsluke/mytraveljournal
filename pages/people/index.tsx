import Layout from "../../components/Layout/Layout";
import PersonsList from "../../components/Lists/PersonsList";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "../../styles/Home.module.css";
import withAuth from "../api/auth/withAuth";

function PersonsPage() {
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
