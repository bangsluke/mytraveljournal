import Layout from "../../components/Layout/Layout";
import CitiesList from "../../components/Lists/CitiesList";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "../../styles/Home.module.css";
import withAuth from "../api/auth/withAuth";

function CitiesPage() {
	return (
		<Layout NavbarStyle='Opaque'>
			{/* Note: Layout wraps component in a main tag */}
			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Cities' />
				<CitiesList />
			</section>
		</Layout>
	);
}

export default withAuth(CitiesPage);
