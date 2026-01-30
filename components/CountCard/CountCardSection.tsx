import { useQuery } from "@apollo/client";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HouseIcon from "@mui/icons-material/House";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PublicIcon from "@mui/icons-material/Public";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { GetCardCountsDocument } from "../../graphql/__generated__/graphql";
import LogS from "../../services/LogS";
import Toast from "../Toast/Toast";
import CountCard from "./CountCard";
import styles from "./CountCard.module.css";

// Define a count type that just returns the name for now
type CountValue = {
	name: string;
	nodeId: string;
};

type CardCountResults = {
	holidayData: CountValue[] | undefined;
	holidayCount: number;
	continentData: CountValue[] | undefined;
	filteredContinentsData: CountValue[] | undefined;
	filteredContinentsCount: number;
	countriesData: CountValue[] | undefined;
	filteredCountriesData: CountValue[] | undefined;
	filteredCountriesCount: number;
	citiesData: CountValue[] | undefined;
	filteredCitiesData: CountValue[] | undefined;
	filteredCitiesCount: number;
	filteredCapitalsData: CountValue[] | undefined;
	filteredCapitalsCount: number;
	townsData: CountValue[] | undefined;
	filteredTownsCount: number;
	islandsData: CountValue[] | undefined;
	filteredIslandsCount: number;
	filteredTravelCompanionData: CountValue[] | undefined;
	filteredTravelCompanionCount: number;
	isLoading: boolean;
};

