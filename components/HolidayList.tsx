import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../backend/graphql/GraphQLQueriesS";
import styles from "../styles/Travel.module.css";

export default function HolidayList() {
  const router = useRouter();

  const { loading, error, data } = useQuery(GraphQLQueriesS.GET_HOLIDAYS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log("holiday data: ", data);

  return (
    <div className={styles.dataList}>
      <h3>Holidays</h3>
      <ul>
        {data.holidays.map(({ name, date_year, date_month }) => (
          <li
            key={name}
            onClick={() => router.push({ pathname: `/holidays/${name}` })}
          >
            <h4>{name}</h4>
            <h5>
              {date_year} {date_month}
            </h5>
          </li>
        ))}
      </ul>
    </div>
  );
}
