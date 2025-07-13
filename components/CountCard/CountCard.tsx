import { useRouter } from "next/router";
import { ReactElement } from "react";
import styles from "./CountCard.module.css";
import React from "react";

interface CountCardProp {
	id: string;
	cardTitle: string;
	countValue: number | string | JSX.Element;
	pagePath: string;
	backgroundIcon?: ReactElement;
	enabledBoolean: boolean;
}

// Define a count card component that holds a string title and a number.
export default function CountCard(props: CountCardProp) {
	const router = useRouter(); // Import the Next router
	const { id, cardTitle, countValue, pagePath, backgroundIcon, enabledBoolean } = props; // Extract the props

	// Handle different types of countValue
	let displayCountValue;
	if (React.isValidElement(countValue)) {
		// If countValue is a JSX element (like a loading spinner), display it directly
		displayCountValue = countValue;
	} else if (typeof countValue === 'number' || typeof countValue === 'string') {
		// If countValue is a number or string, display it normally
		displayCountValue = countValue;
	} else {
		// Fallback to 0 for any other type
		displayCountValue = 0;
	}

	let cardStyles = styles.countcard;
	if (!enabledBoolean) {
		cardStyles = styles.disabledCard;
	}

	return (
		<div
			id={id}
			className={cardStyles}
			// Add an onClick if the card is enabled
			onClick={() => {
				if (enabledBoolean) {
					router.push({ pathname: pagePath });
				}
			}}>
			{/* Load in the MUI icon to display behind the card content */}
			{backgroundIcon && (
				<div
					className={styles.backgroundIcon} // @ts-ignore
					fontSize='40'>
					{backgroundIcon}
				</div>
			)}
			<h3 className={styles.cardTitle}>{cardTitle}</h3>
			<div className={styles.displayCountValue}>{displayCountValue}</div>
		</div>
	);
}
