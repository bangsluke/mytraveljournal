import styles from "./PageHeader.module.css";

// Define a page header component that holds the page title.
export default function PageHeader(props: { PageHeaderTitle: string }) {
	const { PageHeaderTitle } = props; // Extract the props

	return (
		<div className={styles.pageHeaderContainer}>
			<h1>/</h1>
			<h1 className={styles.pageHeader}>{PageHeaderTitle.toLowerCase()}.</h1>
		</div>
	);
}
