import filterTags from "../../services/FilterTagsS";
import GetImageS from "../../services/GetImageS";
import LogS from "../../services/LogS";
import { SortOrder } from "./HolidayCardList";

// Function to fetch an image from the search string
const fetchImageURL = async (searchString: string) => {
	console.log("fetchImageURL: ", searchString);
	try {
		const imageURL = await GetImageS.getImageURLFromSearch(searchString);
		// Check if the image URL is valid
		if (imageURL.substring(0, 4) === "http") {
			return imageURL; // Set the resolved image URL data
		} else {
			LogS.error("Error fetching image URL from Unsplash search: ", searchString);
		}
	} catch (error) {
		LogS.error("Error fetching image from Unsplash search: ", searchString);
		try {
			const imageURL = await GetImageS.getRandomImageURL();
			// Check if the image URL is valid
			if (imageURL.substring(0, 4) === "http") {
				return imageURL; // Set the resolved image URL data
			} else {
				LogS.error("Error fetching image URL from Unsplash random search: ", searchString);
			}
		} catch (error) {
			console.error("Error fetching image:", error);
		}
	}
};

// Function to filter and sort holiday card list data based on selectedDecade and sortOrder
export default function filterSortAndMapHolidayCardListData(data: any, selectedDecade: string, sortOrder: SortOrder) {
	// Filter holidays based on the selected decade
	const filteredData = data?.filter((holiday: any) => {
		if (selectedDecade === "All") {
			return true; // Show all holidays
		}
		// Extract the decade from holiday's dateYear
		const decade: string = (Math.floor(parseInt(holiday.dateYear) / 10) * 10).toString() + "s";
		// LogS.log("Decade: ", decade);
		return decade === selectedDecade;
	});
	// LogS.log("Filtered data: ", filteredData);

	// Sort the holidays by sortDateValue
	const sortedData = filteredData?.sort((a: any, b: any) => {
		if (sortOrder === "NewToOld") {
			return parseInt(b.sortDateValue) - parseInt(a.sortDateValue);
		} else {
			return parseInt(a.sortDateValue) - parseInt(b.sortDateValue);
		}
	});
	// LogS.log("Sorted data: ", sortedData);

	// Map the sorted and filtered holidays to add some extra data
	const mappedData = sortedData?.map((holiday: any, index: any) => {
		// Define the holiday tags
		// console.log("holiday.tags: ", holiday.tags);
		const displayHolidayTags = filterTags(holiday?.tags, "topLevel");
		// console.log("displayHolidayTags", displayHolidayTags);

		// Return the first linked location
		const holidayLocation = holiday.locations[0];

		// Format the month date and then full date
		const monthFormatted = new Date(2000, parseInt(holiday.dateMonth) - 1).toLocaleString("default", { month: "long" });
		const dateFormatted = monthFormatted + " " + holiday.dateYear;

		// Get the holiday image URL
		let holidayImageURL = holiday.coverPhoto;
		if (holidayImageURL == null || holidayImageURL == "" || holidayImageURL == "TBC") {
			LogS.log("No defined image found for: " + holiday.name + ". Searching Unsplash for: " + holidayLocation);
			holidayImageURL = fetchImageURL(holidayLocation); // Call the function to fetch the image URL
		}

		// Return the mapped item
		return {
			...holiday,
			holidayTags: displayHolidayTags,
			holidayLocation: holidayLocation,
			holidayDate: dateFormatted,
			holidayImageURL: holidayImageURL,
		};
	});

	// LogS.log("Mapped data: ", mappedData);
	return mappedData;
}
