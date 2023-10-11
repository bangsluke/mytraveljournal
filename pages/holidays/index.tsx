import HolidayList from "../../components/Lists/HolidayList";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";

export default function HolidaysPage(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}

			{/* Include the navbar */}
			<NavBar />

			<section>
				<PageHeader PageHeaderTitle='Holidays' />

				<HolidayList />
			</section>
		</>
	);
}
