import { useRouter } from "next/router";
import { useState } from "react";
import { Holiday } from "../../graphql/__generated__/graphql";
import FilterDecade from "./FilterDecade";
import HolidayCard from "./HolidayCard";
import styles from "./HolidayCardList.module.css";

// Define the HolidayCardList component props
interface HolidayListProps {
	data?: Holiday[];
}

const HolidayCardList: React.FC<HolidayListProps> = ({ data }) => {
	const router = useRouter(); // Import the Next router

	// Define the selectedDecade state
	const [selectedDecade, setSelectedDecade] = useState<string>("All");

	// Define the onDecadeChange handler
	const onDecadeChange = (newDate: string) => {
		// console.log("Selected Decade: ", newDate);
		setSelectedDecade(newDate);
	};

	// LogS.log("Original data from HolidayCardList: ", data);

	// Filter holidays based on the selected decade
	const filteredHolidaysData = data?.filter((holiday) => {
		if (selectedDecade === "All") {
			return true; // Show all holidays
		}
		// Extract the decade from holiday's dateYear
		const decade: string = (Math.floor(parseInt(holiday.dateYear) / 10) * 10).toString() + "s";
		// LogS.log("Decade: ", decade);
		return decade === selectedDecade;
	});

	// LogS.log("Filtered data from HolidayCardList: ", filteredHolidaysData);

	const holidayElements = filteredHolidaysData?.map((holiday, index) => {
		// Define the holiday image URL
		// LogS.log("holiday.coverPhoto: ", holiday.coverPhoto);
		let holidayImageURL = "";
		if (holiday.coverPhoto == null || holiday.coverPhoto == "" || holiday.coverPhoto == "TBC") {
			holidayImageURL = `https://picsum.photos/id/${Math.floor(Math.random() * 999) + 1}/375/600`;
		} else {
			holidayImageURL = holiday.coverPhoto;
		}
		// LogS.log("holidayImageURL: ", holidayImageURL);

		// Format the month date and then full date
		const monthFormatted = new Date(2000, parseInt(holiday.dateMonth) - 1).toLocaleString("default", { month: "long" });
		const dateFormatted = monthFormatted + " " + holiday.dateYear;

		// Create an event handler for the holiday card button
		const holidayClickHandler = () => {
			router.push({ pathname: "/holidays/" + holiday.nodeId });
		};

		// Create information for the tooltip
		const holidayInfoTooltip = {
			name: holiday.name,
			tags: holiday.tags,
			date: dateFormatted,
			attendees: holiday.attendees,
			locations: holiday.locations,
			departingAirport: holiday.departingAirport,
			photoAlbum: holiday.photoAlbum,
		};

		// console.log("holiday", holiday);
		// LogS.log("holiday.locations: ", holiday.locations[0]);
		// LogS.log("holiday.nodeId", holiday.nodeId);

		return (
			<HolidayCard
				key={index}
				holidayName={holiday.name}
				holidayTags={holiday.tags}
				holidayDate={dateFormatted}
				holidayImageURL={holidayImageURL}
				clickHoliday={holidayClickHandler}
				holidayInfoTooltip={holidayInfoTooltip}
			/>
		);
	});

	return (
		<div className={styles.holidayCardListContainer}>
			<div className={styles.headerFilterContainer}>
				<h2 className={styles.holidayHeader}>holidays.</h2>
				<FilterDecade selectedDecade={selectedDecade} onDecadeChange={onDecadeChange} />
				{/* TODO: Once the holiday data is better defined, update this to have a filter for stuff like dates */}
			</div>

			{/* Display the holiday card list */}
			<div className={styles.holidayCardList}>{holidayElements}</div>
		</div>
	);
};

export default HolidayCardList;
