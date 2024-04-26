import Layout from "../../components/Layout/Layout";
import LocationsList from "../../components/Lists/LocationsList";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "../../styles/Home.module.css";
import withAuth from "../api/auth/withAuth";

function LocationsPage() {
	return (
		<Layout NavbarStyle='Opaque'>
			{/* Note: Layout wraps component in a main tag */}
			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Locations' />
				<LocationsList />
			</section>
		</Layout>
	);
}

export default withAuth(LocationsPage);
