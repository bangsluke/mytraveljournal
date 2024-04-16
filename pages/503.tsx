import { ButtonComponent } from "../components/Button/Button";
import styles from "../pages/auth/Authentication.module.css";
import withAuth from "./api/auth/withAuth";
import AuthenticationLayout from "./auth/AuthenticationLayout";

// https://nextjs.org/docs/advanced-features/custom-error-page
function Custom503Page() {
	return (
		<>
			<AuthenticationLayout>
				<h1 className={styles.title}>my travel journal.</h1>
				<h2 className={styles.errorTitle}>503</h2>
				<h2 className={styles.title}>Servers Busy</h2>
				<p className={styles.text}>
					Our servers cannot handle your request right now, please wait for a couple of minutes and refresh the page.
				</p>
				{/* Reload the current page */}
				<ButtonComponent Text={"Refresh the page"} onClick={() => location.reload()} fullWidth={false} />
			</AuthenticationLayout>
		</>
	);
}

export default withAuth(Custom503Page);
