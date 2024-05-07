import { Tooltip } from "@mantine/core";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import HouseIcon from "@mui/icons-material/House";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PublicIcon from "@mui/icons-material/Public";
import Constants from "../constants/constants";
import styles from "../styles/Home.module.css";

type IconSize = "large" | "medium" | "small";

function ReturnCorrectIcon(type: string, iconSize: IconSize) {
	switch (type.toLowerCase()) {
		case "continent":
			return <PublicIcon fontSize={iconSize} className={styles.TypeIcon} />;

		case "country":
			return <MapIcon fontSize={iconSize} className={styles.TypeIcon} />;

		case "county":
			return <HolidayVillageIcon fontSize={iconSize} className={styles.TypeIcon} />;

		case "state":
			return <HolidayVillageIcon fontSize={iconSize} className={styles.TypeIcon} />;

		case "city":
			return <LocationCityIcon fontSize={iconSize} className={styles.TypeIcon} />;

		case "capital":
			return <PinDropIcon fontSize={iconSize} className={styles.TypeIcon} />;

		case "town":
			return <HouseIcon fontSize={iconSize} className={styles.TypeIcon} />;

		case "island":
			return <BeachAccessIcon fontSize={iconSize} className={styles.TypeIcon} />;

		case "location":
			return <PinDropIcon fontSize={iconSize} className={styles.TypeIcon} />;

		default:
			return <PinDropIcon fontSize={iconSize} className={styles.TypeIcon} />;
	}
}

// Create a function to return the correct MUI icon for a given node type
export default function ReturnTypeIcon(type: string, iconSize: IconSize) {
	// Get the correct icon from the above function
	const CorrectIcon = ReturnCorrectIcon(type, iconSize);

	// Create a tooltip for the icon
	// @ts-ignore
	const TooltipText = "Click to go to " + Constants.CorrectNodeTypeToPlural[type.toLowerCase()];

	// TODO: Add a hyperlink to the below icon that redirects to the Cities page if City or Capital, or the Locations page for other types, and filters the page down
	return <Tooltip label={TooltipText}>{CorrectIcon}</Tooltip>;
}
