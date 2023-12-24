import { ApolloClient, ApolloProvider, InMemoryCache, gql } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Constants from "../constants/constants";
import LogS from "../services/LogS";
import "../styles/globals.css";

// This App component is the top-level component which will be common across all the different pages.
// You can use this App component to keep state when navigating between pages, for example.

// Pull in and display the dev mode if it is on
const { DevMode } = Constants;
if (DevMode) {
	LogS.warn("DevMode is on - set in constants.ts");
}

// Define dark mode
const darkMode = false;

// Note: All console logs will be printed in the browser console
if (DevMode) {
	LogS.log("NEXT_PUBLIC_APP_BACKEND_URL", process.env.NEXT_PUBLIC_APP_BACKEND_URL);
}

// Create an Apollo client
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
					capital
					timesVisited
				}
			}
		`,
	})
	.then((result) => {
		if (DevMode) {
			LogS.log("Test connection in _app.tsx", result);
		}
	});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</SessionProvider>
	);
}

export default MyApp;
