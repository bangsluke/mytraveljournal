import styles from "./Authentication.module.css";

export default function AuthenticationLayout({ children }: any) {
	return (
		<main className={styles.page}>
			{/* Include the sidebar */}
			<section className={styles.card}>{children}</section>
		</main>
	);
}
