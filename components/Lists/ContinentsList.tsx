import { useQuery } from "@apollo/client";
import { ActionIcon, Anchor, ScrollArea, Table, Text, Tooltip, rem } from "@mantine/core";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import InfoIcon from "@mui/icons-material/Info";
import { useRouter } from "next/router";
import Constants from "../../constants/constants";
import { GetContinentsListDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import NodeTraversalsS from "../../services/NodeTraversalsS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function ContinentsList() {
	const router = useRouter(); // Import the Next router

	// Get the list of continents
	const { loading, error, data } = useQuery(GetContinentsListDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetContinentsListDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetContinentsListDocument) GraphQL Error: " + error.message} duration={5} />;
	}
	// LogS.log("ContinentsList: continents data: ", data);

	// Filter out continents not visited (ones without a linkedHolidays array connected to any placesLocatedIn)
	const filterContinentsWithLinkedHolidays = (continents: any) => {
		return continents.filter((continent: any) => {
			return continent.placesLocatedIn.some((location: any) => {
				return location.placesLocatedIn.some((location2: any) => {
					// Need to check down two levels as a holiday could be connected to a City which is connected to a Country and then the Continent
					return location2.linkedHolidays.length > 0;
				});
			});
		});
	};
	const filteredContinents = filterContinentsWithLinkedHolidays(data?.continents);
	// LogS.log("ContinentsList: filteredContinents data: ", filteredContinents);

	// Re-map the data into a new array with the last holiday and unique holiday count for each continent
	const getContinentDataWithLastHolidayAndUniqueHolidayCount = (continents: any) => {
		return continents.map((continent: any) => {
			// Return the last holiday for each continent
			let lastHoliday: any = NodeTraversalsS.findHighestSortDateValueHolidayOfLocation(continent);
			// Return the mapped item
			return {
				__typename: "Continent",
				name: continent.name,
				nodeId: continent.nodeId,
				lastHoliday: {
					nodeId: lastHoliday.nodeId,
					name: `${lastHoliday.name}  (${new Date(parseInt(lastHoliday.dateYear, 10), parseInt(lastHoliday.dateMonth, 10), 1).toLocaleString(undefined, { month: "short" })} ${lastHoliday.dateYear})`,
					sortDateValue: lastHoliday.sortDateValue,
				},
				uniqueHolidayCount: NodeTraversalsS.findHolidayCountOfLocation(continent),
			};
		});
	};
	const filteredContinentsWithLastHoliday = getContinentDataWithLastHolidayAndUniqueHolidayCount(filteredContinents);
	// LogS.log("ContinentList: filteredContinentsWithLastHoliday data: ", filteredContinentsWithLastHoliday);

	// Finally, sort the continents by the number of unique holidays
	let sortedAndFilteredContinentsWithLastHoliday: any = filteredContinentsWithLastHoliday.sort(
		(a: any, b: any) => b.uniqueHolidayCount - a.uniqueHolidayCount,
	);

	// Define the text for the information icon
	const infoText = `Total Database Continent Count: ${data?.continents.length}, Visited Continents Count: ${sortedAndFilteredContinentsWithLastHoliday.length}`;

	// Get the height of the scrollable area
	const windowHeight = window.innerHeight;
	const scrollHeight = windowHeight - Constants.headerHeight;

	// Map the sorted and filtered continents to create the table rows
	const rows = sortedAndFilteredContinentsWithLastHoliday?.map((continent: any) => (
		<Table.Tr key={continent.nodeId} className={styles.rowHighlight}>
			<Table.Td>
				<Anchor
					component='button'
					size='sm'
					fw={500}
					onClick={() => router.push({ pathname: `/continents/${continent.nodeId}` })}
					className={styles.leftAlign}>
					{continent.name}
				</Anchor>
			</Table.Td>
			<Table.Td>
				<Text fz='md' fw={500}>
					{continent.uniqueHolidayCount}
				</Text>
			</Table.Td>
			<Table.Td>
				<Anchor
					component='button'
					size='sm'
					onClick={() => router.push({ pathname: `/holidays/${continent.lastHoliday.nodeId}` })}
					className={styles.leftAlign}>
					{continent.lastHoliday.name}
				</Anchor>
			</Table.Td>
			<Table.Td>
				<ActionIcon variant='subtle' color='gray'>
					<ArrowForwardSharpIcon
						style={{ width: rem(16), height: rem(16) }}
						onClick={() => router.push({ pathname: `/continents/${continent.nodeId}` })}
					/>
				</ActionIcon>
			</Table.Td>
		</Table.Tr>
	));

	return (
		<ScrollArea h={scrollHeight} className={styles.dataList}>
			<Tooltip label={infoText}>
				<InfoIcon className={styles.infoIcon} />
			</Tooltip>
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

	// // Filter out continents not visited
	// const sortedAndFilteredContinents: any = data?.continents;
	// // TODO: Order continents by number of times visited

	// return (
	// 	<div className={styles.dataList}>
	// 		<ul>
	// 			{sortedAndFilteredContinents.map(({ name, nodeId }: Continent) => (
	// 				<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/continents/${nodeId}` })}>
	// 					<h4>{name}</h4>
	// 				</li>
	// 			))}
	// 		</ul>
	// 	</div>
	// );
}
