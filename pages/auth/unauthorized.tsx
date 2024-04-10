import { useRouter } from "next/router";
import { ButtonComponent } from "../../components/Button/Button";
import styles from "./Authentication.module.css";
import AuthenticationLayout from "./AuthenticationLayout";

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
		<AuthenticationLayout>
			<h1 className={styles.title}>Unauthorized</h1>
			<p>{email} does not have access to this site.</p>
			<p>To gain access, please contact Luke with your email address to be added.</p>
			<ButtonComponent Text={"Go Back to Home"} onClick={handleGoBack} />
		</AuthenticationLayout>
	);
}
