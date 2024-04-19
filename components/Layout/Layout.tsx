import Head from "next/head";
import { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import LogS from "../../services/LogS";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Layout.module.css";

// ! IMPORTANT WARNING: Do not move from Components - causes big build errors if you do

export default function Layout({ children, NavbarStyle }: any) {
	const screenSize = useScreenSize(); // Get the screen size
	const [sidebarOpen, setSidebarOpen] = useState(false); // Create a state for toggling the sidebar

	// Create a function to toggle the sidebar open and close
	const toggleSidebar = () => {
		LogS.log("toggleSidebar called from Layout to be", !sidebarOpen);
		setSidebarOpen((prevState) => !prevState);
	};

	// If the screen is mobile or tablet size, make the main layout dynamic (a dynamic sidebar), otherwise make the main layout permanent and static
	let mainClassName = `${styles.main}`;
	if (screenSize == "mobile" || screenSize == "tablet") {
		mainClassName = `${styles.main} ${styles.mainDynamic}`;
	}

	return (
		<>
			<Head>
				{/* Site Title */}
				<title>My Travel Journal</title>
				<meta name='description' content='A journal of my travels with Bry and others.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Include the Navbar */}
			<Navbar NavbarStyle={NavbarStyle} toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

			{/* Include the sidebar */}
			<Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

			{/* Include the scroll to top button */}
			<ScrollToTopButton />

			{/* Wrap the content and footer in a div to control the footer position */}
			<div className={styles.fullPageContainer}>
				{/* Wrap all children in a main tag with a header offset padding value */}
				<main className={mainClassName}>
					<section>{children}</section>
				</main>

				{/* Include the footer */}
				<Footer />
			</div>
		</>
	);
}
