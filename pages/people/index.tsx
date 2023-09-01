import PersonsList from "../../components/Lists/PersonsList";

export default function PersonsPage(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}
			<section>
				<h1>Person Page</h1>

				<PersonsList />
			</section>
		</>
	);
}
