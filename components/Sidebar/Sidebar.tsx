import styles from "./Sidebar.module.css"; // Import CSS module

interface SidebarProps {
	sidebarOpen: boolean;
	toggleSidebar: () => void;
}

const Sidebar = (props: SidebarProps) => {
	const { sidebarOpen, toggleSidebar } = props; // Extract the props

	return (
		<nav className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
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
	);
};

export default Sidebar;
