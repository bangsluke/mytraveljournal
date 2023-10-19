import Layout from "../../components/Layouts/Layout";
import ContinentList from "../../components/Lists/ContinentsList";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "../../styles/Home.module.css";

export default function ContinentsPage(props: any) {
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
