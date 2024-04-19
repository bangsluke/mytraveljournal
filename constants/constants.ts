// Define the header height used across the tool
const headerHeight = 80; // In pixels. Keep aligned with the global.css --header-height variable

// Add a manual ability to skip authentication
let SkipAuth = false;
// If production mode, definitely don't skip authentication
if (process.env.NODE_ENV === "production") {
	SkipAuth = false;
}

// Define the colors used across the tool
const mainAccent = "#fe395c";

// Define some tags that are allowed at the top level (Holiday List Level)
let AllowedTopLevelTags = ["work", "family", "UK", "skiing"];
// Define some tags that are allowed at the secondary level (Holiday Page Level)
let AllowedSecondLevelTags = [...AllowedTopLevelTags, "wedding", "golf", "sport"];

const Constants = {
	headerHeight,
	SkipAuth,
	mainAccent,
	AllowedTopLevelTags,
	AllowedSecondLevelTags,
};

export default Constants;
