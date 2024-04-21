import { useRouter } from "next/router";
import { ButtonComponent } from "../components/Button/Button";
import styles from "../pages/auth/Authentication.module.css";
import withAuth from "./api/auth/withAuth";
import AuthenticationLayout from "./auth/AuthenticationLayout";

// https://nextjs.org/docs/advanced-features/custom-error-page
function Custom404Page() {
	const router = useRouter(); // Import the Next router
	return (
		<>
			<AuthenticationLayout>
				<h1 className={styles.title}>my travel journal.</h1>
				<h2 className={styles.errorTitle}>404</h2>
				<h2 className={styles.title}>Page Not Found</h2>
				<p className={styles.text}>
					The page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you
					think this is an error contact support.
				</p>
				{/* Go back to the last visited page */}
				<ButtonComponent Text={"Click here to go back"} onClick={() => router.back()} fullWidth={false} />
			</AuthenticationLayout>
		</>
	);
}

export default withAuth(Custom404Page);
