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
      holiday_id
    }
  }
`;

const GraphQLQueriesS = {
  GET_COUNTRIES,
  GET_CITIES,
  GET_HOLIDAYS,
};

export default GraphQLQueriesS;
