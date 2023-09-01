import { gql } from "@apollo/client";

const GET_CONTINENTS = gql`
	query GetContinents {
		continents {
			name
			node_id
		}
	}
`;

const GET_COUNTRIES = gql`
	query GetCountries {
		countries {
			name
			node_id
		}
	}
`;

const GET_CITIES = gql`
	query GetCities {
		cities {
			name
			node_id
		}
	}
`;

const GET_ISLANDS = gql`
	query GetIslands {
		islands {
			name
			node_id
		}
	}
`;

const GET_PEOPLE = gql`
	query GetPeople {
		people {
			name
			node_id
		}
	}
`;

const GET_PERSON_BY_ID = gql`
	query GetPeopleById($node_id: String) {
		people(where: { node_id: $node_id }) {
			name
			node_id
			aliases
			text_body_text
		}
	}
`;

const GET_HOLIDAYS = gql`
	query GetHolidays {
		holidays {
			name
			date_year
			date_month
			node_id
		}
	}
`;

const GET_HOLIDAY_BY_ID = gql`
	query GetHolidayById($node_id: String) {
		holidays(where: { node_id: $node_id }) {
			name
			date_year
			date_month
			node_id
			text_html_content
			attendees
		}
	}
`;

const GraphQLQueriesS = {
	GET_CONTINENTS,
	GET_COUNTRIES,
	GET_CITIES,
	GET_ISLANDS,
	GET_PEOPLE,
	GET_PERSON_BY_ID,
	GET_HOLIDAYS,
	GET_HOLIDAY_BY_ID,
};

export default GraphQLQueriesS;
