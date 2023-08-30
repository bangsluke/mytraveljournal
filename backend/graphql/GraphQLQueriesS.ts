import { gql } from "@apollo/client";

const GET_COUNTRIES = gql`
	query GetCountries {
		countries {
			name
		}
	}
`;

const GET_CITIES = gql`
	query GetCities {
		cities {
			name
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
		}
	}
`;

const GraphQLQueriesS = {
	GET_COUNTRIES,
	GET_CITIES,
	GET_HOLIDAYS,
	GET_HOLIDAY_BY_ID,
};

export default GraphQLQueriesS;
