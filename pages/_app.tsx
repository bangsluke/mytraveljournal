// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from "@apollo/client";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { SessionProvider } from "next-auth/react";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import type { AppProps } from "next/app";
import Constants from "../constants/constants";
import LogS from "../services/LogS";
import "../styles/globals.css";
import { FilterProvider } from "../context/FilterContext";

// This App component is the top-level component which will be common across all the different pages. You can use this App component to keep state when navigating between pages, for example.

// Get the mode (development or production) from the environment
const runMode = process.env.NODE_ENV;
LogS.log("Site running in mode: ", runMode);

// console.log("Constants.mainAccent", Constants.mainAccent);

// https://mantine.dev/theming/theme-object/#usage
const theme = createTheme({
	/** Put your mantine theme override here */
	fontFamily: "Open Sans, sans-serif",
	white: "#FFFFFF",
	black: "#000000",
	// TODO: Add here? https://mantine.dev/theming/theme-object/
	colors: {
		// Add your color
		primary: [
			Constants.mainAccent,
			Constants.mainAccent,
			Constants.mainAccent,
			Constants.mainAccent,
			Constants.mainAccent,
			Constants.mainAccent,
			Constants.mainAccent,
			Constants.mainAccent,
			Constants.mainAccent,
			Constants.mainAccent,
		],
		// or replace default theme color
		// blue: ["#E9EDFC", "#C1CCF6", "#99ABF0"],
	},
	primaryColor: "primary",
});

// Define dark mode
//const darkMode = false; // TODO: Do something with this?

// Note: All console logs will be printed in the browser console
if (runMode === "development") {
	LogS.log(" NEXT_PUBLIC_APP_BACKEND_URL", process.env.NEXT_PUBLIC_APP_BACKEND_URL);
	// Suppress specific Apollo Client deprecation warning
	const originalWarn = console.warn;
	console.warn = (...args) => {
		if (args[0] && typeof args[0] === "string" && args[0].includes("canonizeResults")) {
			return;
		}
		originalWarn(...args);
	};

	loadDevMessages();
	loadErrorMessages();
}
//LogS.log(" Constants.SkipAuth: ", Constants.SkipAuth);

// Create an Apollo client
// Create an HttpLink
const httpLink = new HttpLink({
	uri: runMode === "development" ? "/api/graphql" : process.env.NEXT_PUBLIC_APP_BACKEND_URL,
});

const client = new ApolloClient({
	// Use proxy in development to avoid CORS; direct URL in production
	link: httpLink,
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<FilterProvider>
				<ApolloProvider client={client}>
					<MantineProvider theme={theme} defaultColorScheme='light'>
						<Component {...pageProps} />
					</MantineProvider>
				</ApolloProvider>
			</FilterProvider>
		</SessionProvider>
	);
}

export default MyApp;
