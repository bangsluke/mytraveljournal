"use client";
// https://levelup.gitconnected.com/smooth-scroll-to-top-button-implementation-in-next-js-13-7d3fa314e2d8
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			// if the user scrolls down, show the button
			window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
		};
		// listen for scroll events
		window.addEventListener("scroll", toggleVisibility);

		// clear the listener on component unmount
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	// Handles the animation when scrolling to the top
	const scrollToTop = () => {
		isVisible &&
			window.scrollTo({
				top: 0,
				behavior: "auto",
			});
	};

	return (
		<button
			className={`${styles.scrollToTopButton} ${isVisible ? styles.scrollToTopButtonVisible : null}`}
			onClick={scrollToTop}
			title='Scroll to Top Button'>
			<ChevronUp />
		</button>
	);
};

export default ScrollToTopButton;
