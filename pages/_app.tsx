import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// This App component is the top-level component which will be common across all the different pages.
// You can use this App component to keep state when navigating between pages, for example.

// Define dark mode
const darkMode = false;

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
  .then((result) => console.log("Test connection in _app.tsx", result));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
