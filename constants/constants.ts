// Define the header height used across the tool
const headerHeight = 80; // In pixels. Keep aligned with the global.css --header-height variable

// Add a manual ability to skip authentication
let SkipAuth = true;
// If production mode, definitely don't skip authentication
if (process.env.NODE_ENV === "production") {
	SkipAuth = false;
}

// Define the colors used across the tool
const mainAccent = "#fe395c";

const Constants = {
	headerHeight,
	SkipAuth,
	mainAccent,
};

export default Constants;
