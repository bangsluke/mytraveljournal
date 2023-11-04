import { useQuery } from "@apollo/client";
import { Interweave } from "interweave"; // https://github.com/milesj/interweave/
import Image from "next/image";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import Layout from "../../components/Layouts/Layout";
import LogS from "../../services/LogS";
import { Holiday } from "../../types/types";
import styles from "./Holidays.module.css";

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
	const { name, dateYear, dateMonth, textHtmlContent, attendees }: Holiday = data.holidays[0];
	LogS.log("holiday data: ", data);
	LogS.log("attendees: ", attendees);

	const RandomPictureID = Math.floor(Math.random() * 999) + 1;

	return (
		<Layout NavbarStyle='Transparent'>
			{/* Hold the full width image of the holiday */}
			<div className={styles.holidayImageContainer}>
				<Image
					src={`https://picsum.photos/id/${RandomPictureID}/375/600`}
					alt='Holiday Photo'
					quality={100}
					width={375}
					height={400}
					className={styles.holidayImage}
				/>

				<div className={styles.holidayImageOverlayContainer}>
					{/* Holiday Name */}
					<h3>/ {name}</h3>
					<h4>
						{dateYear} {dateMonth}
					</h4>
				</div>
			</div>

			<section className={styles.section}>
				<h1>Holiday Page</h1>

				<p>{nodeId}</p>

				<h4>Attendees:</h4>

				<ul>
					{attendees.map((name, index) => (
						<li key={name + index} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/persons/${name}` })}>
							<h4>{name}</h4>
						</li>
					))}
				</ul>
			</section>

			<section>
				{/* Use the Interweave library to render the HTML content - https://github.com/milesj/interweave/ */}
				<Interweave content={textHtmlContent} />
			</section>
		</Layout>
	);
}
