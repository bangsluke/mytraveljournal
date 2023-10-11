import PersonsList from "../../components/Lists/PersonsList";
import PageHeader from "../../components/PageHeader";

export default function PersonsPage(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}
			<section>
				<PageHeader PageHeaderTitle='Travel Companions' />

				<PersonsList />
			</section>
		</>
	);
}
