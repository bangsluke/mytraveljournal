import { signIn } from "next-auth/react";
import Image from "next/image";
import AuthLayout from "../../layouts/AuthLayout";
import styles from "./Authentication.module.css";

// Define a sign in component can be used to help the user sign in.
export default function SignIn() {
	return (
		<AuthLayout>
			<h1 className={styles.title}>my travel journal.</h1>
			<Image src='/images/Logo.png' width={500} height={500} alt='My Travel Journal Logo' className={styles.Logo} priority />
			<button onClick={() => signIn()}>Sign in</button>
		</AuthLayout>
	);
}
