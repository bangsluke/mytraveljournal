import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import NavBar from "../NavBar";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children, NavBarStyle }: any) {
	const [isOpen, setIsOpen] = useState(false); // Create a state for toggling the sidebar
	const toggleSidebar = () => {
		console.log("toggleSidebar called from Layout to be", isOpen);
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Head>
				{/* Site Title */}
				<title>My Travel Journal</title>
				<meta name='description' content='A journal of my travels with Bry and others.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{/* Include the navbar */}
			<NavBar NavBarStyle={NavBarStyle} toggleSidebar={toggleSidebar} />

			{/* Wrap all children in a main tag with a header offset padding value */}
			<main className={styles.main}>
				{/* Include the sidebar */}
				<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
				{children}
			</main>
			{/* Add a footer at the bottom of every page */}
			<footer className={styles.footer}>
				{/* TODO: Actually set up a good footer */}
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by Next.js
				</a>
			</footer>
		</>
	);
}
