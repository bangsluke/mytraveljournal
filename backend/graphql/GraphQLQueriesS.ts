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

const GraphQLQueriesS = {
  GET_COUNTRIES,
  GET_CITIES,
};

export default GraphQLQueriesS;
