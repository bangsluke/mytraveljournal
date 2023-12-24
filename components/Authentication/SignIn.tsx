import { signIn } from "next-auth/react";
import Image from "next/image";
import styles from "./Authentication.module.css";

// Define a sign in component can be used to help the user sign in.
export default function SignIn() {
	return (
		<div id={"signin"} className={styles.AuthenticationHolder}>
			<Image src='/images/Logo.png' width={50} height={50} alt='My Travel Journal Logo' className={styles.Logo} />
			<h2 className={styles.cardTitle}>Access Denied</h2>
			<button onClick={() => signIn()}>Sign in</button>
		</div>
	);
}
