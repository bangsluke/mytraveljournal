import React from "react";
import styles from "./Sidebar.module.css";

interface SidebarProps {
	sidebarOpen: boolean;
	toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
	const sideBarClassName = `${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`;
	const sidebarBackContainerClassName = `${styles.sidebarBackContainer} ${
		sidebarOpen ? styles.sidebarBackContainerOpen : styles.sidebarBackContainerClosed
	}`;

	return (
		<>
			<nav className={sideBarClassName}>
				<button className={styles.toggleButton} onClick={toggleSidebar}>
					Closed Sidebar
				</button>
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
