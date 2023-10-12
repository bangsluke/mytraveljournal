import CountriesList from "../../components/Lists/CountriesList";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import styles from "../../styles/Home.module.css";

export default function CountriesPage(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}

			{/* Include the navbar */}
			<NavBar NavBarStyle='Opaque' />

			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Countries' />

				<CountriesList />
			</section>
		</>
	);
}
