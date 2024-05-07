import { useQuery } from "@apollo/client";
import { ActionIcon, Anchor, ScrollArea, Table, Text, rem } from "@mantine/core";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { useRouter } from "next/router";
import Constants from "../../constants/constants";
import { GetLocationsListDocument } from "../../graphql/__generated__/graphql";
import ReturnTypeIcon from "../../services/IconS";
import LogS from "../../services/LogS";
import NodeTraversalsS from "../../services/NodeTraversalsS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function LocationsList() {
	const router = useRouter(); // Import the Next router

	// Get the list of locations
	const { loading, error, data } = useQuery(GetLocationsListDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetLocationsListDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetLocationsListDocument) GraphQL Error: " + error.message} duration={5} />;
	}
	// LogS.log("LocationsList: locations data: ", data);

	// Flatten the returned data so that all location objects are at the top level and not nested under node types
	// @ts-ignore
	const locations = Object.values(data).flatMap((item) => item);
	const flattenedData = {
		locations,
	};
	// LogS.log("LocationsList: flattenedData: ", flattenedData);

	// Filter out locations with no holidays and then sort by the length of linkedHolidays
	const filteredAndSortedLocationsData = Object.values(flattenedData)
		.flatMap((item) => item)
		// @ts-ignore
		.filter((item) => item.linkedHolidays.length > 0)
		// @ts-ignore
		.sort((a, b) => b.linkedHolidays.length - a.linkedHolidays.length);
	LogS.log("LocationsList: filteredAndSortedLocationsData: ", filteredAndSortedLocationsData);

	// Map the sorted and filtered locations to add the holiday count and other properties such as the clicked link path
	const updatedFilteredAndSortedLocationsData = filteredAndSortedLocationsData?.map((location) => {
		// Return the last holiday for each location
		let lastHoliday: any = NodeTraversalsS.findHighestSortDateValueHolidayOfLocation(location);
		// Return the mapped item
		return {
			// @ts-ignore
			...location,
			// @ts-ignore
			holidayCount: location.linkedHolidays.length,
			lastHoliday: {
				name: `${lastHoliday.name}  (${new Date(parseInt(lastHoliday.dateYear, 10), parseInt(lastHoliday.dateMonth, 10), 1).toLocaleString(undefined, { month: "short" })} ${lastHoliday.dateYear})`,
				nodeId: lastHoliday.nodeId,
			},
			// @ts-ignore
			clickedLinkPath: `/locations/${location.nodeId}`,
			// @ts-ignore
			typeIcon: ReturnTypeIcon(location.__typename, "medium"),
		};
	});
	// LogS.log("LocationsList: updatedFilteredAndSortedLocationsData: ", updatedFilteredAndSortedLocationsData);

	// Get the height of the scrollable area
	const windowHeight = window.innerHeight;
	const scrollHeight = windowHeight - Constants.headerHeight;

	// Map the sorted and filtered locations to create the table rows
	const rows = updatedFilteredAndSortedLocationsData?.map((location: any) => (
		<Table.Tr key={location.nodeId} className={styles.rowHighlight}>
			<Table.Td>
				<Text fz='md' fw={500}>
					{location.typeIcon}
				</Text>
			</Table.Td>
			<Table.Td>
				<Text fz='md' fw={500}>
					{location.__typename}
				</Text>
			</Table.Td>
			<Table.Td>
				<Anchor
					component='button'
					size='sm'
					fw={500}
					onClick={() => router.push({ pathname: location.clickedLinkPath })}
					className={styles.leftAlign}>
					{location.name}
				</Anchor>
			</Table.Td>
			<Table.Td>
				<Text fz='md' fw={500}>
					{location.holidayCount}
				</Text>
			</Table.Td>
			<Table.Td>
				<Anchor
					component='button'
					size='sm'
					onClick={() => router.push({ pathname: `/holidays/${location.lastHoliday.nodeId}` })}
					className={styles.leftAlign}>
					{location.lastHoliday.name}
				</Anchor>
			</Table.Td>
			<Table.Td>
				<ActionIcon variant='subtle' color='gray'>
					<ArrowForwardSharpIcon
						style={{ width: rem(16), height: rem(16) }}
						onClick={() => router.push({ pathname: location.clickedLinkPath })}
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
							<Table.Th></Table.Th>
							<Table.Th>Type</Table.Th>
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
	// 			{filteredAndSortedLocationsData.map(({ name, nodeId }: Town) => (
	// 				<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/towns/${nodeId}` })}>
	// 					<h4>{name}</h4>
	// 				</li>
	// 			))}
	// 		</ul>
	// 	</div>
	// );
}
