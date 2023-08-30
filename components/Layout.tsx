import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "./NavBar";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        {/* Site Title */}
        <title>My Travel Journal</title>
        <meta
          name="description"
          content="A journal of my travels with Bry and others."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        {/* TODO: Actually set up a good footer */}
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
        </a>
      </footer>
    </>
  );
}
