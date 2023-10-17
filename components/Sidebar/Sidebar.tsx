import React from "react";
import useScreenSize from "../../hooks/useScreenSize";
import styles from "./Sidebar.module.css";
import { SidebarData } from "./SidebarData";
import SidebarItem from "./SidebarItem";

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

	// console.log("SidebarData", SidebarData); // Log the SidebarData

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
						{SidebarData.map((item) => (
							<SidebarItem id={item.id} key={item.id} displayName={item.displayName} pagePath={item.pagePath} />
						))}
					</ul>
				</div>
			</nav>
			{sidebarStyle == "dynamic" && <div className={sidebarBackContainerClassName} onClick={toggleSidebar}></div>}
		</>
	);
};

export default Sidebar;
