import { HolidayDataItem } from "../../types/types";
// import HolidayCard from "./HolidayCard";
import { useRouter } from "next/router";
import styles from "./HolidayCardList.module.css";

interface HolidayListProps {
	data: HolidayDataItem[];
}

const HolidayCardList: React.FC<HolidayListProps> = ({ data }) => {
	const router = useRouter(); // Import the Next router
	console.log("data from HolidayCardList: ", data);

	return (
		// TODO: Once the holiday data is better defined, update this to have a filter for stuff like dates
		<div className={styles.holidayCardList}>
			{data.map((item, index) => (
				<>
					<div
						key={index}
						onClick={() => {
							router.push({ pathname: item.pagePath });
						}}
						className={styles.holidayCard}>
						<strong>{item.filename}</strong>
						<div dangerouslySetInnerHTML={{ __html: item.content }} />
					</div>
				</>
			))}
		</div>
	);
};

export default HolidayCardList;
