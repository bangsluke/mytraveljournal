import Head from "next/head";
import styles from "../pages/auth/Authentication.module.css";

export default function AuthLayout({ children }: any) {
	return (
		<>
			<Head>
				{/* Site Title */}
				<title>My Travel Journal</title>
				<meta name='description' content='A journal of my travels.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Wrap all children in a main tag with a header offset padding value */}
			<main className={styles.page}>
				{/* Include the sidebar */}
				<section className={styles.card}>{children}</section>
			</main>
		</>
	);
}
