import { useRouter } from "next/router";
import styles from "./CountCard.module.css";

interface CountCardProp {
	id: string;
	cardTitle: string;
	countValue: number | string;
	pagePath: string;
}

// Define a count card component that holds a string title and a number.
export default function CountCard(props: CountCardProp) {
	const router = useRouter(); // Import the Next router

	const { id, cardTitle, countValue, pagePath } = props; // Extract the props
	return (
		<div id={id} className={styles.countcard} onClick={() => router.push({ pathname: pagePath })}>
			<h3>{cardTitle}</h3>
			<h4>{countValue}</h4>
		</div>
	);
}
