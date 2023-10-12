import { useQuery } from "@apollo/client";
import { Interweave } from "interweave"; // https://github.com/milesj/interweave/
import Image from "next/image";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import Layout from "../../components/Layouts/Layout";
import styles from "../../styles/Home.module.css";
import { Holiday } from "../../types/types";

export default function HolidayPage() {
	const router = useRouter();
	const { node_id } = router.query; // Use the same variable name as the [node_id] file name
	console.log("node_id: ", node_id);

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_HOLIDAY_BY_ID, {
		variables: { node_id }, // Pass the variable to the query
	});

	console.log("holiday data: ", data);

	if (loading) return <p>Loading...</p>;
	if (error)
		return (
			<>
				<p>Error : {error.message}</p>
				<div
					style={{
						backgroundColor: "blue",
						color: "white",
						margin: "3rem auto 0rem auto",
						padding: "0.3rem 1.5rem",
						lineHeight: "0.5",
						borderRadius: "0.5rem",
						cursor: "pointer",
					}}
					onClick={() => router.back()} // Go back to the last visited page
				>
					<h4>Click here to go back</h4>
				</div>
			</>
		);

	// Extract the data into usable variables
	const { name, date_year, date_month, text_html_content, attendees }: Holiday = data.holidays[0];
	console.log("holiday data: ", data);
	console.log("attendees: ", attendees);

	const RandomPictureID = Math.floor(Math.random() * 999) + 1;

	return (
		<Layout NavBarStyle='Transparent'>
			{/* Hold the full width image of the holiday */}
			<div className={styles.holidayImageContainer}>
				<Image
					src={`https://picsum.photos/id/${RandomPictureID}/375/600`}
					alt='Holiday Photo'
					layout='fill'
					objectFit='cover'
					quality={100}
					// width={375}
					// height={400}
					// className={styles.holidayImage}
				/>

				<div className={styles.holidayImageOverlayContainer}>
					{/* Holiday Name */}
					<h3>/ {name}</h3>
					<h4>
						{date_year} {date_month}
					</h4>
				</div>
			</div>

			<section className={styles.section}>
				<h1>Holiday Page</h1>

				<h2 style={{ fontWeight: 600, fontSize: 25 }}>{node_id}</h2>

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
				{/* Use the Interweave library to render the HTML content -
        https://github.com/milesj/interweave/ */}
				<Interweave content={text_html_content} />
			</section>

			<div
				style={{
					backgroundColor: "blue",
					color: "white",
					margin: "3rem auto 0rem auto",
					padding: "0.3rem 1.5rem",
					lineHeight: "0.5",
					borderRadius: "0.5rem",
					cursor: "pointer",
				}}
				onClick={() => router.back()} // Go back to the last visited page
			>
				<h4>Click here to go back</h4>
			</div>
		</Layout>
	);
}
