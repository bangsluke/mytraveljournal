import Image from "next/image";
import styles from "./Loading.module.css";

interface LoadingProps {
	BackgroundStyle: "Transparent" | "Opaque";
}

export default function Loading(props: LoadingProps) {
	const { BackgroundStyle } = props; // Extract the props
	let LoadingStyles = `${styles.LoadingHolder}`;
	if (BackgroundStyle === "Opaque") {
		LoadingStyles = `${styles.LoadingHolder} ${styles.LoadingHolderOpaque}`;
	}

	return (
		<div className={LoadingStyles}>
			<Image src='/images/Logo.png' width={50} height={50} alt='My Travel Journal Logo' className={styles.rotatingLogo} priority />
			<p className={styles.title}>Loading...</p>
		</div>
	);
}
