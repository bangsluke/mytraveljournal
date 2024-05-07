import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HouseIcon from "@mui/icons-material/House";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PublicIcon from "@mui/icons-material/Public";

type IconSize = "large" | "medium" | "small";

// Create a function to return the correct MUI icon for a given node type
export default function ReturnTypeIcon(type: string, iconSize: IconSize) {
	switch (type) {
		case "Continent":
			return <PublicIcon fontSize={iconSize} />;

		case "Country":
			return <MapIcon fontSize={iconSize} />;

		case "City":
			return <LocationCityIcon fontSize={iconSize} />;

		case "Capital":
			return <PinDropIcon fontSize={iconSize} />;

		case "Town":
			return <HouseIcon fontSize={iconSize} />;

		case "Island":
			return <BeachAccessIcon fontSize={iconSize} />;

		case "Location":
			return <PinDropIcon fontSize={iconSize} />;
	}
}
