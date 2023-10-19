// Toast.tsx

import React, { useEffect, useState } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
	message: string;
	duration: number;
}

const Toast: React.FC<ToastProps> = ({ message, duration }) => {
	const [isVisible, setIsVisible] = useState(true); // Set a visible state
	const durationMS = duration * 1000; // Convert the time in seconds to milliseconds

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsVisible(false);
		}, durationMS); // Hide the toast after 3 seconds
		return () => {
			clearTimeout(timeout);
		};
	}, [durationMS]);

	return (
		<div className={`${styles.toast} ${isVisible ? styles.show : styles.hide}`}>
			<div className={styles.toastContent}>{message}</div>
		</div>
	);
};

export default Toast;
