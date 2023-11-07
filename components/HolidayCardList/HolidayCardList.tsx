import DirectionsIcon from "@mui/icons-material/Directions";
import RoomIcon from "@mui/icons-material/Room";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Constants from "../../constants/constants";
import { Holiday } from "../../types/types";
import FilterDecade from "./FilterDecade";
import styles from "./HolidayCardList.module.css";

// Define the HolidayCardList component props
interface HolidayListProps {
	data: Holiday[];
}

const HolidayCardList: React.FC<HolidayListProps> = ({ data }) => {
	const router = useRouter(); // Import the Next router

	// Define the selectedDecade state
	const [selectedDecade, setSelectedDecade] = useState("All");

	// LogS.log("Original data from HolidayCardList: ", data);

	// Filter holidays based on the selected decade
	const filteredHolidaysData = data.filter((holiday) => {
		if (selectedDecade === "All") {
			return true; // Show all holidays
		}
		// Extract the decade from holiday's dateYear
		const decade: string = (Math.floor(parseInt(holiday.dateYear) / 10) * 10).toString() + "s";
		// LogS.log("Decade: ", decade);
		return decade === selectedDecade;
	});

	// LogS.log("Filtered data from HolidayCardList: ", filteredHolidaysData);

	const holidayElements = filteredHolidaysData.map((holiday, index) => {
		// Define the holiday image URL
		// LogS.log("holiday.coverPhoto: ", holiday.coverPhoto);
		let holidayImageURL = "";
		if (holiday.coverPhoto == null || holiday.coverPhoto == "" || holiday.coverPhoto == "TBC") {
			holidayImageURL = `https://picsum.photos/id/${Math.floor(Math.random() * 999) + 1}/375/600`;
		} else {
			holidayImageURL = holiday.coverPhoto;
		}
		// LogS.log("holidayImageURL: ", holidayImageURL);

		// Format the month date
		const monthFormatted = new Date(2000, parseInt(holiday.dateMonth) - 1).toLocaleString("default", { month: "long" });

		// LogS.log("holiday.locations: ", holiday.locations[0]);
		// LogS.log("holiday.nodeId", holiday.nodeId);

		return (
			<div key={index}>
				<div
					key={holiday.nodeId}
					onClick={() => {
						router.push({ pathname: "/holidays/" + holiday.nodeId });
					}}
					className={styles.holidayCard}>
					{/* Hold the image to the left of the card details */}
					<Image
						src={holidayImageURL}
						alt={`${holiday.name} Image`}
						height={Constants.HolidayCardImageHeight}
						width={Constants.HolidayCardImageWidth}
						quality={80}
						className={styles.holidayCardImage}
					/>
					{/* Hold the card details to the right of the image */}
					<div className={styles.holidayCardDetails}>
						{/* Add a top row holding icons and the holiday header */}
						<div className={styles.holidayCardDetailsTopRow}>
							<RoomIcon className={styles.holidayCardLocationIcon} />
							<h3>{holiday.locations[0]}</h3> {/* Return the first location */}
							{/* TODO: Add link to Google Maps */}
							<a href='{props.experience.googleMapsUrl}'>
								<DirectionsIcon className={styles.holidayCardDirectionsIcon} />
								{/* TODO: Consider displaying the below text on certain size screens */}
								<p className={styles.holidayCardDirectionsText}>View on Google Maps</p>
							</a>
						</div>

						{/* Hold the main contents of the card including title and description details */}
						<div className={styles.holidayCardDetailsText}>
							<h2>{holiday.name}</h2> {/* Return the holiday name */}
							{/* Display the dates */}
							<p className={styles.holidayCardDates}>
								{monthFormatted} {holiday.dateYear}
							</p>
							{holiday.holidayTitle ? <h3>{holiday.holidayTitle}</h3> : null} {/* Return the holiday title */}
						</div>
					</div>
				</div>
				<div className={styles.separator}></div>
			</div>
		);
	});

	return (
		<>
			{/* // TODO: Once the holiday data is better defined, update this to have a filter for stuff like dates */}
			<FilterDecade selectedDecade={selectedDecade} onDecadeChange={(e) => setSelectedDecade(e.target.value)} />
			<div className={styles.holidayCardList}>{holidayElements}</div>
		</>
	);
};

export default HolidayCardList;
