import { Group } from "@mantine/core";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { GithubButton, GoogleButton } from "../../components/SignIn/SocialButtons";
import styles from "./Authentication.module.css";
import AuthenticationLayout from "./AuthenticationLayout";

// Define a sign in component can be used to help the user sign in.
export default function SignIn() {
	return (
		<AuthenticationLayout>
			<h1 className={styles.title}>my travel journal.</h1>
			<Image src='/images/Logo.png' width={500} height={500} alt='My Travel Journal Logo' className={styles.Logo} priority />
			<Group justify='center' p='md'>
				<GoogleButton variant='default' size='md' onClick={() => signIn("google")}>
					Sign in with Google
				</GoogleButton>
				<GithubButton variant='default' size='md' onClick={() => signIn("github")}>
					Sign in with GitHub
				</GithubButton>
			</Group>
		</AuthenticationLayout>
	);
}
