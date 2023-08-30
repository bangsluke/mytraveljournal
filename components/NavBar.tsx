import Image from "next/image";
import styles from "../styles/Home.module.css";

// Define a nav bar component that holds the logo and the page name.
export default function NavBar() {
  return (
    <nav id="navbar" className={styles.navbar}>
      <Image
        src="/images/Logo.png" // Route of the image file
        height={80} // Desired size with correct aspect ratio
        width={80} // Desired size with correct aspect ratio
        alt="Logo"
        className={styles.logo}
      />
      <h1>my travel journal.</h1>
    </nav>
  );
}
