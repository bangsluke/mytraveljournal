import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

type Transparency = "Transparent" | "Opaque";

interface NavBarProps {
	NavBarStyle: Transparency;
}

// Define a nav bar component that holds the logo and the page name.
export default function NavBar(props: NavBarProps) {
	const router = useRouter();
	const { NavBarStyle } = props; // Extract the props

	// Create a combination of class names for the navbar based on the navbar style
	const NavBarClassNames = `${styles.navbar} ${NavBarStyle === "Opaque" ? styles.navbarOpaque : null}`;

	return (
		<nav id='navbar' className={NavBarClassNames}>
			{/* Display the logo if the navbar is opaque */}
			{NavBarStyle === "Opaque" ? (
				<div className={styles.navbar_logoContainer}>
					<Image src='/images/Logo.png' width={50} height={50} alt='My Travel Journal Logo' className={styles.navbar_logo} />
				</div>
			) : null}

			{/* Display the header if the navbar is opaque */}
			{NavBarStyle === "Opaque" ? (
				<div className={styles.navbar_headerContainer}>
					<h1>my travel journal.</h1>
				</div>
			) : null}

			<div className={styles.navbar_backContainer}>
				{/* Add a back arrow to navigate the last page */}
				<ArrowBackSharpIcon sx={{ fontSize: 50 }} onClick={() => router.back()} />
			</div>

			<div className={styles.navbar_menuContainer}>
				<MenuSharpIcon sx={{ fontSize: 50 }} />
			</div>
		</nav>
	);
}
