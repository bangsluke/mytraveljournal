import { useQuery } from "@apollo/client";
import GraphQLQueriesS from "../backend/graphql/GraphQLQueriesS";

export default function CountryList() {
  const { loading, error, data } = useQuery(GraphQLQueriesS.GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const numberOfItems = Object.keys(data.countries).length;
  console.log("data", data);

  return (
    <>
      {data.countries.map(({ name }) => (
        <div>
          <h3>{name}</h3>
        </div>
      ))}
    </>
  );
}
