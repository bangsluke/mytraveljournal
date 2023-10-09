import CountriesList from "../../components/Lists/CountriesList";

export default function CountriesPage(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}
			<section>
				<h1>Countries Page</h1>

				<CountriesList />
			</section>
		</>
	);
}
