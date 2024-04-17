import { Button, Paper, Text, Title, Tooltip } from "@mantine/core";
import InfoIcon from "@mui/icons-material/Info";
import RoomIcon from "@mui/icons-material/Room";
import styles from "./HolidayCardList.module.css";

// Modified from https: //ui.mantine.dev/category/article-cards/#article-card-image

interface HolidayCardProps {
	holidayName: string;
	holidayDate: string;
	holidayImageURL: string;
	clickHoliday: () => void;
	holidayInfoTooltip: any;
}

export default function HolidayCard(props: HolidayCardProps) {
	const { holidayName, holidayDate, holidayImageURL, clickHoliday, holidayInfoTooltip } = props; // Destructure the props

	// Set up the tooltip string
	const tooltipString = JSON.stringify(holidayInfoTooltip, null, 2);
	// console.log("tooltipString: ", tooltipString);

	return (
		<Paper shadow='md' p='xl' radius='md' className={styles.card} style={{ backgroundImage: `url(${holidayImageURL})` }}>
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
			<Tooltip label={tooltipString} position='top-end' withArrow transitionProps={{ transition: "pop-bottom-right" }}>
				<InfoIcon className={styles.infoIcon}></InfoIcon>
			</Tooltip>
			<Button variant='white' color='dark' className={styles.button} onClick={clickHoliday}>
				View holiday
			</Button>
		</Paper>
	);
}
