import { useQuery } from "@apollo/client";
import { ActionIcon, Anchor, ScrollArea, Table, Text, Tooltip, rem } from "@mantine/core";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import InfoIcon from "@mui/icons-material/Info";
import { useRouter } from "next/router";
import Constants from "../../constants/constants";
import { GetCountriesListDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import NodeTraversalsS from "../../services/NodeTraversalsS";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function CountryList() {
	const router = useRouter(); // Import the Next router

	// Get the list of countries
	const { loading, error, data } = useQuery(GetCountriesListDocument);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("useQuery(GetCountriesListDocument) GraphQL Error: ", error.message);
		return <Toast message={"useQuery(GetCountriesListDocument) GraphQL Error: " + error.message} duration={5} />;
	}
	LogS.log("CountriesList: countries data: ", data);

	// Filter out countries not visited (ones without a linkedHolidays array connected to any placesLocatedIn)
	const filterCountriesWithLinkedHolidays = (countries: any) => {
		return countries.filter((country: any) => {
			return country.placesLocatedIn?.some((place: any) => {
				return place.linkedHolidays?.length > 0;
			});
		});
	};
	const filteredCountries = filterCountriesWithLinkedHolidays(data?.countries);
	// LogS.log("CountriesList: filteredCountries data: ", filteredCountries);

	// Re-map the data into a new array with the last holiday and unique holiday count for each country
	const getCountryDataWithLastHolidayAndUniqueHolidayCount = (countries: any) => {
		return countries.map((country: any) => {
			// Return the last holiday for each country
			let lastHoliday: any = NodeTraversalsS.findHighestSortDateValueHolidayOfLocation(country);
			// Return the mapped item
			return {
				__typename: "Country",
				name: country.name,
				nodeId: country.nodeId,
				lastHoliday: {
					nodeId: lastHoliday.nodeId,
					name: `${lastHoliday.name}  (${new Date(parseInt(lastHoliday.dateYear, 10), parseInt(lastHoliday.dateMonth, 10), 1).toLocaleString(undefined, { month: "short" })} ${lastHoliday.dateYear})`,
					sortDateValue: lastHoliday.sortDateValue,
				},
				uniqueHolidayCount: NodeTraversalsS.findHolidayCountOfLocation(country),
			};
		});
	};
	const filteredCountriesWithLastHoliday = getCountryDataWithLastHolidayAndUniqueHolidayCount(filteredCountries);
	// LogS.log("CountriesList: filteredCountriesWithLastHoliday data: ", filteredCountriesWithLastHoliday);

	// Finally, sort the countries by the number of unique holidays
	let sortedAndFilteredCountriesWithLastHoliday: any = filteredCountriesWithLastHoliday.sort(
		(a: any, b: any) => b.uniqueHolidayCount - a.uniqueHolidayCount,
	);

	// Define the text for the information icon
	const infoText = `Total Database Country Count: ${data?.countries.length}, Visited Countries Count: ${sortedAndFilteredCountriesWithLastHoliday.length}`;

	// Get the height of the scrollable area
	const windowHeight = window.innerHeight;
	const scrollHeight = windowHeight - Constants.headerHeight;

	// Map the sorted and filtered countries to create the table rows
	const rows = sortedAndFilteredCountriesWithLastHoliday?.map((country: any) => (
		<Table.Tr key={country.nodeId} className={styles.rowHighlight}>
			<Table.Td>
				<Anchor
					component='button'
					size='sm'
					fw={500}
					onClick={() => router.push({ pathname: `/countries/${country.nodeId}` })}
					className={styles.leftAlign}>
					{country.name}
				</Anchor>
			</Table.Td>
			<Table.Td>
				<Text fz='md' fw={500}>
					{country.uniqueHolidayCount}
				</Text>
			</Table.Td>
			<Table.Td>
				<Anchor
					component='button'
					size='sm'
					onClick={() => router.push({ pathname: `/holidays/${country.lastHoliday.nodeId}` })}
					className={styles.leftAlign}>
					{country.lastHoliday.name}
				</Anchor>
			</Table.Td>
			<Table.Td>
				<ActionIcon variant='subtle' color='gray'>
					<ArrowForwardSharpIcon
						style={{ width: rem(16), height: rem(16) }}
						onClick={() => router.push({ pathname: `/countries/${country.nodeId}` })}
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
}
