import { Session } from "next-auth";
import Layout from "../../Layouts/Layout";
import CountriesList from "../../components/Lists/CountriesList";
import PageHeader from "../../components/PageHeader/PageHeader";
import withAuth from "../../lib/withAuth";
import styles from "../../styles/Home.module.css";

function CountriesPage(props: any, { session }: { session: Session }) {
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
