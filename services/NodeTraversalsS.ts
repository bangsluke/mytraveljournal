import LogS from "../services/LogS";

// Function to return the holiday node with the highest sortDateValue of a location (the most recent holiday)
const findHighestSortDateValueHolidayOfLocation = (location: any) => {
	// Initially define the highest sortDateValue as -Infinity and the highestSortDateValueHoliday as null ready for population
	let highestSortDateValue = -Infinity;
	let highestSortDateHoliday = null;

	const findHoliday = (locations: any) => {
		locations.forEach((loc: any) => {
			// Deal with a location that has a linkedHolidays array directly below it
			if (loc.linkedHolidays) {
				loc.linkedHolidays.forEach((holiday: any) => {
					const sortDateValue = parseInt(holiday.sortDateValue, 10);
					if (sortDateValue > highestSortDateValue) {
						highestSortDateValue = sortDateValue;
						highestSortDateHoliday = holiday;
					}
				});
			}

			// Deal with a location that has a placesLocatedIn array below it
			if (loc.placesLocatedIn) {
				// Iterate through the locations connected to the parent location
				findHoliday(loc.placesLocatedIn);
			}
		});
	};

	findHoliday([location]); // Call the function on the top location

	LogS.log(
		"NodeTraversalsS.findHighestSortDateValueHolidayOfLocation: Highest sortDateValue holiday for location: " + location.name + " is: ",
		highestSortDateHoliday,
	);
	return highestSortDateHoliday;
};

// Function to return the count of "holiday" nodes with an unique nodeId of a location (the holiday count at that location)
const findHolidayCountOfLocation = (location: any) => {
	// Initialize an empty set to store unique nodeIds
	const uniqueNodeIds = new Set();

	const countHoliday = (locations: any) => {
		locations.forEach((loc: any) => {
			// Deal with a location that has a linkedHolidays array directly below it
			if (loc.linkedHolidays) {
				loc.linkedHolidays.forEach((holiday: any) => {
					// Check if the holiday has a unique nodeId
					if (holiday.nodeId && !uniqueNodeIds.has(holiday.nodeId)) {
						uniqueNodeIds.add(holiday.nodeId);
					}
				});
			}

			// Deal with a location that has a placesLocatedIn array below it
			if (loc.placesLocatedIn) {
				// Iterate through the locations connected to the parent location
				countHoliday(loc.placesLocatedIn);
			}
		});
	};

	countHoliday([location]); // Call the function on the top location

	// Get the count of unique nodeIds
	const uniqueNodeIdCount = uniqueNodeIds.size;
	LogS.log(
		"NodeTraversalsS.findHolidayCountOfLocation: Number of unique 'holiday' nodes for location: " + location.name + " is: ",
		uniqueNodeIdCount,
	);

	return uniqueNodeIdCount;
};

const NodeTraversalsS = {
	findHighestSortDateValueHolidayOfLocation,
	findHolidayCountOfLocation,
};

export default NodeTraversalsS;
