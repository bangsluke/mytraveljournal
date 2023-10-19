import Layout from "../../components/Layouts/Layout";
import CountriesList from "../../components/Lists/CountriesList";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "../../styles/Home.module.css";

export default function CountriesPage(props: any) {
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
