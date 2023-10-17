import { useRouter } from "next/router";
import styles from "./Sidebar.module.css";
import { SidebarLink } from "./SidebarData";

// Define a count card component that holds a string title and a number.
export default function SidebarItem(props: SidebarLink) {
	const router = useRouter(); // Import the Next router
	const { id, displayName, pagePath, active } = props; // Extract the props

	// If the sidebar link matches the active route, set the class to active
	let sidebarLinkClassName = `${styles.sidebarItem}`;
	if (active) {
		sidebarLinkClassName = `${styles.sidebarItem} ${styles.sidebarItemActive}`;
	}

	return (
		<li id={id} className={sidebarLinkClassName} onClick={() => router.push({ pathname: pagePath })}>
			{displayName.toLowerCase()}
		</li>
	);
}
