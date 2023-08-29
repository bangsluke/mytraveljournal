import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import styles from "../../styles/Home.module.css";

export default function HolidaysPage(props: any) {
  const router = useRouter();

  return (
    <>
      {/* <Layout> */}
      <div className={styles.container}>
        <Head>
          {/* Site Title */}
          <title>My Travel Journal</title>
          <meta
            name="description"
            content="A journal of my travels with Bry."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />

        <main className={styles.main}>
          <section>
            <h1>Holidays Page</h1>

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
          </section>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
          </a>
        </footer>
      </div>
      {/* </Layout> */}
    </>
  );
}
