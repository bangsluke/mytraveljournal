import { HolidayDataItem } from "../../types/types";
// import HolidayCard from "./HolidayCard";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./HolidayCardList.module.css";

interface HolidayListProps {
	data: HolidayDataItem[];
}

const HolidayCardList: React.FC<HolidayListProps> = ({ data }) => {
	const router = useRouter(); // Import the Next router
	// console.log("data from HolidayCardList: ", data);

	const holidayElements = data.map((holiday, index) => {
		console.log("holiday.coverPhoto: ", holiday.coverPhoto);
		let holidayImageURL = "";
		if (holiday.coverPhoto == null || holiday.coverPhoto == "TBC") {
			holidayImageURL = `https://picsum.photos/id/${Math.floor(Math.random() * 999) + 1}/375/600`;
		} else {
			holidayImageURL = holiday.coverPhoto;
		}
		console.log("holidayImageURL: ", holidayImageURL);

		return (
			<div
				key={index}
				onClick={() => {
					router.push({ pathname: "/holidays/" + holiday.nodeId });
				}}
				className={styles.holidayCard}>
				<Image src={holidayImageURL} alt='Holiday Image' width={300} height={300} />
				{/* <img src={holiday.coverPhoto} className='holidayCard-image' alt='Experience' /> */}
				<div className='holidayCard-details'>
					<div className='holidayCard-details-top-row'>
						{/* <RoomIcon className='holidayCard-icon' /> */}
						<h3>{holiday.name}</h3>
						<a href='{props.experience.googleMapsUrl}'>
							{/* <DirectionsIcon className='directions-icon' /> */}
							<p className='directions-text'>View on Google Maps</p>
						</a>
					</div>
					{/* <h2>{title}</h2> */}
					<h2>{holiday.name}</h2>
					{/* {subtitle ? <h3>{subtitle}</h3> : null} */}
					{holiday.name ? <h3>{holiday.name}</h3> : null}
					<p className='holidayCard-dates'>
						{holiday.dateMonth} - {holiday.dateYear}
					</p>
					<p>{holiday.nodeId}</p>
					{/* <div className='holidayCard-description'>{parse(holiday.textHtmlContent)}</div> */}
				</div>

				{/* <h2>{holiday.name}</h2> */}
				{/* <strong>{item.filename}</strong> */}
				{/* <p>Year: {holiday.dateYear}</p> */}
				{/* <p>Month: {holiday.dateMonth}</p> */}
				{/* <p>Node ID: {holiday.nodeId}</p> */}
				{/* <div dangerouslySetInnerHTML={{ __html: item.content }} /> */}
			</div>
		);
	});

	return (
		// TODO: Once the holiday data is better defined, update this to have a filter for stuff like dates
		<div className={styles.holidayCardList}>{holidayElements}</div>
	);
};

export default HolidayCardList;
