import { useQuery } from "@apollo/client";
import { Interweave } from "interweave"; // https://github.com/milesj/interweave/
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";
import NavBar from "../../components/NavBar";
import styles from "../../styles/Home.module.css";

export default function HolidayPage() {
  const router = useRouter();
  const { holidayId } = router.query; // Use the same variable name as the [holidayId] file name
  console.log("holidayId: ", holidayId);

  const { loading, error, data } = useQuery(GraphQLQueriesS.GET_HOLIDAY_BY_ID, {
    variables: { holiday_id: holidayId }, // Pass the variable to the query
  });

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <>
        <p>Error : {error.message}</p>
        <div
          style={{
            backgroundColor: "blue",
            color: "white",
            margin: "3rem auto 0rem auto",
            padding: "0.3rem 1.5rem",
            lineHeight: "0.5",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => router.back()} // Go back to the last visited page
        >
          <h4>Click here to go back</h4>
        </div>
      </>
    );

  // Extract the data into usable variables
  const { name, date_year, date_month, text_html_content } = data.holidays[0];
  console.log("holiday data: ", data);

  return (
    <>
      <div className={styles.container}>
        <NavBar />

        <h1>Holiday Page</h1>

        <h2 style={{ fontWeight: 600, fontSize: 25 }}>{holidayId}</h2>

        <h3>Holiday Name: {name}</h3>
        <h4>
          Date: {date_year} {date_month}
        </h4>

        <section>
          {/* Use the Interweave library to render the HTML content -
        https://github.com/milesj/interweave/ */}
          <Interweave content={text_html_content} />
        </section>

        <div
          style={{
            backgroundColor: "blue",
            color: "white",
            margin: "3rem auto 0rem auto",
            padding: "0.3rem 1.5rem",
            lineHeight: "0.5",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => router.back()} // Go back to the last visited page
        >
          <h4>Click here to go back</h4>
        </div>
      </div>
    </>
  );
}
