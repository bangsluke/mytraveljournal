import { useRouter } from "next/router";

export default function HolidayPage() {
  const router = useRouter();
  const { holidayId } = router.query;
  console.log(holidayId);

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