const useGetCardCounts = () => {
	const { loading, error, data } = useQuery(GetCardCountsDocument);

	// Initialize default values
	let cardCounts: CardCountResults = {
		holidayData: [],
		holidayCount: 0,
		continentData: [],
		filteredContinentsData: [],
		filteredContinentsCount: 0,
		countriesData: [],
		filteredCountriesData: [],
		filteredCountriesCount: 0,
		citiesData: [],
		filteredCitiesData: [],
		filteredCitiesCount: 0,
		filteredCapitalsData: [],
		filteredCapitalsCount: 0,
		townsData: [],
		filteredTownsCount: 0,
		islandsData: [],
		filteredIslandsCount: 0,
		filteredTravelCompanionData: [],
		filteredTravelCompanionCount: 0,
		isLoading: loading,
	};

	if (loading) return cardCounts; // Return with loading state

	if (error) {
		// If error - log the error and return default values
		LogS.error("useGetCardCounts GraphQL Error: ", error.message);
		return cardCounts;
	}

	// Reduce continents down to visited continents (ones with places that have linked holidays)
	const visitedContinentsData =
		data?.continents.filter((continent: any) => {
			// LogS.log("Checking continent:", continent.name, "placesLocatedIn:", continent.placesLocatedIn);
			return continent.placesLocatedIn?.some((location: any) => {
				// Check if this location has linked holidays
				if (location.linkedHolidays?.length > 0) {
					// LogS.log("Found location with linked holidays:", location.name);
					return true;
				}
				// Check if any sub-locations have linked holidays
				return location.placesLocatedIn?.some((subLocation: any) => {
					if (subLocation.linkedHolidays?.length > 0) {
						// LogS.log("Found sub-location with linked holidays:", subLocation.name);
						return true;
					}
					return false;
				});
			});
		}) ?? [];

	// Reduce countries down to visited countries (ones with places that have linked holidays)
	const visitedCountriesData =
		data?.countries.filter((country: any) => {
			// LogS.log("Checking country:", country.name, "placesLocatedIn:", country.placesLocatedIn);
			return country.placesLocatedIn?.some((place: any) => {
				if (place.linkedHolidays?.length > 0) {
					// LogS.log("Found country place with linked holidays:", place.name);
					return true;
				}
				return false;
			});
		}) ?? [];

	// Reduce cities down to visited cities
	const visitedCitiesData =
		(data?.cities ?? [])
			.filter((city: any) => {
				// LogS.log("Checking city:", city.name, "linkedHolidays:", city.linkedHolidays);
				return city.linkedHolidays?.length > 0;
			})
			.map((city: any) => ({
				...city,
				linkedHolidays: city.linkedHolidays ?? [], // Ensure linkedHolidays is not undefined
			})) ?? [];

	// Reduce cities down to visited capitals
	const visitedCapitalData =
		(data?.cities ?? [])
			.filter((city: any) => city.linkedHolidays?.length > 0 && city.capital === true) // Filter out cities not visited and not capitals
			.map((city: any) => ({
				...city,
				linkedHolidays: city.linkedHolidays ?? [], // Ensure linkedHolidays is not undefined
				capital: city.capital ?? false, // Ensure capital is not undefined
			})) ?? [];

	// Reduce towns down to visited towns
	const visitedTownsData =
		(data?.towns ?? [])
			.filter((town: any) => {
				// LogS.log("Checking town:", town.name, "linkedHolidays:", town.linkedHolidays);
				return town.linkedHolidays?.length > 0;
			})
			.map((town: any) => ({
				...town,
				linkedHolidays: town.linkedHolidays ?? [], // Ensure linkedHolidays is not undefined
			})) ?? [];

	// Reduce islands down to visited islands
	const visitedIslandsData =
		(data?.islands ?? [])
			.filter((island: any) => {
				// LogS.log("Checking island:", island.name, "linkedHolidays:", island.linkedHolidays);
				return island.linkedHolidays?.length > 0;
			})
			.map((island: any) => ({
				...island,
				linkedHolidays: island.linkedHolidays ?? [], // Ensure linkedHolidays is not undefined
			})) ?? [];

	// Reduce down travel companion data to those that have been to a holiday
	const travelledWithCompanionData =
		(data?.people ?? [])
			.filter((person: any) => {
				// LogS.log("Checking person:", person.name, "attendedHolidays:", person.attendedHolidays);
				return person.attendedHolidays?.length > 0;
			})
			.map((person: any) => ({
				...person,
				attendedHolidays: person.attendedHolidays ?? [], // Ensure attendedHolidays is not undefined
			})) ?? [];

	// Debug logging to understand the data structure
	// LogS.log("=== DEBUG: CountCardSection Data ===");
	// LogS.log("Holidays count:", data?.holidays?.length);
	// LogS.log("Continents count:", data?.continents?.length);
	// LogS.log("Countries count:", data?.countries?.length);
	// LogS.log("Cities count:", data?.cities?.length);
	// LogS.log("Towns count:", data?.towns?.length);
	// LogS.log("Islands count:", data?.islands?.length);
	// LogS.log("People count:", data?.people?.length);

	// Log sample data to understand structure
	// if (data?.continents && data.continents.length > 0) {
	// 	LogS.log("Sample continent:", data.continents[0]);
	// }
	// if (data?.countries && data.countries.length > 0) {
	// 	LogS.log("Sample country:", data.countries[0]);
	// }
	// if (data?.cities && data.cities.length > 0) {
	// 	LogS.log("Sample city:", data.cities[0]);
	// }
	// if (data?.people && data.people.length > 0) {
	// 	LogS.log("Sample person:", data.people[0]);
	// }

	// Finalise the card counts data
	cardCounts = {
		holidayData: data?.holidays ?? [],
		holidayCount: data?.holidays?.length ?? 0,
		continentData: data?.continents ?? [],
		filteredContinentsData: visitedContinentsData,
		filteredContinentsCount: visitedContinentsData.length ?? 0,
		countriesData: data?.countries ?? [],
		filteredCountriesData: visitedCountriesData,
		filteredCountriesCount: visitedCountriesData.length ?? 0,
		citiesData: data?.cities ?? [],
		filteredCitiesData: visitedCitiesData,
		filteredCitiesCount: visitedCitiesData.length,
		filteredCapitalsData: visitedCapitalData,
		filteredCapitalsCount: visitedCapitalData.length,
		townsData: data?.towns ?? [],
		filteredTownsCount: visitedTownsData.length,
		islandsData: data?.islands ?? [],
		filteredIslandsCount: visitedIslandsData.length,
		filteredTravelCompanionData: travelledWithCompanionData,
		filteredTravelCompanionCount: travelledWithCompanionData.length,
		isLoading: false,
	};

	// Debug filtered results
	// LogS.log("=== DEBUG: Filtered Results ===");
	// LogS.log("Visited continents count:", visitedContinentsData.length);
	// LogS.log("Visited countries count:", visitedCountriesData.length);
	// LogS.log("Visited cities count:", visitedCitiesData.length);
	// LogS.log("Visited capitals count:", visitedCapitalData.length);
	// LogS.log("Visited towns count:", visitedTownsData.length);
	// LogS.log("Visited islands count:", visitedIslandsData.length);
	// LogS.log("Travel companions count:", travelledWithCompanionData.length);

	// LogS.log("data from useGetCardCounts", cardCounts);
	return cardCounts;
};

