import Image from "next/image";
import styles from "./Loading.module.css";

// Define a sign in component can be used to help the user sign in.
export default function Loading() {
	return (
		<div className={styles.AuthenticationHolder}>
			<Image src='/images/Logo.png' width={50} height={50} alt='My Travel Journal Logo' className={styles.rotatingLogo} />
		</div>
	);
}
