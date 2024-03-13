import { useRouter } from "next/router";
import AuthLayout from "../../Layouts/AuthLayout";
import styles from "../../components/Authentication/Authentication.module.css";

export default function UnAuthorized() {
	const router = useRouter();

	// Get the value of the "email" parameter from the query
	const { email } = router.query;

	// Redirect to the home page on button click
	const handleGoBack = () => {
		router.push("/");
	};

	// Use the "email" value in your code
	return (
		<AuthLayout>
			<h1 className={styles.title}>Unauthorized</h1>
			<p>{email} does not have access to this site.</p>
			<p>To gain access, please contact Luke with your email address to be added.</p>
			<button onClick={handleGoBack}>Go Back to Home</button>
		</AuthLayout>
	);
}
