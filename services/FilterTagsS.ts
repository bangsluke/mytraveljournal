// Create a function to filter tags down to accepted values to display
export default function filterTags(arr: any) {
	const acceptedStrings = ["work", "skiing", "UK"];
	const result = [];
	for (const str of arr) {
		if (acceptedStrings.includes(str)) {
			result.push("#" + str);
		}
	}
	return result;
}
