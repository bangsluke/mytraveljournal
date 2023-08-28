import { useQuery } from "@apollo/client";
import GraphQLQueriesS from "../backend/graphql/GraphQLQueriesS";
import styles from "../styles/Travel.module.css";

export default function CountryList() {
  const { loading, error, data } = useQuery(GraphQLQueriesS.GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className={styles.dataList}>
      <h3>Countries Visited</h3>
      {data.countries.map(({ name }) => (
        <h4 id={name}>{name}</h4>
      ))}
    </div>
  );
}
