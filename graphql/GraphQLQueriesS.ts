import { gql } from "@apollo/client";

const GET_CONTINENTS = gql`
	query GetContinents {
		continents {
			name
			nodeId
		}
	}
`;

const GET_CONTINENT_BY_ID = gql`
	query GetContinentById($nodeId: String) {
		continents(where: { nodeId: $nodeId }) {
			name
			nodeId
		}
	}
`;

const GET_COUNTRIES = gql`
	query GetCountries {
		countries {
			name
			nodeId
		}
	}
`;

const GET_COUNTRY_BY_ID = gql`
	query GetCountryById($nodeId: String) {
		countries(where: { nodeId: $nodeId }) {
			name
			nodeId
		}
	}
`;

const GET_CITIES = gql`
	query GetCities {
		cities {
			name
			nodeId
			capital
			linkedHolidays {
				nodeId
			}
		}
	}
`;

const GET_CITY_BY_ID = gql`
	query GetCityById($nodeId: String) {
		cities(where: { nodeId: $nodeId }) {
			name
			nodeId
			capital
			linkedHolidays {
				nodeId
			}
		}
	}
`;

const GET_TOWNS = gql`
	query GetTowns {
		towns {
			name
			nodeId
			linkedHolidays {
				nodeId
			}
		}
	}
`;

const GET_TOWN_BY_ID = gql`
	query GetTownById($nodeId: String) {
		towns(where: { nodeId: $nodeId }) {
			name
			nodeId
			linkedHolidays {
				nodeId
			}
		}
	}
`;

const GET_ISLANDS = gql`
	query GetIslands {
		islands {
			name
			nodeId
		}
	}
`;

const GET_PEOPLE = gql`
	query GetPeople {
		people {
			name
			nodeId
			aliases
			attendedHolidays {
				nodeId
			}
		}
	}
`;

const GET_PERSON_BY_ID = gql`
	query GetPeopleById($nodeId: String) {
		people(where: { nodeId: $nodeId }) {
			name
			nodeId
			aliases
			attendedHolidays {
				name
				holidayTitle
				nodeId
				sortDateValue
			}
		}
	}
`;

const GET_HOLIDAYS = gql`
	query GetHolidays {
		holidays {
			dateYear
			dateMonth
			sortDateValue
			name
			holidayTitle
			nodeId
			locations
			coverPhoto
			photoAlbum
			attendees
			textHtmlContent
			departingAirport
		}
	}
`;

const GET_HOLIDAY_BY_ID = gql`
	query GetHolidayById($nodeId: String) {
		holidays(where: { nodeId: $nodeId }) {
			dateYear
			dateMonth
			sortDateValue
			name
			holidayTitle
			nodeId
			locations
			coverPhoto
			photoAlbum
			attendees
			textHtmlContent
			departingAirport
		}
	}
`;

const GET_CAPITALS = gql`
	query GetCapitals($capitalCheck: Boolean) {
		cities(where: { capital: $capitalCheck }) {
			name
			nodeId
			capital
		}
	}
`;

const GraphQLQueriesS = {
	GET_CONTINENTS,
	GET_CONTINENT_BY_ID,
	GET_COUNTRIES,
	GET_COUNTRY_BY_ID,
	GET_CITIES,
	GET_CITY_BY_ID,
	GET_TOWNS,
	GET_TOWN_BY_ID,
	GET_ISLANDS,
	GET_PEOPLE,
	GET_PERSON_BY_ID,
	GET_HOLIDAYS,
	GET_HOLIDAY_BY_ID,
	GET_CAPITALS,
};

export default GraphQLQueriesS;
