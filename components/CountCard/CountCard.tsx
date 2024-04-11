import { useRouter } from "next/router";
import { ReactElement } from "react";
import styles from "./CountCard.module.css";

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

	// Error handling for if countValue returns an element
	let displayCountValue;
	if (countValue instanceof Element) {
		displayCountValue = 0;
	} else {
		displayCountValue = countValue;
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
			<h4 className={styles.displayCountValue}>{displayCountValue}</h4>
		</div>
	);
}
