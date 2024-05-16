import { Badge, Button, Group, Paper, Text, Title } from "@mantine/core";
import RoomIcon from "@mui/icons-material/Room";
import { useEffect, useState } from "react";
import GetImageS from "../../services/GetImageS";
import styles from "./HolidayCardList.module.css";

// Modified from https: //ui.mantine.dev/category/article-cards/#article-card-image

interface HolidayCardProps {
	holidayName: string;
	holidayTags: string[];
	holidayDate: string;
	holidayLocation: string;
	holidayImageURL: string;
	clickHoliday: () => void;
}

export default function HolidayCard(props: HolidayCardProps) {
	const { holidayName, holidayTags, holidayDate, holidayLocation, holidayImageURL, clickHoliday } = props; // Destructure the props

	const [photo, setPhoto] = useState(holidayImageURL);

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const image = await GetImageS.getImageFromSearch(holidayLocation);
				setPhoto(image.urls.small); // Set the resolved image data
			} catch (error) {
				try {
					const image = await GetImageS.getRandomImage();
					setPhoto(image.urls.small); // Set the resolved image data
				} catch (error) {
					console.error("Error fetching image:", error);
				}
			}
		};

		if (holidayImageURL == null || holidayImageURL == "" || holidayImageURL == "TBC") {
			fetchImage(); // Call the function once when the component mounts
		}
	}, []); // Empty dependency array ensures it runs only once

	return (
		// Hold the full Card, image and all
		<Paper shadow='md' p='xl' radius='md' className={styles.card} style={{ backgroundImage: `url(${photo})` }}>
			{/* Hold the top title and details */}
			<div className={styles.textContent}>
				<Text className={styles.date} size='xs'>
					{holidayDate}
				</Text>
				<div className={styles.titleContainer}>
					<RoomIcon className={styles.markerIcon} />
					<Title order={3} className={styles.title}>
						{holidayName}
					</Title>
				</div>
			</div>
			{/* Hold the bottom tags and button */}
			<Group className={styles.cardBottomItemsContainer}>
				<Group className={styles.tagsContainer}>
					{holidayTags.map((tag) => (
						<Badge key={tag} className={styles.tag} size='lg' radius='lg'>
							{tag}
						</Badge>
					))}
				</Group>
				<Button variant='white' color='dark' className={styles.button} onClick={clickHoliday}>
					View holiday
				</Button>
			</Group>
		</Paper>
	);
}
