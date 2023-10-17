import Layout from "../../components/Layouts/Layout";
import PersonsList from "../../components/Lists/PersonsList";
import PageHeader from "../../components/PageHeader";
import styles from "../../styles/Home.module.css";

export default function PersonsPage(props: any) {
	return (
		<Layout NavbarStyle='Opaque'>
			<section className={styles.section}>
				<PageHeader PageHeaderTitle='Travel Companions' />

				<PersonsList />
			</section>
		</Layout>
	);
}
