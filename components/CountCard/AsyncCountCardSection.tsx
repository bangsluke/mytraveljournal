import { useQuery } from "@apollo/client";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HouseIcon from "@mui/icons-material/House";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PublicIcon from "@mui/icons-material/Public";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import {
	GetHolidaysDocument,
	GetPeopleDocument,
	GetContinentsListDocument,
	GetCountriesListDocument,
	GetCitiesListDocument,
	GetCapitalsListDocument,
	GetTownsListDocument,
	GetIslandsListDocument,
} from "../../graphql/__generated__/graphql";
import CountCard from "./CountCard";
import styles from "./CountCard.module.css";

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

const spinnerStyles = `
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;

export default function AsyncCountCardSection() {
	const { loading: holidaysLoading, data: holidaysData } = useQuery(GetHolidaysDocument);
	const holidayCount = holidaysData?.holidays?.length ?? 0;

	const { loading: peopleLoading, data: peopleData } = useQuery(GetPeopleDocument);
	const filteredTravelCompanionCount = (peopleData?.people ?? []).filter((p: any) => (p.attendedHolidays ?? []).length > 0).length;

	const { loading: continentsLoading, data: continentsData } = useQuery(GetContinentsListDocument);
	const filteredContinentsCount = ((continentsData?.continents ?? []).filter((continent: any) => {
		return (continent.placesLocatedIn ?? []).some((location: any) => {
			if ((location.linkedHolidays ?? []).length > 0) return true;
			return (location.placesLocatedIn ?? []).some((sub: any) => (sub.linkedHolidays ?? []).length > 0);
		});
	})).length;

	const { loading: countriesLoading, data: countriesData } = useQuery(GetCountriesListDocument);
	const filteredCountriesCount = ((countriesData?.countries ?? []).filter((country: any) => {
		return (country.placesLocatedIn ?? []).some((place: any) => (place.linkedHolidays ?? []).length > 0);
	})).length;

	const { loading: citiesLoading, data: citiesData } = useQuery(GetCitiesListDocument);
	const filteredCitiesCount = (citiesData?.cities ?? []).filter((c: any) => (c.linkedHolidays ?? []).length > 0).length;

	const { loading: capitalsLoading, data: capitalsData } = useQuery(GetCapitalsListDocument, { variables: { capitalCheck: true } });
	const filteredCapitalsCount = (capitalsData?.cities ?? []).filter((c: any) => (c.linkedHolidays ?? []).length > 0).length;

	const { loading: townsLoading, data: townsData } = useQuery(GetTownsListDocument);
	const filteredTownsCount = (townsData?.towns ?? []).filter((t: any) => (t.linkedHolidays ?? []).length > 0).length;

	const { loading: islandsLoading, data: islandsData } = useQuery(GetIslandsListDocument);
	const filteredIslandsCount = (islandsData?.islands ?? []).filter((i: any) => (i.linkedHolidays ?? []).length > 0).length;

	const getCountValue = (isLoading: boolean, count: number) => (isLoading ? <CountCardLoadingSpinner /> : count);

	return (
		<>
			<style>{spinnerStyles}</style>
			<div id='countCardSection' className={styles.countCardSection}>
				<CountCard
					id='1'
					cardTitle='Holiday Count'
					countValue={getCountValue(holidaysLoading, holidayCount)}
					pagePath='/holidays'
					enabledBoolean={!holidaysLoading}
					backgroundIcon={<FlightTakeoffIcon fontSize='large' />}
				/>

				<CountCard
					id='2'
					cardTitle='Travel Companion Count'
					countValue={getCountValue(peopleLoading, filteredTravelCompanionCount)}
					pagePath='/people'
					enabledBoolean={!peopleLoading}
					backgroundIcon={<SupervisorAccountIcon fontSize='large' />}
				/>

				<CountCard
					id='3'
					cardTitle='Continent Count'
					countValue={getCountValue(continentsLoading, filteredContinentsCount)}
					pagePath='/continents'
					enabledBoolean={!continentsLoading}
					backgroundIcon={<PublicIcon fontSize='large' />}
				/>

				<CountCard
					id='4'
					cardTitle='Countries Count'
					countValue={getCountValue(countriesLoading, filteredCountriesCount)}
					pagePath='/countries'
					enabledBoolean={!countriesLoading}
					backgroundIcon={<MapIcon fontSize='large' />}
				/>

				<CountCard
					id='5'
					cardTitle='Cities Count'
					countValue={getCountValue(citiesLoading, filteredCitiesCount)}
					pagePath='/cities'
					enabledBoolean={!citiesLoading}
					backgroundIcon={<LocationCityIcon fontSize='large' />}
				/>

				<CountCard
					id='6'
					cardTitle='Capitals Count'
					countValue={getCountValue(capitalsLoading, filteredCapitalsCount)}
					pagePath='/cities'
					enabledBoolean={!capitalsLoading}
					backgroundIcon={<PinDropIcon fontSize='large' />}
				/>

				<CountCard
					id='7'
					cardTitle='Towns Count'
					countValue={getCountValue(townsLoading, filteredTownsCount)}
					pagePath='/locations'
					enabledBoolean={!townsLoading}
					backgroundIcon={<HouseIcon fontSize='large' />}
				/>

				<CountCard
					id='8'
					cardTitle='Islands Count'
					countValue={getCountValue(islandsLoading, filteredIslandsCount)}
					pagePath='/locations'
					enabledBoolean={!islandsLoading}
					backgroundIcon={<BeachAccessIcon fontSize='large' />}
				/>
			</div>
		</>
	);
}

