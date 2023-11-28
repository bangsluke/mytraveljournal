import { useQuery } from "@apollo/client";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Interweave } from "interweave"; // https://github.com/milesj/interweave/
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layouts/Layout";
import Pill from "../../components/Pill/Pill";
import GraphQLQueriesS from "../../graphql/GraphQLQueriesS";
import LogS from "../../services/LogS";
import { Holiday } from "../../types/types";
import styles from "./Holidays.module.css";

//  Create a function to return a concatenated list of attendees with hyperlinks
function AttendeesList({ stringArray }: { stringArray: string[] }): JSX.Element {
	const router = useRouter(); // Import the Next router

	// Map through the array and create clickable links
	const linkElements = stringArray.map((name: string, index: number) => (
		<React.Fragment key={index}>
			<h4 className={styles.clickableList} onClick={() => handleLinkClick(name)}>
				{name}
			</h4>
			{index < stringArray.length - 1 && ", "}
		</React.Fragment>
	));

	// Function to handle link clicks
	const handleLinkClick = (name: string) => {
		// Your logic for handling link clicks here
		LogS.log(`Clicked on: ${name}`);
		router.push({ pathname: `/people/person-${name.replace(" ", "")}` });
	};

	return <>{linkElements}</>;
}

export default function HolidayPage() {
	const router = useRouter(); // Import the Next router
	const { nodeId } = router.query; // Use the same variable name as the [nodeId] file name
	LogS.log("nodeId: ", nodeId);

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_HOLIDAY_BY_ID, {
		variables: { nodeId }, // Pass the variable to the query
	});

	LogS.log("holiday data: ", data);

	if (loading) return <p>Loading...</p>;
	if (error)
		return (
			<>
				<p>Error : {error.message}</p>
				<div
					className={styles.ErrorMessageDiv}
					onClick={() => router.back()} // Go back to the last visited page
				>
					<h4>Click here to go back</h4>
				</div>
			</>
		);

	// Extract the data into usable variables
	const { dateYear, dateMonth, name, holidayTitle, coverPhoto, textHtmlContent, attendees }: Holiday = data.holidays[0];
	LogS.log("holiday data: ", data);
	LogS.log("attendees: ", attendees);

	// Define the holiday image URL
	LogS.log("coverPhoto: ", coverPhoto);
	let holidayImageURL = "";
	if (coverPhoto == null || coverPhoto == "" || coverPhoto == "TBC") {
		holidayImageURL = `https://picsum.photos/id/${Math.floor(Math.random() * 999) + 1}/375/600`;
	} else {
		holidayImageURL = coverPhoto;
	}
	LogS.log("holidayImageURL: ", holidayImageURL);

	// Format the month date
	const monthFormatted = new Date(2000, parseInt(dateMonth) - 1).toLocaleString("default", { month: "long" });

	return (
		<Layout NavbarStyle='Transparent'>
			{/* Hold the full width image of the holiday */}
			<div className={styles.holidayImageContainer}>
				<Image src={holidayImageURL} alt={`${name} Image`} quality={100} width={375} height={400} className={styles.holidayImage} />
				<div className={styles.holidayImageOverlayContainer}>
					{/* Holiday Name */}
					<h3>/ {name}</h3>
				</div>
			</div>

			<Pill icon={<FlightTakeoffIcon />} text={"Test Pill"} />

			<h3>{holidayTitle}</h3>

			<section className={styles.section}>
				{/* <h1>Holiday Page</h1>
				<p>{nodeId}</p> */}
				<h2>
					{monthFormatted} {dateYear}
				</h2>

				<h4>Attendees:</h4>
				<AttendeesList stringArray={attendees} />
			</section>

			<section className={styles.section}>
				{/* Use the Interweave library to render the HTML content - https://github.com/milesj/interweave/ */}
				<Interweave content={textHtmlContent} />
			</section>
		</Layout>
	);
}
