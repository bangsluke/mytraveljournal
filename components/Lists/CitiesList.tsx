import { useQuery } from "@apollo/client";
import { ActionIcon, Anchor, ScrollArea, Table, Text, Tooltip, rem } from "@mantine/core";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { useRouter } from "next/router";
import Constants from "../../constants/constants";
import { GetCitiesListDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function CitiesList() {
	const router = useRouter(); // Import the Next router

	// Get the list of cities
	const { loading, error, data } = useQuery(GetCitiesListDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetCitiesListDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetCitiesListDocument) GraphQL Error: " + error.message} duration={5} />;
	}
	LogS.log("CitiesList: cities data: ", data);

	// Filter out cities not visited (ones without a linkedHolidays array) and then sort by the length of attendedHolidays
	let sortedAndFilteredCities = data?.cities
		.filter((city) => city.linkedHolidays && city.linkedHolidays.length > 0)
		.sort((a, b) => b.linkedHolidays.length - a.linkedHolidays.length);

	// Map the sorted and filtered cities to add the holiday count
	sortedAndFilteredCities = sortedAndFilteredCities?.map((city) => {
		let lastHoliday = city.linkedHolidays.reduce((prev: any, current: any) => {
			return prev.sortDateValue > current.sortDateValue ? prev : current;
		});

		return {
			...city,
			holidayCount: city.linkedHolidays.length,
			lastHoliday: {
				name: `${lastHoliday.name}  (${new Date(parseInt(lastHoliday.dateYear, 10), parseInt(lastHoliday.dateMonth, 10), 1).toLocaleString(undefined, { month: "short" })} ${lastHoliday.dateYear})`,
				nodeId: lastHoliday.nodeId,
			},
		};
	});
	LogS.log("CitiesList: Sorted and filtered city data: ", sortedAndFilteredCities);

	// Get the height of the scrollable area
	const windowHeight = window.innerHeight;
	const scrollHeight = windowHeight - Constants.headerHeight;

	// Map the sorted and filtered cities to create the table rows
	const rows = sortedAndFilteredCities?.map((city: any) => (
		<Table.Tr key={city.nodeId} className={styles.rowHighlight}>
			<Table.Td>
				<Anchor
					component='button'
					size='sm'
					fw={500}
					onClick={() => router.push({ pathname: `/cities/${city.nodeId}` })}
					className={styles.leftAlign}>
					{city.name}
				</Anchor>
			</Table.Td>
			<Table.Td>
				<Text fz='md' fw={500}>
					{city.visitedCount}
				</Text>
			</Table.Td>
			<Table.Td>
				<Anchor
					component='button'
					size='sm'
					onClick={() => router.push({ pathname: `/holidays/${city.lastHoliday.nodeId}` })}
					className={styles.leftAlign}>
					{city.lastHoliday.name}
				</Anchor>
			</Table.Td>
			<Table.Td>
				<ActionIcon variant='subtle' color='gray'>
					<ArrowForwardSharpIcon
						style={{ width: rem(16), height: rem(16) }}
						onClick={() => router.push({ pathname: `/cities/${city.nodeId}` })}
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
							<Tooltip label='Visited Count' withArrow>
								<Table.Th>Count</Table.Th>
							</Tooltip>
							<Table.Th>Last Holiday</Table.Th>
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
	// 			{sortedAndFilteredCities.map(({ name, nodeId }: City) => (
	// 				<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/cities/${nodeId}` })}>
	// 					<h4>{name}</h4>
	// 				</li>
	// 			))}
	// 		</ul>
	// 	</div>
	// );
}
