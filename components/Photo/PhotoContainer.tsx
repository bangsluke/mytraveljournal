import React from "react";
import styles from "./Photo.module.css";

interface PhotoContainerProps {
	children: JSX.Element;
}

const PhotoContainer: React.FC<PhotoContainerProps> = ({ children }) => {
	return <div className={styles.PhotoContainer}>{children}</div>;
};

export default PhotoContainer;
