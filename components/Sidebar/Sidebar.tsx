import React from "react";
import useScreenSize from "../../hooks/useScreenSize";
import styles from "./Sidebar.module.css";

interface SidebarProps {
	sidebarOpen: boolean;
	toggleSidebar: () => void;
}

type SidebarStyle = "static" | "dynamic";

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
	const screenSize = useScreenSize(); // Get the screen size
	const sidebarStyle: SidebarStyle = screenSize == "mobile" ? "dynamic" : "static"; // If the screen is mobile size, make the sidebar dynamic, otherwise make the sidebar permanent and static
	// console.log("sidebarStyle:", sidebarStyle);

	// If the screen is mobile size, make the sidebar dynamic, otherwise make the sidebar permanent and static
	let sideBarClassName = `${styles.sidebar} ${styles.sidebarStatic}`;
	if (sidebarStyle == "dynamic") {
		sideBarClassName = `${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`;
	}

	// If the screen is mobile size, add a sidebar back container to be clicked to close the sidebar, otherwise don't
	let sidebarBackContainerClassName = styles.sidebarBackContainerHidden;
	if (sidebarStyle == "dynamic") {
		sidebarBackContainerClassName = `${styles.sidebarBackContainer} ${
			sidebarOpen ? styles.sidebarBackContainerOpen : styles.sidebarBackContainerClosed
		}`;
	}

	return (
		<>
			<nav className={sideBarClassName}>
				{sidebarStyle == "dynamic" && (
					<button className={styles.toggleButton} onClick={toggleSidebar}>
						Closed Sidebar
					</button>
				)}
				<div className={styles.sidebarContent}>
					<h1>Sidebar Content</h1>
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
					</ul>
				</div>
			</nav>
			<div className={sidebarBackContainerClassName} onClick={toggleSidebar}></div>
		</>
	);
};

export default Sidebar;
