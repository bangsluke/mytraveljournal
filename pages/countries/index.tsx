import CountriesList from "../../components/Lists/CountriesList";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";

export default function CountriesPage(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}

			{/* Include the navbar */}
			<NavBar />

			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Countries' />

				<CountriesList />
			</section>
		</>
	);
}
