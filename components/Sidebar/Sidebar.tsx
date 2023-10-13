import styles from "./Sidebar.module.css";

interface SidebarProps {
	sidebarOpen: boolean;
	toggleSidebar: () => void;
}

const Sidebar = (props: SidebarProps) => {
	const { sidebarOpen, toggleSidebar } = props; // Extract the props
	console.log("sidebarOpen", sidebarOpen);

	console.log(`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`);

	const sideBarClassName = `${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`;
	console.log("sideBarClassName", sideBarClassName);

	return (
		<>
			{/* Add the sidebar */}
			<nav className={sideBarClassName}>
				<button className={styles.toggleButton} onClick={toggleSidebar}>
					Toggle Sidebar
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
			{/* Add a black backdrop behind the sidebar */}
			<div
				className={`${styles.sidebarBackContainer} ${sidebarOpen ? styles.sidebarBackContainerOpen : styles.sidebarBackContainerClosed}`}
				onClick={toggleSidebar}></div>
		</>
	);
};

export default Sidebar;
