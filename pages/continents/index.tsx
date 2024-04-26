import Layout from "../../components/Layout/Layout";
import ContinentList from "../../components/Lists/ContinentsList";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "../../styles/Home.module.css";
import withAuth from "../api/auth/withAuth";

function ContinentsPage() {
	return (
		<Layout NavbarStyle='Opaque'>
			{/* Note: Layout wraps component in a main tag */}
			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Continents' />
				<ContinentList />
			</section>
		</Layout>
	);
}

export default withAuth(ContinentsPage);
