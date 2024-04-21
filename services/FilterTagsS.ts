import Constants from "../constants/constants";

type levelNum = "topLevel" | "secondaryLevel";

// Create a function to filter tags down to accepted values to display
export default function filterTags(arr: any, levelNum: levelNum) {
	let acceptedStrings = Constants.AllowedTopLevelTags;
	if (levelNum === "secondaryLevel") {
		acceptedStrings = Constants.AllowedSecondLevelTags;
	}
	const result = [];
	for (const str of arr) {
		if (acceptedStrings.includes(str)) {
			result.push("#" + str);
		}
	}
	return result;
}
