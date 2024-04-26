import { useQuery } from "@apollo/client";
import { ActionIcon, Anchor, ScrollArea, Table, Text, rem } from "@mantine/core";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { useRouter } from "next/router";
import Constants from "../../constants/constants";
import { GetHolidaysListDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function HolidayList() {
	const router = useRouter(); // Import the Next router

	// Get the list of holidays
	const { loading, error, data } = useQuery(GetHolidaysListDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetHolidaysListDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetHolidaysListDocument) GraphQL Error: " + error.message} duration={5} />;
	}
	LogS.log("HolidayList: holiday data: ", data);

	// Sort holidays by sortDateValue
	//@ts-ignore
	const sortedHolidays: any = [...data?.holidays].sort((a: any, b: any) => b.sortDateValue.localeCompare(a.sortDateValue));

	LogS.log("HolidayList: Sorted holiday data: ", sortedHolidays);

	// Get the height of the scrollable area
	const windowHeight = window.innerHeight;
	const scrollHeight = windowHeight - Constants.headerHeight;

	// Map the sorted and filtered holidays to create the table rows
	const rows = sortedHolidays?.map((holiday: any) => (
		<Table.Tr key={holiday.nodeId} className={styles.rowHighlight}>
			<Table.Td>
				<Anchor
					component='button'
					size='sm'
					fw={500}
					onClick={() => router.push({ pathname: `/holidays/${holiday.nodeId}` })}
					className={styles.leftAlign}>
					{holiday.name}
				</Anchor>
			</Table.Td>
			<Table.Td>
				<Text fz='md' fw={500}>
					{new Date(parseInt(holiday.dateYear, 10), parseInt(holiday.dateMonth, 10), 1).toLocaleString(undefined, { month: "short" })}{" "}
					{holiday.dateYear}
				</Text>
			</Table.Td>
			<Table.Td>
				<Text fz='md' fw={500} className={styles.centerAlign}>
					{holiday.attendees.length}
				</Text>
			</Table.Td>
			<Table.Td>
				<Text fz='md' fw={500} className={styles.centerAlign}>
					{holiday.locations.length}
				</Text>
			</Table.Td>
			<Table.Td>
				<ActionIcon variant='subtle' color='gray'>
					<ArrowForwardSharpIcon
						style={{ width: rem(16), height: rem(16) }}
						onClick={() => router.push({ pathname: `/holidays/${holiday.nodeId}` })}
					/>
				</ActionIcon>
			</Table.Td>
		</Table.Tr>
	));

	return (
		<ScrollArea h={scrollHeight} className={styles.dataList}>
			<Table.ScrollContainer minWidth={300}>
				<Table verticalSpacing='sm'>
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Name</Table.Th>
							<Table.Th>Date</Table.Th>
							<Table.Th>Attendees</Table.Th>
							<Table.Th>Locations</Table.Th>
							<Table.Th />
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>{rows}</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</ScrollArea>
	);

	// return (
	// 	<div className={styles.dataList}>
	// 		<ul>
	// 			{sortedHolidays.map(({ name, dateYear, dateMonth, nodeId }: Holiday) => (
	// 				<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/holidays/${nodeId}` })}>
	// 					<h4>{name}</h4>
	// 					<h5>
	// 						{dateYear} {dateMonth}
	// 					</h5>
	// 				</li>
	// 			))}
	// 		</ul>
	// 	</div>
	// );
}
