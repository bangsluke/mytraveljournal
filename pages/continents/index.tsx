import { Session } from "next-auth";
import ContinentList from "../../components/Lists/ContinentsList";
import PageHeader from "../../components/PageHeader/PageHeader";
import withAuth from "../../lib/withAuth";
import styles from "../../styles/Home.module.css";
import Layout from "../Layout";

function ContinentsPage(props: any, { session }: { session: Session }) {
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
