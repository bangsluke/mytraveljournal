import { HolidayDataItem } from "../../types/types";
// import HolidayCard from "./HolidayCard";
import { useRouter } from "next/router";
import styles from "./HolidayCardList.module.css";

interface HolidayListProps {
	data: HolidayDataItem[];
}

const HolidayCardList: React.FC<HolidayListProps> = ({ data }) => {
	const router = useRouter(); // Import the Next router
	// console.log("data from HolidayCardList: ", data);

	const holidayElements = data.map((holiday, index) => (
		<div
			key={index}
			// onClick={() => {
			// 	router.push({ pathname: item.pagePath });
			// }}
			onClick={() => {
				router.push({ pathname: "/holidays/" + holiday.node_id });
			}}
			className={styles.holidayCard}>
			<h2>{holiday.name}</h2>
			{/* <strong>{item.filename}</strong> */}
			<p>Year: {holiday.date_year}</p>
			<p>Month: {holiday.date_month}</p>
			<p>Node ID: {holiday.node_id}</p>
			{/* <div dangerouslySetInnerHTML={{ __html: item.content }} /> */}
		</div>
	));

	return (
		// TODO: Once the holiday data is better defined, update this to have a filter for stuff like dates
		<div className={styles.holidayCardList}>{holidayElements}</div>
	);
};

export default HolidayCardList;
