import Image from "next/image";
import jsonData from "../backend/output.json"; // Adjust the path accordingly
import CitiesList from "../components/CitiesList";
import CountCardSection from "../components/CountCardSection";
import CountryList from "../components/CountriesList";
import HolidayList from "../components/HolidayList";
import MarkdownList from "../components/MarkdownList";
import styles from "../styles/Home.module.css";

export default function Home(props: any) {
  return (
    <>
      {/* Note: Layout wraps component in a main tag */}
      <Image
        src="/images/experiences/Nice.jpg" // Route of the image file
        height={250} // Desired size with correct aspect ratio
        width={330} // Desired size with correct aspect ratio
        alt="Nice Photo"
        priority
      />

      <section>
        <h1>My Travel Journal</h1>

        <CountCardSection />

        <div id="listsSection" className={styles.listsSection}>
          <HolidayList />

          <CountryList />

          <CitiesList />
        </div>

        <MarkdownList data={jsonData} />
      </section>
    </>
  );
}
