import styles from "./Authentication.module.css";

export default function AuthenticationLayout({ children }: any) {
	return (
		<>
			{/* Wrap all children in a main tag with a header offset padding value */}
			<main className={styles.page}>
				{/* Include the sidebar */}
				<section className={styles.card}>{children}</section>
			</main>
		</>
	);
}
