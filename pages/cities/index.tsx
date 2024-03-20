import { Session } from "next-auth";
import CitiesList from "../../components/Lists/CitiesList";
import PageHeader from "../../components/PageHeader/PageHeader";
import Layout from "../../layouts/Layout";
import withAuth from "../../lib/withAuth";
import styles from "../../styles/Home.module.css";

function ContinentsPage(props: any, { session }: { session: Session }) {
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

export default withAuth(ContinentsPage);
