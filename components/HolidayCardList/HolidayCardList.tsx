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
				router.push({ pathname: "/holidays/" + holiday.nodeId });
			}}
			className={styles.holidayCard}>
			<h2>{holiday.name}</h2>
			{/* <strong>{item.filename}</strong> */}
			<p>Year: {holiday.dateYear}</p>
			<p>Month: {holiday.dateMonth}</p>
			<p>Node ID: {holiday.nodeId}</p>
			{/* <div dangerouslySetInnerHTML={{ __html: item.content }} /> */}
		</div>
	));

	return (
		// TODO: Once the holiday data is better defined, update this to have a filter for stuff like dates
		<div className={styles.holidayCardList}>{holidayElements}</div>
	);
};

export default HolidayCardList;
