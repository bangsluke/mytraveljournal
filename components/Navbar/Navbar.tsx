import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Image from "next/image";
import { useRouter } from "next/router";
import useScreenSize from "../../hooks/useScreenSize";
import styles from "./Navbar.module.css";

export type Transparency = "Transparent" | "Opaque";

interface NavbarProps {
	NavbarStyle: Transparency;
	toggleSidebar: () => void;
}

// Define a nav bar component that holds the logo and the page name.
export default function Navbar(props: NavbarProps) {
	const router = useRouter(); // Import the Next router
	const { NavbarStyle, toggleSidebar } = props; // Extract the props
	const screenSize = useScreenSize(); // Get the screen size

	// Create a combination of class names for the Navbar based on the Navbar style
	const NavbarClassNames = `${styles.Navbar} ${NavbarStyle === "Opaque" ? styles.NavbarOpaque : null} ${
		screenSize === "mobile" || screenSize === "tablet" ? styles.NavbarMobile : null
	}`;

	// Create a class name for the icon and icon circles based on the Navbar style
	const IconClassName = `${styles.Icon} ${NavbarStyle === "Opaque" ? null : styles.IconOpaque}`;
	const IconCircleClassName = `${styles.IconCircle} ${NavbarStyle === "Opaque" ? null : styles.IconCircleOpaque}`;

	return (
		<nav id='Navbar' className={NavbarClassNames}>
			{/* Display the logo if the Navbar is opaque */}
			{NavbarStyle === "Opaque" ? (
				<div className={styles.Navbar_logoContainer} onClick={() => router.push({ pathname: "/" })}>
					<Image src='/images/Logo.png' width={50} height={50} alt='My Travel Journal Logo' className={styles.Navbar_logo} />
				</div>
			) : (
				<div className={styles.Navbar_logoContainer} onClick={() => router.push({ pathname: "/" })}></div>
			)}

			{/* Display the header if the Navbar is opaque */}
			{NavbarStyle === "Opaque" ? (
				<div
					className={`${styles.Navbar_headerContainer} ${screenSize === "mobile" || screenSize === "tablet" ? styles.Navbar_headerContainerMobile : null}`}
					onClick={() => router.push({ pathname: "/" })}>
					<h1>my travel journal.</h1>
				</div>
			) : (
				// Display a blank div to push the icons right
				<div
					className={`${styles.Navbar_headerContainer} ${screenSize === "mobile" || screenSize === "tablet" ? styles.Navbar_headerContainerMobile : null}`}></div>
			)}

			<div className={styles.Navbar_backContainer}>
				{/* Add a back arrow to navigate the last page */}
				<div className={IconCircleClassName}></div>
				<ArrowBackSharpIcon sx={{ fontSize: 35 }} className={IconClassName} onClick={() => router.back()} />
			</div>

			{screenSize === "mobile" || screenSize === "tablet" ? (
				<div>{/* Add a blank div for mobile and tablet to separate the icons */}</div>
			) : null}

			{screenSize === "mobile" || screenSize === "tablet" ? (
				<div className={styles.Navbar_menuContainer}>
					{/* Add a menu icon to toggle the sidebar if the screen is mobile or tablet */}
					<div className={IconCircleClassName}></div>
					<MenuSharpIcon sx={{ fontSize: 35 }} className={IconClassName} onClick={() => toggleSidebar()} />
				</div>
			) : null}
		</nav>
	);
}
