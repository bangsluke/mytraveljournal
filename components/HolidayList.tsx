import { gql, useQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    cities {
      name
    }
  }
`;

export default function HolidayList() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.cities.map(({ name }) => (
    <div>
      <h3>{name}</h3>
    </div>
  ));
}
