import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

// Define a nav bar component that holds the logo and the page name.
export default function NavBar() {
	const router = useRouter();

	return (
		<nav id='navbar' className={styles.navbar}>
			<div className={styles.navbar_logoContainer}>
				<TravelExploreIcon sx={{ fontSize: 50 }} />
			</div>
			<div className={styles.navbar_headerContainer}>
				<h1>my travel journal.</h1>
			</div>
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
