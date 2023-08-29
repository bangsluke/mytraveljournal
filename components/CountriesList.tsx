import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../backend/graphql/GraphQLQueriesS";
import styles from "../styles/Travel.module.css";

export default function CountryList() {
  const router = useRouter();

  const { loading, error, data } = useQuery(GraphQLQueriesS.GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className={styles.dataList}>
      <h3
        className={styles.clickableHeader}
        onClick={() => router.push({ pathname: `/countries` })}
      >
        Countries Visited
      </h3>
      <ul>
        {data.countries.map(({ name }) => (
          <li key={name}>
            <h4>{name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
