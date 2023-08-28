import { useQuery } from "@apollo/client";
import GraphQLQueriesS from "../backend/graphql/GraphQLQueriesS";

export default function HolidayList() {
  const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.cities.map(({ name }) => (
    <div>
      <h3>{name}</h3>
    </div>
  ));
}
