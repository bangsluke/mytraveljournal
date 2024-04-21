import Layout from "../../components/Layout/Layout";
import CountriesList from "../../components/Lists/CountriesList";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "../../styles/Home.module.css";
import withAuth from "../api/auth/withAuth";

function CountriesPage() {
	return (
		<Layout NavbarStyle='Opaque'>
			{/* Note: Layout wraps component in a main tag */}

			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Countries' />

				<CountriesList />
			</section>
		</Layout>
	);
}

export default withAuth(CountriesPage);
