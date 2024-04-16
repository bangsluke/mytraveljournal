import { CloseButton, Group } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle";
import useScreenSize from "../../hooks/useScreenSize";
import { ButtonComponent } from "../Button/Button";
import styles from "./Sidebar.module.css";
import { SidebarData } from "./SidebarData";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
	sidebarOpen: boolean;
	toggleSidebar: () => void;
}

type SidebarStyle = "static" | "dynamic";

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
	// Return the NextAuth session
	const { data: session, status } = useSession();

	const screenSize = useScreenSize(); // Get the screen size
	const sidebarStyle: SidebarStyle = screenSize == "mobile" ? "dynamic" : "static"; // If the screen is mobile size, make the sidebar dynamic, otherwise make the sidebar permanent and static
	// LogS.log("sidebarStyle:", sidebarStyle);
	const router = useRouter(); // Import the Next router

	// If the screen is mobile size, make the sidebar dynamic, otherwise make the sidebar permanent and static
	let sideBarClassName = `${styles.sidebar} ${styles.sidebarStatic}`;
	if (sidebarStyle == "dynamic") {
		sideBarClassName = `${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`;
	}

	// If the screen is mobile size, add a sidebar back container to be clicked to close the sidebar, otherwise don't
	let sidebarBlackoutClassName = styles.sidebarBlackoutHidden;
	if (sidebarStyle == "dynamic") {
		sidebarBlackoutClassName = `${styles.sidebarBlackout} ${sidebarOpen ? styles.sidebarBlackoutOpen : styles.sidebarBlackoutClosed}`;
	}

	// LogS.log("SidebarData", SidebarData); // Log the SidebarData

	// Get the signed in email
	let signedInEmail = session?.user?.email;
	if (signedInEmail == null) {
		// @ts-ignore
		signedInEmail = session?.session?.user?.email;
	}

	return (
		<>
			<nav className={sideBarClassName}>
				<div className={styles.sideBarLogoContainer} onClick={() => router.push({ pathname: "/" })}>
					<Image src='/images/Logo.png' width={50} height={50} alt='My Travel Journal Logo' />
				</div>
				{/* Dynamically decide on if to show the close sidebar button */}
				{sidebarStyle == "dynamic" && (
					<div className={styles.sidebarCloseButtonContainer}>
						<CloseButton onClick={toggleSidebar} size='lg' aria-label='Close sidebar' />
					</div>
				)}
				<div className={styles.sidebarContent}>
					<ul>
						{SidebarData.map((item) => (
							<SidebarItem
								id={item.id}
								key={item.id}
								displayName={item.displayName}
								pagePath={item.pagePath}
								active={router.pathname.startsWith(item.pagePath) ? true : false}
							/>
						))}
					</ul>
				</div>
				{/* Provide details to the user on their login email and offer a sign out button */}
				<Group justify='center' align='center' wrap='wrap' className={styles.sidebarLoginContent}>
					{/* Display either a sign in or sign out button based on the session state */}
					{session ? (
						<>
							<p>Signed in as {signedInEmail}</p>
							{/* TODO: Style email underlined */}
							<ButtonComponent Text='Sign out' onClick={() => signOut()} fullWidth={false} />
						</>
					) : (
						<ButtonComponent Text='Sign in' onClick={() => signIn()} fullWidth={false} />
					)}
					<DarkModeToggle></DarkModeToggle>
				</Group>
			</nav>
			{/* On mobile, add a blackout container to be clicked to close the sidebar */}
			{sidebarStyle == "dynamic" && <div className={sidebarBlackoutClassName} onClick={toggleSidebar}></div>}
		</>
	);
};

export default Sidebar;
