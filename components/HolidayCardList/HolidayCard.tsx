import { Badge, Button, Group, Paper, Text, Title, Tooltip } from "@mantine/core";
import InfoIcon from "@mui/icons-material/Info";
import RoomIcon from "@mui/icons-material/Room";
import styles from "./HolidayCardList.module.css";

// Modified from https: //ui.mantine.dev/category/article-cards/#article-card-image

interface HolidayCardProps {
	holidayName: string;
	holidayTags: string[];
	holidayDate: string;
	holidayImageURL: string;
	clickHoliday: () => void;
	holidayInfoTooltip: any;
}

export default function HolidayCard(props: HolidayCardProps) {
	const { holidayName, holidayTags, holidayDate, holidayImageURL, clickHoliday, holidayInfoTooltip } = props; // Destructure the props

	// Set up the tooltip string
	const tooltipString = JSON.stringify(holidayInfoTooltip, null, 2);
	// console.log("tooltipString: ", tooltipString);

	return (
		// Hold the full Card, image and all
		<Paper shadow='md' p='xl' radius='md' className={styles.card} style={{ backgroundImage: `url(${holidayImageURL})` }}>
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
				<Group className={styles.tagsAndInfoContainer}>
					{holidayTags.map((tag) => (
						<Badge key={tag} className={styles.tag} size='lg' radius='lg'>
							{tag}
						</Badge>
					))}
					<Tooltip label={tooltipString} position='top-end' withArrow transitionProps={{ transition: "pop-bottom-right" }}>
						<InfoIcon className={styles.infoIcon}></InfoIcon>
					</Tooltip>
				</Group>
				<Button variant='white' color='dark' className={styles.button} onClick={clickHoliday}>
					View holiday
				</Button>
			</Group>
		</Paper>
	);
}
