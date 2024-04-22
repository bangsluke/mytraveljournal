import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GetHolidaysListDocument, Holiday } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function HolidayList() {
	const router = useRouter(); // Import the Next router

	// Get the list of holidays
	const { loading, error, data } = useQuery(GetHolidaysListDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetHolidaysListDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetHolidaysListDocument) GraphQL Error: " + error.message} duration={5} />;
	}

	LogS.log("HolidayList: holiday data: ", data);

	// Sort holidays by sortDateValue
	//@ts-ignore
	const sortedHolidays: any = [...data?.holidays].sort((a: any, b: any) => b.sortDateValue.localeCompare(a.sortDateValue));

	LogS.log("HolidayList: Sorted holiday data: ", sortedHolidays);

	return (
		<div className={styles.dataList}>
			<ul>
				{sortedHolidays.map(({ name, dateYear, dateMonth, nodeId }: Holiday) => (
					<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/holidays/${nodeId}` })}>
						<h4>{name}</h4>
						<h5>
							{dateYear} {dateMonth}
						</h5>
					</li>
				))}
			</ul>
		</div>
	);
}
