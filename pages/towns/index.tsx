import { Session } from "next-auth";
import Layout from "../../components/Layout/Layout";
import TownsList from "../../components/Lists/TownsList";
import PageHeader from "../../components/PageHeader/PageHeader";
import withAuth from "../../lib/withAuth";
import styles from "../../styles/Home.module.css";

function TownsPage(props: any, { session }: { session: Session }) {
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
