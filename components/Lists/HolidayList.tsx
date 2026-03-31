import { useQuery } from "@apollo/client";
import { ActionIcon, Anchor, Table, Text, rem } from "@mantine/core";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";
import { GetHolidaysListDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function HolidayList() {
	const router = useRouter();
	const isMobileList = useMediaQuery("(max-width: 767px)");

	const { loading, error, data } = useQuery(GetHolidaysListDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		LogS.error("useQuery(GetHolidaysListDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetHolidaysListDocument) GraphQL Error: " + error.message} duration={5} />;
	}

	//@ts-ignore
	const sortedHolidays: any = [...data?.holidays].sort((a: any, b: any) => b.sortDateValue.localeCompare(a.sortDateValue));

	const attendeesHeader = isMobileList ? "Att." : "Attendees";
	const locationsHeader = isMobileList ? "Loc." : "Locations";

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
					{holiday.attendees?.length || 0}
				</Text>
			</Table.Td>
			<Table.Td>
				<Text fz='md' fw={500} className={styles.centerAlign}>
					{holiday.locations?.length || 0}
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
		<div className={styles.dataList}>
			<Table.ScrollContainer minWidth={300} type='native'>
				<Table verticalSpacing='sm'>
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Name</Table.Th>
							<Table.Th>Date</Table.Th>
							<Table.Th>{attendeesHeader}</Table.Th>
							<Table.Th>{locationsHeader}</Table.Th>
							<Table.Th />
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>{rows}</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</div>
	);
}
