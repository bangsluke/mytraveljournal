import { useEffect, useState } from "react";

const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState("");

	const handleResize = () => {
		const width = window.innerWidth;
		if (width < 576) {
			setScreenSize("mobile");
		} else if (width >= 576 && width < 992) {
			setScreenSize("tablet");
		} else {
			setScreenSize("desktop");
		}
		// LogS.log("Screen size:", screenSize); // Log the screen size after resizing
	};

	useEffect(() => {
		handleResize(); // Initial call to set the initial screen size
		window.addEventListener("resize", handleResize); // Listen for window resize events
		return () => {
			// Clean up the event listener when the component is unmounted
			window.removeEventListener("resize", handleResize);
		};
	}, [screenSize]);

	return screenSize;
};

export default useScreenSize;
