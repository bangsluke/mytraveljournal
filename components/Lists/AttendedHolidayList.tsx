import { useRouter } from "next/router";
import { Holiday } from "../../types/types";
import styles from "./Lists.module.css";

interface AttendedHolidayListProps {
	holidays: Holiday[];
}

export default function AttendedHolidayList({ holidays }: AttendedHolidayListProps) {
	const router = useRouter(); // Import the Next router

	// Sort the returned holidays by sortDateValue
	// LogS.log("holidays: ", holidays);
	const sortedHolidays = [...holidays].sort((a, b) => a.sortDateValue.localeCompare(b.sortDateValue));

	return (
		<ul>
			{sortedHolidays.map((holiday) => (
				<li key={holiday.nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/holidays/${holiday.nodeId}` })}>
					{holiday.holidayTitle}
				</li>
			))}
		</ul>
	);
}
