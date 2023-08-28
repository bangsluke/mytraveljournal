import { useQuery } from "@apollo/client";
import GraphQLQueriesS from "../backend/graphql/GraphQLQueriesS";
import styles from "../styles/Travel.module.css";

export default function CitiesList() {
  const { loading, error, data } = useQuery(GraphQLQueriesS.GET_CITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className={styles.dataList}>
      <h3>Cities Visited</h3>
      <ul>
        {data.cities.map(({ name }) => (
          <h4 id={name}>{name}</h4>
        ))}
      </ul>
    </div>
  );
}
