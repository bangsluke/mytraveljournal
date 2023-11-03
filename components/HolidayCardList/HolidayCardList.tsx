import { Holiday } from "../../types/types";
// import HolidayCard from "./HolidayCard";
import DirectionsIcon from "@mui/icons-material/Directions";
import RoomIcon from "@mui/icons-material/Room";
import parse from "html-react-parser";
import Image from "next/image";
import { useRouter } from "next/router";
import Constants from "../../constants/constants";
import styles from "./HolidayCardList.module.css";

interface HolidayListProps {
	data: Holiday[];
}

// Extract the required constants
const { HolidayCardImageHeight, HolidayCardImageWidth } = Constants;

const HolidayCardList: React.FC<HolidayListProps> = ({ data }) => {
	const router = useRouter(); // Import the Next router
	// LogS.log("data from HolidayCardList: ", data);

	const holidayElements = data.map((holiday, index) => {
		// LogS.log("holiday.coverPhoto: ", holiday.coverPhoto);
		let holidayImageURL = "";
		if (holiday.coverPhoto == null || holiday.coverPhoto == "" || holiday.coverPhoto == "TBC") {
			holidayImageURL = `https://picsum.photos/id/${Math.floor(Math.random() * 999) + 1}/375/600`;
		} else {
			holidayImageURL = holiday.coverPhoto;
		}
		// LogS.log("holidayImageURL: ", holidayImageURL);

		return (
			<div
				key={index}
				onClick={() => {
					router.push({ pathname: "/holidays/" + holiday.nodeId });
				}}
				className={styles.holidayCard}>
				<Image
					src={holidayImageURL}
					alt={`${holiday.name} Image`}
					height={HolidayCardImageHeight}
					width={HolidayCardImageWidth}
					quality={80}
					className={styles.holidayCardImage}
				/>
				<div className={styles.holidayCardDetails}>
					<div className={styles.holidayCardDetailsTopRow}>
						<RoomIcon className={styles.holidayCardIcon} />
						<h3>{holiday.name}</h3>
						<a href='{props.experience.googleMapsUrl}'>
							<DirectionsIcon className={styles.directionsIcon} />
							<p className={styles.directionsText}>View on Google Maps</p>
						</a>
					</div>
					{/* <h2>{title}</h2> */}
					<h2>{holiday.name}</h2>
					{/* {subtitle ? <h3>{subtitle}</h3> : null} */}
					{holiday.name ? <h3>{holiday.name}</h3> : null}
					<p className={styles.holidayCardDates}>
						{holiday.dateMonth} - {holiday.dateYear}
					</p>
					<p>{holiday.nodeId}</p>
					<div className={styles.holidayCardDescription}>{parse(holiday.textHtmlContent)}</div>
				</div>
			</div>
		);
	});

	return (
		// TODO: Once the holiday data is better defined, update this to have a filter for stuff like dates
		<div className={styles.holidayCardList}>{holidayElements}</div>
	);
};

export default HolidayCardList;
