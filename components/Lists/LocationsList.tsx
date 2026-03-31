import { useQuery } from "@apollo/client";
import { ActionIcon, Anchor, Table, Text, Tooltip, rem } from "@mantine/core";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { useRouter } from "next/router";
import { GetLocationsListDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import NodeTraversalsS from "../../services/NodeTraversalsS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function LocationsList() {
	const router = useRouter();

	const { loading, error, data } = useQuery(GetLocationsListDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		LogS.error("useQuery(GetLocationsListDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetLocationsListDocument) GraphQL Error: " + error.message} duration={5} />;
	}

	// @ts-ignore
	const locations = Object.values(data).flatMap((item) => item);
	const flattenedData = { locations };

	const filteredAndSortedLocationsData = Object.values(flattenedData)
		.flatMap((item) => item)
		// @ts-ignore
		.filter((item) => item.linkedHolidays?.length > 0)
		// @ts-ignore
		.sort(
			(a, b) =>
				NodeTraversalsS.findHolidayCountOfLocation(b as any) - NodeTraversalsS.findHolidayCountOfLocation(a as any),
		);

	const updatedFilteredAndSortedLocationsData = filteredAndSortedLocationsData?.map((location) => {
		let lastHoliday: any = NodeTraversalsS.findHighestSortDateValueHolidayOfLocation(location);
		return {
			// @ts-ignore
			...location,
			uniqueHolidayCount: NodeTraversalsS.findHolidayCountOfLocation(location),
			lastHoliday: {
				name: `${lastHoliday.name}  (${new Date(parseInt(lastHoliday.dateYear, 10), parseInt(lastHoliday.dateMonth, 10), 1).toLocaleString(undefined, { month: "short" })} ${lastHoliday.dateYear})`,
				nodeId: lastHoliday.nodeId,
			},
			// @ts-ignore
			clickedLinkPath: `/locations/${location.nodeId}`,
		};
	});

	const rows = updatedFilteredAndSortedLocationsData?.map((location: any) => (
		<Table.Tr key={location.nodeId} className={styles.rowHighlight}>
			<Table.Td className={styles.locationsTypeCol}>
				<Text fw={500} className={styles.locationsTypeText}>
					{location.__typename}
				</Text>
			</Table.Td>
			<Table.Td className={styles.locationsNameCol}>
				<Anchor
					component='button'
					size='sm'
					fw={500}
					onClick={() => router.push({ pathname: location.clickedLinkPath })}
					className={`${styles.leftAlign} ${styles.locationsNameAnchor}`}>
					{location.name}
				</Anchor>
			</Table.Td>
			<Table.Td>
				<Text fz='md' fw={500}>
					{location.uniqueHolidayCount}
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
		<div className={styles.dataList}>
			<Table.ScrollContainer minWidth={300} type='native'>
				<Table verticalSpacing='sm'>
					<Table.Thead>
						<Table.Tr>
							<Table.Th className={styles.locationsTypeCol}>Type</Table.Th>
							<Table.Th className={styles.locationsNameCol}>Name</Table.Th>
							<Tooltip label='Unique holidays at this location' withArrow>
								<Table.Th>Count</Table.Th>
							</Tooltip>
							<Table.Th>Last Holiday</Table.Th>
							<Table.Th />
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>{rows}</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</div>
	);
}
