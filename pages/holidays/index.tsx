import HolidayList from "../../components/Lists/HolidayList";

export default function HolidaysPage(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}
			<section>
				<h1>Holidays Page</h1>

				<HolidayList />
			</section>
		</>
	);
}
