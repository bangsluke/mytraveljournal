import { ActionIcon, Group, Text, rem } from "@mantine/core";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { useRouter } from "next/router";
import { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import LogS from "../../services/LogS";
import FilterDecade from "./FilterDecade";
import HolidayCard from "./HolidayCard";
import styles from "./HolidayCardList.module.css";
import filterSortAndMapHolidayCardListData from "./HolidayCardListData";

// Define the HolidayCardList component props
interface HolidayListProps {
	data?: any;
}

export type SortOrder = "OldToNew" | "NewToOld";

const HolidayCardList: React.FC<HolidayListProps> = ({ data }) => {
	const router = useRouter(); // Import the Next router
	const screenSize = useScreenSize(); // Get the screen size
	const [selectedDecade, setSelectedDecade] = useState<string>("All"); // Define the selectedDecade state
	const [sortOrder, setSortOrder] = useState<SortOrder>("NewToOld"); // Define a sort order state

	// Define the onDecadeChange handler
	const onDecadeChange = (newDate: string) => {
		// console.log("Selected Decade: ", newDate);
		setSelectedDecade(newDate);
	};

	// Define the onSortOrderChange handler
	const onSortOrderChange = (newOrder: SortOrder) => {
		// console.log("Selected Sort Order: ", newOrder);
		setSortOrder(newOrder);
	};

	// LogS.log("Original data from HolidayCardList: ", data);

	// Define the filter text based on the screen size
	let filterText = "Controls:";
	if (screenSize === "tablet") {
		filterText = "Filters and Sort:";
	} else if (screenSize === "desktop") {
		filterText = "Filter by Decade, Type and Sort:";
	}

	// Filter, sort and map the holiday card list data based on selectedDecade and sortOrder
	const updatedHolidaysData = filterSortAndMapHolidayCardListData(data, selectedDecade, sortOrder);
	LogS.log("Updated data from filteredHolidaysData: ", updatedHolidaysData);

	// Define the holiday elements
	const holidayElements = updatedHolidaysData
		// Then map the updated holidays to create the holiday elements - adding a click handler
		?.map((holiday: any, index: any) => {
			// Create an event handler for the holiday card button
			const holidayClickHandler = () => {
				router.push({ pathname: "/holidays/" + holiday.nodeId });
			};

			return (
				<HolidayCard
					key={index}
					holidayName={holiday.name}
					holidayTags={holiday.holidayTags}
					holidayDate={holiday.holidayDate}
					holidayImageURL={holiday.coverPhoto}
					clickHoliday={holidayClickHandler}
				/>
			);
		});

	return (
		// Hold the full list of holidays and header
		<div className={styles.holidayCardListContainer}>
			{/* Hold the header and filters and sort */}
			<div className={styles.headerContainer}>
				{/* Hold the header text */}
				<h2 className={styles.holidayHeader}>holidays.</h2>
				{/* Hold the filter and controls container */}
				<Group className={styles.headerFilterContainer}>
					<Text className={styles.filterLabel}>{filterText}</Text>
					<FilterDecade selectedDecade={selectedDecade} onDecadeChange={onDecadeChange} />
					<ActionIcon
						variant='filled'
						onClick={() => onSortOrderChange(sortOrder === "OldToNew" ? "NewToOld" : "OldToNew")}
						className={styles.sortButton}>
						<SwapVertIcon style={{ width: rem(18), height: rem(18) }} />
					</ActionIcon>
					{/* TODO: Once the holiday data is better defined, update this to have a filter for stuff like dates */}
				</Group>
				{/* Add a horrible header background container to keep a full width white background */}
				<div className={styles.headerContainerBackground}></div>
			</div>

			{/* Display the holiday card list */}
			<div className={styles.holidayCardList}>{holidayElements}</div>
		</div>
	);
};

export default HolidayCardList;
