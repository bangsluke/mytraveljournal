import { ColorSchemeScript } from "@mantine/core";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<ColorSchemeScript defaultColorScheme='auto' />
				<link rel='manifest' href='/manifest.json' />
				<link rel='apple-touch-icon' href='/Travel-Journal-Logo.png' />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
