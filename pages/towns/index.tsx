import Layout from "../../components/Layout/Layout";
import TownsList from "../../components/Lists/TownsList";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "../../styles/Home.module.css";
import withAuth from "../api/auth/withAuth";

function TownsPage() {
	return (
		<Layout NavbarStyle='Opaque'>
			{/* Note: Layout wraps component in a main tag */}

			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Towns' />
				<TownsList />
			</section>
		</Layout>
	);
}

export default withAuth(TownsPage);
