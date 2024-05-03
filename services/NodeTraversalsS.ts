// Function to return the nodeId of the highest sortDateValue of a location
// const findHighestSortDateValueHolidayOfLocation = (location: any) => {
// 	console.log("location into findHighestSortDateValueHolidayOfLocation: ", location.name);

// 	let highestSortDateValue = -Infinity;
// 	let holiday: any = "";
// 	const findHoliday = (locations: any) => {
// 		locations.forEach((loc: any) => {
// 			// Deal with a location that has a linkedHolidays array directly below it
// 			if (loc.linkedHolidays) {
// 				loc.linkedHolidays.forEach((holiday: any) => {
// 					const sortDateValue = parseInt(holiday.sortDateValue, 10);
// 					if (sortDateValue > highestSortDateValue) {
// 						console.log("holiday: ", holiday);
// 						highestSortDateValue = sortDateValue;
// 						return holiday;
// 					}
// 				});
// 			}

// 			// Deal with a location that has a placesLocatedIn array below it
// 			if (loc.placesLocatedIn) {
// 				findHoliday(loc.placesLocatedIn);
// 			}
// 		});
// 	};

// 	holiday = findHoliday([location]);

// 	console.warn("holiday from findHighestSortDateValueHolidayOfLocation: ", holiday);

// 	return holiday;
// };

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
				findHoliday(loc.placesLocatedIn);
			}
		});
	};

	findHoliday([location]);

	console.warn("Highest sortDateValue holiday for location: " + location.name + " is: ", highestSortDateHoliday);
	return highestSortDateHoliday;
};

const NodeTraversalsS = {
	findHighestSortDateValueHolidayOfLocation,
};

export default NodeTraversalsS;
