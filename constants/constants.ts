// Define the image sizes used across the tool
const HolidayCardImageHeight = 150; // Keep aligned with the global.css --holiday-card-image-height variable
const HolidayCardImageWidth = (HolidayCardImageHeight * 2) / 3;

// Add a manual ability to skip authentication
let SkipAuth = true;
// If production mode, definitely don't skip authentication
if (process.env.NODE_ENV === "production") {
	SkipAuth = false;
}

const Constants = {
	HolidayCardImageHeight,
	HolidayCardImageWidth,
	SkipAuth,
};

export default Constants;
