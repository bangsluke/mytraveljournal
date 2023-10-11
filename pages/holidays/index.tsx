import HolidayList from "../../components/Lists/HolidayList";
import PageHeader from "../../components/PageHeader";

export default function HolidaysPage(props: any) {
	return (
		<>
			{/* Note: Layout wraps component in a main tag */}
			<section>
				<PageHeader PageHeaderTitle='Holidays' />

				<HolidayList />
			</section>
		</>
	);
}
