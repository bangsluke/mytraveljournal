import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../components/Layouts/Layout";
import Error404Image from "../public/images/404Image.webp";
import styles from "../styles/Home.module.css";

// https://nextjs.org/docs/advanced-features/custom-error-page
export default function Custom404Page() {
	const router = useRouter();
	return (
		<Layout NavbarStyle='Opaque'>
			<Image src={Error404Image} alt='Travel Site Error Logo' width='200' height='200' layout='fixed' loading='lazy' />
			<h2 className={styles.ErrorPageHeader}>404 - Page Not Found</h2>
			<div
				className={styles.ErrorMessageDiv}
				onClick={() => router.back()} // Go back to the last visited page
			>
				<h4>Click here to go back</h4>
			</div>
		</Layout>
	);
}
