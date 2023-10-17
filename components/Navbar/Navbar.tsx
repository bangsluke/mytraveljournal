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
	const NavbarClassNames = `${styles.Navbar} ${NavbarStyle === "Opaque" ? styles.NavbarOpaque : null}`;

	return (
		<nav id='Navbar' className={NavbarClassNames}>
			{/* Display the logo if the Navbar is opaque */}
			{NavbarStyle === "Opaque" ? (
				<div className={styles.Navbar_logoContainer} onClick={() => router.push({ pathname: "/" })}>
					<Image src='/images/Logo.png' width={50} height={50} alt='My Travel Journal Logo' className={styles.Navbar_logo} />
				</div>
			) : null}

			{/* Display the header if the Navbar is opaque */}
			{NavbarStyle === "Opaque" ? (
				<div className={styles.Navbar_headerContainer}>
					<h1>my travel journal.</h1>
				</div>
			) : null}

			<div className={styles.Navbar_backContainer}>
				{/* Add a back arrow to navigate the last page */}
				<ArrowBackSharpIcon sx={{ fontSize: 50 }} onClick={() => router.back()} />
			</div>

			{screenSize === "mobile" ? (
				<div className={styles.Navbar_menuContainer} onClick={() => toggleSidebar()}>
					<MenuSharpIcon sx={{ fontSize: 50 }} />
				</div>
			) : null}
		</nav>
	);
}
