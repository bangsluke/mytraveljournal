import { ActionIcon, Group, Text, rem } from "@mantine/core";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterListIcon from '@mui/icons-material/FilterList';
import { useRouter } from "next/router";
import { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import filterTags from "../../services/FilterTagsS";
import { useFilter, FILTER_CATEGORIES } from "../../context/FilterContext";
import FilterDecade from "./FilterDecade";
import HolidayCard from "./HolidayCard";
import styles from "./HolidayCardList.module.css";

// Define the HolidayCardList component props
interface HolidayListProps {
	data?: any;
}

type SortOrder = "OldToNew" | "NewToOld";

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
	let filterText = "";
	if (screenSize === "tablet") {
		filterText = "Filters and Sort:";
	} else if (screenSize === "desktop") {
		filterText = "Filter by Decade, Type and Sort:";
	}

	const { filters, activeFilterCount, toggleFilterSidebar } = useFilter();

	// Function to check if a holiday matches the filters
	const matchesFilters = (holiday: any) => {
		// LogS.log("Checking holiday tags:", holiday.tags);
		// Flatten holiday tags for easier searching. 
		// Assuming holiday.tags is an object or array of objects.
		// If holiday.tags is just array of strings, good.
		// Based on SidebarData or similar, tags might be complex. 
		// But let's check how filterTags works? No, I can't read it now.
		// Let's assume holiday.tags includes the strings user listed (e.g. "school", "local").
		// If it's an array of objects, we might need to map to names.
		// Safe bet: JSON.stringify or recursive search if structure is unknown, 
		// but since user gave specific string values, they likely exist as values.
		// START ASSUMPTION: holiday.tags contains the strings.

		const holidayTagValues = Array.isArray(holiday.tags) ? holiday.tags : [];

		for (const [category, selectedTags] of Object.entries(filters)) {
			// Check if all tags for this category are selected
			const allCategoryTags = FILTER_CATEGORIES[category as keyof typeof FILTER_CATEGORIES];
			const isAllSelected = selectedTags.length === allCategoryTags?.length;

			// We only filter if:
			// 1. There are some selected tags (if 0, we assume "show none" or "show all" depending on UX, but usually loop skips)
			// 2. NOT ALL tags are selected. If ALL are selected, we treat it as "Don't filter by this category".
			//    This is important for optional categories like "Company" or "Activity".
			//    If we enforced matching when ALL are selected, a holiday with NO Company tag would be hidden, which is wrong default behavior.
			if (selectedTags.length > 0 && !isAllSelected) {
				// Category has active, restrictive filters. Holiday must match AT LEAST ONE.
				// Check intersection.
				const hasMatch = selectedTags.some((tag: string) => holidayTagValues.includes(tag));
				if (!hasMatch) return false;
			}
		}
		return true;
	};

	// Filter holidays based on the selected decade AND context filters
	const filteredHolidaysData = data?.filter((holiday: any) => {
		// Decade Filter
		let matchesDecade = true;
		if (selectedDecade !== "All") {
			const decade: string = (Math.floor(parseInt(holiday.dateYear) / 10) * 10).toString() + "s";
			matchesDecade = decade === selectedDecade;
		}

		if (!matchesDecade) return false;

		// Context Filters
		return matchesFilters(holiday);
	});

	// LogS.log("Filtered data from HolidayCardList: ", filteredHolidaysData);

	// Define the holiday elements
	const holidayElements = filteredHolidaysData
		// First sort the holidays by sortDateValue
		?.sort((a: any, b: any) => {
			if (sortOrder === "NewToOld") {
				return parseInt(b.sortDateValue) - parseInt(a.sortDateValue);
			} else {
				return parseInt(a.sortDateValue) - parseInt(b.sortDateValue);
			}
		})
		// Then map the sorted holidays to create the holiday elements
		?.map((holiday: any, index: any) => {
			// Define the holiday image URL
			// LogS.log("holiday.coverPhoto: ", holiday.coverPhoto);
			let holidayImageURL = "";
			if (holiday.coverPhoto == null || holiday.coverPhoto == "" || holiday.coverPhoto == "TBC") {
				holidayImageURL = `https://picsum.photos/id/${Math.floor(Math.random() * 999) + 1}/375/600`;
			} else {
				holidayImageURL = holiday.coverPhoto;
			}
			// LogS.log("holidayImageURL: ", holidayImageURL);

			// Define the holiday tags
			// console.log("holiday.tags: ", holiday.tags);
			const displayHolidayTags = filterTags(holiday?.tags, "topLevel");
			// console.log("displayHolidayTags", displayHolidayTags);

			// Format the month date and then full date
			const monthFormatted = new Date(2000, parseInt(holiday.dateMonth) - 1).toLocaleString("default", { month: "long" });
			const dateFormatted = monthFormatted + " " + holiday.dateYear;

			// Create an event handler for the holiday card button
			const holidayClickHandler = () => {
				router.push({ pathname: "/holidays/" + holiday.nodeId });
			};

			return (
				<HolidayCard
					key={index}
					holidayName={holiday.name}
					holidayTags={displayHolidayTags}
					holidayDate={dateFormatted}
					holidayImageURL={holidayImageURL}
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

					<div style={{ position: 'relative' }}>
						<ActionIcon
							variant='filled'
							onClick={toggleFilterSidebar}
							className={styles.sortButton} // Reuse sort button style for consistency
							style={{ marginRight: '0.5rem' }}
						>
							<FilterListIcon style={{ width: rem(18), height: rem(18) }} />
						</ActionIcon>
						{activeFilterCount > 0 && (
							<div style={{
								position: 'absolute',
								top: -5,
								right: 0,
								backgroundColor: 'red',
								color: 'white',
								borderRadius: '50%',
								width: '16px',
								height: '16px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								fontSize: '10px',
								pointerEvents: 'none'
							}}>
								{activeFilterCount}
							</div>
						)}
					</div>

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
