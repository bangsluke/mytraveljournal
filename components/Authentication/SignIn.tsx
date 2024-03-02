import { signIn } from "next-auth/react";
import Image from "next/image";
import styles from "./Authentication.module.css";

// Define a sign in component can be used to help the user sign in.
export default function SignIn() {
	return (
		<div id={"signin"} className={styles.AuthenticationHolder}>
			<h1 className={styles.title}>My Travel Journal</h1>
			<Image src='/images/Logo.png' width={50} height={50} alt='My Travel Journal Logo' className={styles.Logo} priority />
			<p className={styles.text}>Access Denied</p>
			<button onClick={() => signIn()}>Sign in</button>
		</div>
	);
}
