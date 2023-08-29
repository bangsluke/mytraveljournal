import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../backend/graphql/GraphQLQueriesS";

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

  console.log("holiday data: ", data);

  return (
    <>
      <h1>Holiday Page</h1>
      {/* TODO: Fix the title of the page below */}
      <h2 style={{ fontWeight: 600, fontSize: 25 }}>{holidayId}</h2>
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
}
