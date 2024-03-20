import { useQuery } from "@apollo/client";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Interweave } from "interweave"; // https://github.com/milesj/interweave/
import { Session } from "next-auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Layout from "../../components/Layout/Layout";
import Loading from "../../components/Loading/Loading";
import Pill from "../../components/Pill/Pill";
import GraphQLQueriesS from "../../graphql/GraphQLQueriesS";
import withAuth from "../../lib/withAuth";
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

function HolidayPage({ session }: { session: Session }) {
	const router = useRouter(); // Import the Next router
	const { nodeId } = router.query; // Use the same variable name as the [nodeId] file name
	LogS.log("nodeId: ", nodeId);

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_HOLIDAY_BY_ID, {
		variables: { nodeId }, // Pass the variable to the query
	});

	LogS.log("holiday data: ", data);

	if (loading) return <Loading BackgroundStyle={"Opaque"} />;
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
	const {
		dateYear,
		dateMonth,
		name,
		holidayTitle,
		coverPhoto,
		textHtmlContent,
		attendees,
		departingAirport,
		locations,
		photoAlbum,
	}: Holiday = data.holidays[0];
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

	// Create the visible pills for the holiday
	const properties: { [key: string]: { id: number; text: string | string[]; image: ReactElement } } = {
		property1: { id: 1, text: monthFormatted + " " + dateYear, image: <CalendarMonthIcon /> },
		property2: { id: 2, text: locations, image: <LocationOnRoundedIcon /> },
		property3: { id: 3, text: departingAirport, image: <FlightTakeoffIcon /> },
		property4: { id: 4, text: photoAlbum, image: <AddAPhotoIcon /> },
	};
	LogS.log("properties", properties);
	const pills = Object.keys(properties).map((property) => {
		const { text, image, id } = properties[property];
		// Loop through the array if text is an array
		if (Array.isArray(text)) {
			return text.map((element, index) => <Pill key={id + index} icon={image} text={element} />);
		}
		// Return nothing if text is null or empty or too long
		if (text == null || text == "" || text == "TBC" || text == "n/a" || text.length >= 20) {
			return null;
		}
		if (text && image) {
			return <Pill key={id} icon={image} text={text} />;
		}
	});

	return (
		<Layout NavbarStyle='Transparent'>
			{/* Hold all of the content for the holiday page */}
			<div className={styles.holidayPageContainer}>
				{/* Hold the full width image of the holiday */}
				<div className={styles.holidayImageContainer}>
					<Image
						src={holidayImageURL}
						unoptimized
						alt={`${name} Image`}
						quality={100}
						width={375}
						height={400}
						className={styles.holidayImage}
					/>
				</div>
				{/* Holiday Name */}
				<h3 className={styles.holidayName}>
					<span>/</span>
					<span> {name}</span>
					<span>.</span>
				</h3>

				<section className={styles.pillsSection}>
					<div className={styles.holidayPills}>
						{/* List the holiday pills */}
						{pills}
					</div>
				</section>

				<section className={styles.attendeesSection}>
					{/* List the holiday attendees */}
					<h4>Attendees:</h4>
					<AttendeesList stringArray={attendees} />
				</section>

				<section className={styles.section}>
					{/* Use the Interweave library to render the HTML content - https://github.com/milesj/interweave/ */}
					<Interweave content={textHtmlContent} />
				</section>
			</div>
		</Layout>
	);
}

export default withAuth(HolidayPage);