// Create a loading spinner component for the count cards
const CountCardLoadingSpinner = () => (
	<div style={{
		width: '40px',
		height: '40px',
		border: '4px solid rgba(255, 255, 255, 0.3)',
		borderTop: '4px solid #fff',
		borderRadius: '50%',
		animation: 'spin 1s linear infinite',
		margin: '0 auto'
	}} />
);

// Add the CSS animation for the spinner
const spinnerStyles = `
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;

// Define a count card section that holds several count card components.
export default function CountCardSection() {
	const countCardData: any = useGetCardCounts();

	// Helper function to get the count value or loading spinner
	const getCountValue = (count: number) => {
		return countCardData.isLoading ? <CountCardLoadingSpinner /> : count;
	};

	return (
		<>
			<style>{spinnerStyles}</style>
			<div id='countCardSection' className={styles.countCardSection}>
				<CountCard
					id='1'
					cardTitle='Holiday Count'
					countValue={getCountValue(countCardData.holidayCount)}
					pagePath='/holidays'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={
						<FlightTakeoffIcon />
					}
				/>

				<CountCard
					id='2'
					cardTitle='Travel Companion Count'
					countValue={getCountValue(countCardData.filteredTravelCompanionCount)}
					pagePath='/people'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={
						<SupervisorAccountIcon />
					}
				/>

				<CountCard
					id='3'
					cardTitle='Continent Count'
					countValue={getCountValue(countCardData.filteredContinentsCount)}
					pagePath='/continents'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={
						<PublicIcon />
					}
				/>
				<CountCard
					id='4'
					cardTitle='Countries Count'
					countValue={getCountValue(countCardData.filteredCountriesCount)}
					pagePath='/countries'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={
						<MapIcon />
					}
				/>
				<CountCard
					id='5'
					cardTitle='Cities Count'
					countValue={getCountValue(countCardData.filteredCitiesCount)}
					pagePath='/cities'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={
						<LocationCityIcon />
					}
				/>
				<CountCard
					id='6'
					cardTitle='Capitals Count'
					countValue={getCountValue(countCardData.filteredCapitalsCount)}
					pagePath='/cities'
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={
						<PinDropIcon />
					}
				/>
				<CountCard
					id='7'
					cardTitle='Towns Count'
					countValue={getCountValue(countCardData.filteredTownsCount)}
					pagePath='/locations'
					// TODO: Pass a value in the locations URL above?
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={
						<HouseIcon />
					}
				/>
				<CountCard
					id='8'
					cardTitle='Islands Count'
					countValue={getCountValue(countCardData.filteredIslandsCount)}
					pagePath='/locations'
					// TODO: Pass a value in the locations URL above?
					enabledBoolean={!countCardData.isLoading}
					backgroundIcon={
						<BeachAccessIcon />
					}
				/>
			</div>
		</>
	);
}
