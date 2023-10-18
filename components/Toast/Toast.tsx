// Toast.tsx

import React, { useEffect, useState } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
	message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			// setIsVisible(false);
		}, 3000); // Hide the toast after 3 seconds

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<div className={`${styles.toast} ${isVisible ? styles.show : styles.hide}`}>
			<div className={styles.toastContent}>{message}</div>
		</div>
	);
};

export default Toast;
