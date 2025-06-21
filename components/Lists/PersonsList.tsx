import { useQuery } from "@apollo/client";
import { ActionIcon, Anchor, ScrollArea, Table, Text, Tooltip, rem } from "@mantine/core";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { useRouter } from "next/router";
import Constants from "../../constants/constants";
import { GetPeopleListDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import NodeTraversalsS from "../../services/NodeTraversalsS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function PersonsList() {
	const router = useRouter(); // Import the Next router

	// Get the list of people
	const { loading, error, data } = useQuery(GetPeopleListDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetPeopleListDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetPeopleListDocument) GraphQL Error: " + error.message} duration={5} />;
	}
	// LogS.log("PersonsList: person data: ", data);

	// Filter out people with no holidays and then sort by the length of attendedHolidays
	let sortedAndFilteredPeople = data?.people
		.filter((person) => person.attendedHolidays && person.attendedHolidays.length > 0)
		.sort((a, b) => (b.attendedHolidays?.length || 0) - (a.attendedHolidays?.length || 0));

	// Map the sorted and filtered people to add the holiday count
	sortedAndFilteredPeople = sortedAndFilteredPeople?.map((person) => {
		// Return the last holiday for each person
		let lastHoliday = NodeTraversalsS.findHighestSortDateValueHolidayOfPerson(person);
		// Return the mapped item
		return {
			...person,
			holidayCount: person.attendedHolidays?.length || 0,
			lastHoliday: {
				name: `${lastHoliday.name}  (${new Date(parseInt(lastHoliday.dateYear, 10), parseInt(lastHoliday.dateMonth, 10), 1).toLocaleString(undefined, { month: "short" })} ${lastHoliday.dateYear})`,
				nodeId: lastHoliday.nodeId,
			},
		};
	});

	// Get the height of the scrollable area
	const windowHeight = window.innerHeight;
	const scrollHeight = windowHeight - Constants.headerHeight;

	// Map the sorted and filtered people to create the table rows
	const rows = sortedAndFilteredPeople?.map((person: any) => (
		<Table.Tr key={person.name} className={styles.rowHighlight}>
			<Table.Td>
				<Anchor
					component='button'
					size='sm'
					fw={500}
					onClick={() => router.push({ pathname: `/people/${person.nodeId}` })}
					className={styles.leftAlign}>
					{person.name}
				</Anchor>
			</Table.Td>
			<Table.Td>
				<Text fz='md' fw={500}>
					{person.holidayCount}
				</Text>
			</Table.Td>
			<Table.Td>
				<Anchor
					component='button'
					size='sm'
					onClick={() => router.push({ pathname: `/holidays/${person.lastHoliday.nodeId}` })}
					className={styles.leftAlign}>
					{person.lastHoliday.name}
				</Anchor>
			</Table.Td>
			<Table.Td>
				<ActionIcon variant='subtle' color='gray'>
					<ArrowForwardSharpIcon
						style={{ width: rem(16), height: rem(16) }}
						onClick={() => router.push({ pathname: `/people/${person.nodeId}` })}
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
							<Tooltip label='Holiday Count' withArrow>
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
}
