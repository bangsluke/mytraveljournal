import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import styles from "./CountCard.module.css";

interface CountCardProp {
	id: string;
	cardTitle: string;
	countValue: number | string | JSX.Element;
	pagePath: string;
	backgroundIcon?: ReactElement;
}

// Define a count card component that holds a string title and a number.
export default function CountCard(props: CountCardProp) {
	const router = useRouter(); // Import the Next router
	const { id, cardTitle, countValue, pagePath, backgroundIcon } = props; // Extract the props

	// Error handling for if countValue returns an element
	let displayCountValue;
	if (countValue instanceof Element) {
		displayCountValue = 0;
	} else {
		displayCountValue = countValue;
	}

	return (
		<div id={id} className={styles.countcard} onClick={() => router.push({ pathname: pagePath })}>
			<FlightTakeoffIcon className={styles.backgroundIcon} />
			<h3>{cardTitle}</h3>
			<h4>{displayCountValue}</h4>
		</div>
	);
}
