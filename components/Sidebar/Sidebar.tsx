import "./Sidebar.module.css";

interface SidebarProps {
	isOpen: boolean;
	toggleSidebar: () => void;
}

const Sidebar = (props: SidebarProps) => {
	const { isOpen, toggleSidebar } = props; // Extract the props

	return (
		<div className={`sidebar ${isOpen ? "open" : "closed"}`}>
			<button className='toggle-button' onClick={toggleSidebar}>
				Toggle Sidebar
			</button>
			<div className='content'>
				<h1>Sidebar Content</h1>
			</div>
		</div>
	);
};

export default Sidebar;
