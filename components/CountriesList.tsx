import { gql, useQuery } from "@apollo/client";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
    }
  }
`;

export default function CountryList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const numberOfItems = Object.keys(data.countries).length;
  console.log("data", data);

  return (
    <>
      <h2>Count: {numberOfItems}</h2>
      {data.countries.map(({ name }) => (
        <div>
          <h3>{name}</h3>
        </div>
      ))}
    </>
  );
}
