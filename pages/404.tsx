import { Session } from "next-auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { ButtonComponent } from "../components/Button/Button";
import styles from "../pages/auth/Authentication.module.css";
import Error404Image from "../public/images/404Image.webp";
import withAuth from "./api/auth/withAuth";
import AuthenticationLayout from "./auth/AuthenticationLayout";

// https://nextjs.org/docs/advanced-features/custom-error-page
function Custom404Page({ session }: { session: Session }) {
	const router = useRouter(); // Import the Next router
	return (
		<>
			<AuthenticationLayout>
				<h1 className={styles.title}>my travel journal.</h1>
				<Image src={Error404Image} alt='Travel Site Error Logo' width='100' height='100' layout='fixed' priority />
				<h2 className={styles.title}>404 - Page Not Found</h2>
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
