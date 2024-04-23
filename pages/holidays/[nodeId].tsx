import { useQuery } from "@apollo/client";
import { Badge } from "@mantine/core";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Layout from "../../components/Layout/Layout";
import Loading from "../../components/Loading/Loading";
import Pill from "../../components/Pill/Pill";
import Toast from "../../components/Toast/Toast";
import { GetHolidayByIdDocument, Holiday } from "../../graphql/__generated__/graphql";
import filterTags from "../../services/FilterTagsS";
import LogS from "../../services/LogS";
import withAuth from "../api/auth/withAuth";
import styles from "./Holidays.module.css";

//  Create a function to return a concatenated list of attendees with hyperlinks
function AttendeesList({ stringArray }: { stringArray: string[] | undefined | null }): JSX.Element {
	const router = useRouter(); // Import the Next router

	// Map through the array and create clickable links
	const linkElements = stringArray?.map((name: string, index: number) => (
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

// Custom renderer with custom replace rules
const MyRenderer = ({ children }) => {
	return (
		<Markdown
			remarkPlugins={[remarkGfm]} // Include the GitHub Flavored Markdown plugin
			children={children // Add custom rules for replacing text
				.replace(/> \[!bigback\] Link back to \[\[Personal Home\|Home\]\]/g, "") // Remove "> [!bigback] Link back to [[Personal Home|Home]]"
				.replace(/> \[!back\] Link back to \[\[Travel\]\]/g, "") // Remove "> [!back] Link back to [[Travel]]"
				.replace(/\!\[\[(.*?)\]\]/g, "") // Remove "![[" pattern
				.replace(/\[\[(.*?)\]\]/g, (_, label) => {
					// Replace [[ with <a>
					const slug = label.toLowerCase().replace(/\s+/g, "-");
					return `<a href="/${slug}">${label}</a>`;
				})}
		/>
	);
};

function HolidayPage() {
	const router = useRouter(); // Import the Next router
	const { nodeId } = router.query; // Use the same variable name as the [nodeId] file name
	// LogS.log("nodeId: ", nodeId);

	// Get the list of people
	const { loading, error, data } = useQuery(GetHolidayByIdDocument, {
		// @ts-ignore
		variables: { nodeId }, // Pass the variable to the query
	});
	if (loading) return <Loading BackgroundStyle={"Opaque"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetHolidayByIdDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetHolidayByIdDocument) GraphQL Error: " + error.message} duration={5} />;
	}

	// LogS.log("holiday data: ", data);

	// Extract the data into usable variables
	// @ts-ignore
	const { dateYear, dateMonth, name, coverPhoto, fullText, readableText, attendees, departingAirport, locations, photoAlbum }: Holiday =
		// @ts-ignore
		data.holidays[0];
	LogS.log("holiday data: ", data);
	// LogS.log("attendees: ", attendees);

	// Define the holiday image URL
	// LogS.log("coverPhoto: ", coverPhoto);
	let holidayImageURL = "";
	if (coverPhoto == null || coverPhoto == "" || coverPhoto == "TBC") {
		holidayImageURL = `https://picsum.photos/id/${Math.floor(Math.random() * 999) + 1}/375/600`;
	} else {
		holidayImageURL = coverPhoto;
	}
	// LogS.log("holidayImageURL: ", holidayImageURL);

	// Format the month date
	const monthFormatted = new Date(2000, parseInt(dateMonth) - 1).toLocaleString("default", { month: "long" });

	// Define the holiday tags
	const displayHolidayTags = filterTags(data?.holidays[0]?.tags, "secondaryLevel");

	// Gather the data for the pills for the holiday
	const properties: { [key: string]: { id: number; text: string | string[] | null | undefined; image: ReactElement } } = {
		property1: { id: 1, text: monthFormatted + " " + dateYear, image: <CalendarMonthIcon /> },
		property2: { id: 2, text: locations, image: <LocationOnRoundedIcon /> },
		property3: { id: 3, text: departingAirport, image: <FlightTakeoffIcon /> },
		property4: { id: 4, text: photoAlbum, image: <AddAPhotoIcon /> },
	};
	// LogS.log("properties", properties);

	// Define the pills for the holiday
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

	// LogS.log("fullText", fullText);

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
						priority
					/>
				</div>

				{/* Hold all of the content below the image */}
				<div className={styles.holidayContentContainer}>
					{/* Holiday Name */}
					<h3 className={styles.holidayName}>
						<span className={styles.firstLetter}>/</span>
						<span> {name}</span>
						<span>.</span>
					</h3>

					{/* Hold the pills and tags */}
					<section className={styles.pillsSection}>
						<div className={styles.holidayPills}>
							{/* List the holiday pills */}
							{pills}
						</div>
						<div className={styles.tagPills}>
							{displayHolidayTags.map((tag) => (
								<Badge key={tag} className={styles.tag} size='lg' radius='lg'>
									{tag}
								</Badge>
							))}
						</div>
					</section>

					{/* Hold the attendees list of links */}
					<section className={styles.attendeesSection}>
						{/* List the holiday attendees */}
						<h4>Attendees:</h4>
						<AttendeesList stringArray={attendees} />
					</section>

					{/* Hold the parsed Markdown body text */}
					<section className={styles.textSection}>
						{/* Add a custom react-markdown wrapper around the received text */}
						<MyRenderer>{fullText}</MyRenderer>
					</section>
				</div>
			</div>
		</Layout>
	);
}

export default withAuth(HolidayPage);
