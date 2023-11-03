import { ApolloClient, ApolloProvider, InMemoryCache, gql } from "@apollo/client";
import type { AppProps } from "next/app";
import LogS from "../services/LogS";
import "../styles/globals.css";

// This App component is the top-level component which will be common across all the different pages.
// You can use this App component to keep state when navigating between pages, for example.

// Define dark mode
const darkMode = false;

// Note: All console logs will be printed in the browser console
LogS.log("NEXT_PUBLIC_APP_BACKEND_URL", process.env.NEXT_PUBLIC_APP_BACKEND_URL);
const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_APP_BACKEND_URL,
	cache: new InMemoryCache(),
});

// const client = ...

client
	.query({
		query: gql`
			query GetLocations {
				cities {
					name
					nodeId
				}
			}
		`,
	})
	.then((result) => LogS.log("Test connection in _app.tsx", result));

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
