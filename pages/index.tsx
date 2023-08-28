import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import jsonData from "../backend/output.json"; // Adjust the path accordingly
import MarkdownList from "../components/MarkdownList";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

const client = new ApolloClient({
  uri: "http://127.0.0.1:4000/",
  cache: new InMemoryCache(),
});

// const client = ...

client
  .query({
    query: gql`
      query GetLocations {
        cities {
          name
        }
      }
    `,
  })
  .then((result) => console.log(result));

const GET_LOCATIONS = gql`
  query GetLocations {
    cities {
      name
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.cities.map(({ name }) => (
    <div>
      <h3>{name}</h3>
    </div>
  ));
}

export default function Home(props: any) {
  return (
    <ApolloProvider client={client}>
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
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <Image
            src="/images/experiences/Nice.jpg" // Route of the image file
            height={250} // Desired size with correct aspect ratio
            width={330} // Desired size with correct aspect ratio
            alt="Nice Photo"
          />

          <section>
            <h1>My Travel Journal</h1>

            <DisplayLocations />

            <MarkdownList data={jsonData} />
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
    </ApolloProvider>
  );
}
