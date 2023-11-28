import React, { ReactElement } from "react";
import styles from "./Pill.module.css";

interface PillProps {
	icon?: ReactElement;
	text: string;
}

const Pill: React.FC<PillProps> = ({ icon, text }) => {
	return (
		<div className={styles.pill}>
			{icon && <div className={styles.pillIcon}>{icon}</div>}
			<div className={styles.pillText}>{text}</div>
		</div>
	);
};

export default Pill;
