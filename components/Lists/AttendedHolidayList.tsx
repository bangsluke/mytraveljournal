import { useRouter } from "next/router";
import { Holiday } from "../../graphql/__generated__/graphql";
import styles from "./Lists.module.css";

interface AttendedHolidayListProps {
	holidays: Holiday[];
}

// TODO: Update the below to be a nicer looking list

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
