import { useQuery } from "@apollo/client";
import GraphQLQueriesS from "../backend/graphql/GraphQLQueriesS";
import CountCard from "./CountCard";

export default function CountryList() {
  const { loading, error, data } = useQuery(GraphQLQueriesS.GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const numberOfItems = Object.keys(data.countries).length;
  console.log("data", data);

  return (
    <>
      <CountCard
        id="1"
        cardTitle="Countries Count"
        countValue={numberOfItems}
      />
      {data.countries.map(({ name }) => (
        <div>
          <h3>{name}</h3>
        </div>
      ))}
    </>
  );
}
