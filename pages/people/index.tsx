import PersonsList from "../../components/Lists/PersonsList";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";

export default function PersonsPage(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}

			{/* Include the navbar */}
			<NavBar />

			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Travel Companions' />

				<PersonsList />
			</section>
		</>
	);
}
