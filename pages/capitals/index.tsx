import { Session } from "next-auth";
import Layout from "../../components/Layout/Layout";
import CapitalsList from "../../components/Lists/CapitalsList";
import PageHeader from "../../components/PageHeader/PageHeader";
import withAuth from "../../lib/withAuth";
import styles from "../../styles/Home.module.css";

function CapitalsPage(props: any, { session }: { session: Session }) {
	return (
		<Layout NavbarStyle='Opaque'>
			{/* Note: Layout wraps component in a main tag */}

			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Capitals' />
				<CapitalsList />
			</section>
		</Layout>
	);
}

export default withAuth(CapitalsPage);
