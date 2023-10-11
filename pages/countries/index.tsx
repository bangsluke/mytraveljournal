import CountriesList from "../../components/Lists/CountriesList";
import PageHeader from "../../components/PageHeader";

export default function CountriesPage(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}
			<section>
				<PageHeader PageHeaderTitle='Countries' />

				<CountriesList />
			</section>
		</>
	);
}
