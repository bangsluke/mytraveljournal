import { Session } from "next-auth";
import Image from "next/image";
import { useRouter } from "next/router";
// import Layout from "../layouts/Layout";
import withAuth from "../lib/withAuth";
import Error404Image from "../public/images/404Image.webp";
import styles from "../styles/404.module.css";

// https://nextjs.org/docs/advanced-features/custom-error-page
function Custom404Page({ session }: { session: Session }) {
	const router = useRouter(); // Import the Next router
	return (
		<>
			{/* <Layout NavbarStyle='Opaque'> */}
			<Image src={Error404Image} alt='Travel Site Error Logo' width='200' height='200' layout='fixed' priority />
			<h2 className={styles.ErrorPageHeader}>404 - Page Not Found</h2>
			<div
				className={styles.ErrorMessageDiv}
				onClick={() => router.back()} // Go back to the last visited page
			>
				<h4>Click here to go back</h4>
			</div>
			{/* </Layout> */}
		</>
	);
}

export default withAuth(Custom404Page);
