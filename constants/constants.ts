// Define the header height used across the tool
const headerHeight = 80; // In pixels. Keep aligned with the global.css --header-height variable

// Define the image sizes used across the tool
const HolidayCardImageHeight = 150; // Keep aligned with the global.css --holiday-card-image-height variable
const HolidayCardImageWidth = (HolidayCardImageHeight * 2) / 3;

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
	HolidayCardImageHeight,
	HolidayCardImageWidth,
	SkipAuth,
	mainAccent,
};

export default Constants;
