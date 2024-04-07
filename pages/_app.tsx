import { ApolloClient, ApolloProvider, InMemoryCache, gql } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import LogS from "../services/LogS";
import "../styles/globals.css";

// This App component is the top-level component which will be common across all the different pages. You can use this App component to keep state when navigating between pages, for example.

// Get the mode (development or production) from the environment
const runMode = process.env.NODE_ENV;
LogS.log("Site running in mode: ", runMode);

// Define dark mode
//const darkMode = false; // TODO: Do something with this?

// Note: All console logs will be printed in the browser console
if (runMode === "development") {
	LogS.log("   NEXT_PUBLIC_APP_BACKEND_URL", process.env.NEXT_PUBLIC_APP_BACKEND_URL);
}

// Create an Apollo client
const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_APP_BACKEND_URL,
	cache: new InMemoryCache(),
});

if (runMode === "development") {
	LogS.log("   Testing GraphQL connection in _app.tsx");
	client
		.query({
			query: gql`
				query GetLocations {
					cities {
						name
						nodeId
						capital
						linkedHolidays {
							nodeId
							name
						}
					}
				}
			`,
		})
		.then((result) => {
			LogS.log(" ✔ Tested GraphQL connection successfully in _app.tsx");
		})
		.catch((error) => {
			LogS.error(" ❌ Error in GraphQL test connection in _app.tsx", error);
		});
}

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
