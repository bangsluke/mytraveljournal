import { useQuery } from "@apollo/client";
import { ActionIcon, Anchor, Table, Text, rem } from "@mantine/core";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { useRouter } from "next/router";
import { GetPeopleListDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
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
		LogS.error("useGetPeopleList GraphQL Error: ", error.message);
		return <Toast message={"useGetPeopleList GraphQL Error: " + error.message} duration={5} />;
	}

	console.log("Initial data", data);

	// Filter out people with no holidays and then sort by the length of attendedHolidays
	let sortedAndFilteredPeople = data?.people
		.filter((person) => person.attendedHolidays && person.attendedHolidays.length > 0)
		.sort((a, b) => b.attendedHolidays.length - a.attendedHolidays.length);

	// Map the sorted and filtered people to add the holiday count
	sortedAndFilteredPeople = sortedAndFilteredPeople?.map((person) => {
		let lastHoliday = person.attendedHolidays.reduce((prev, current) => {
			return prev.sortDateValue > current.sortDateValue ? prev : current;
		});

		return {
			...person,
			holidayCount: person.attendedHolidays.length,
			lastHoliday: {
				name: `${lastHoliday.name}  (${new Date(parseInt(lastHoliday.dateYear, 10), parseInt(lastHoliday.dateMonth, 10), 1).toLocaleString(undefined, { month: "short" })} ${lastHoliday.dateYear})`,
				nodeId: lastHoliday.nodeId,
			},
		};
	});

	LogS.log("Sorted and filtered person data: ", sortedAndFilteredPeople);

	const rows = sortedAndFilteredPeople?.map((person: any) => (
		<Table.Tr key={person.name} className={styles.rowHighlight}>
			<Table.Td>
				<Anchor component='button' size='sm' fw={500} onClick={() => router.push({ pathname: `/people/${person.nodeId}` })}>
					{person.name}
				</Anchor>
			</Table.Td>
			<Table.Td>
				<Text fz='md' fw={500} onClick={() => router.push({ pathname: `/people/${person.nodeId}` })}>
					{person.holidayCount}
				</Text>
			</Table.Td>
			<Table.Td>
				<Anchor component='button' size='sm' onClick={() => router.push({ pathname: `/holidays/${person.lastHoliday.nodeId}` })}>
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
		<Table.ScrollContainer minWidth={300}>
			<Table verticalSpacing='sm'>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Name</Table.Th>
						<Table.Th>Holiday Count</Table.Th>
						<Table.Th>Last Holiday</Table.Th>
						<Table.Th />
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>{rows}</Table.Tbody>
			</Table>
		</Table.ScrollContainer>
	);
}
