import NextAuth from "next-auth";
// import AppleProvider from "next-auth/providers/apple";
// import EmailProvider from "next-auth/providers/email";
// import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import allowedEmails from "../../../constants/allowedEmails.json"; // List of allowed email addresses
import LogS from "../../../services/LogS";

const allowedEmailsList = allowedEmails.allowed;

// Define the API routes for Authentication
export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		// TODO: Add more providers
		// AppleProvider({
		// 	clientId: process.env.APPLE_ID,
		// 	clientSecret: process.env.APPLE_SECRET,
		// }),
		// FacebookProvider({
		// 	clientId: process.env.FACEBOOK_ID,
		// 	clientSecret: process.env.FACEBOOK_SECRET,
		// }),
		// Passwordless / email sign in
		// EmailProvider({
		// 	server: process.env.MAIL_SERVER,
		// 	from: "NextAuth.js <no-reply@example.com>",
		// }),
		// ...add more providers here
	],
	// Optional: Configure sessions - (https://next-auth.js.org/configuration/options#session)
	//session: {
	//jwt: true, // Use JSON Web Tokens for session
	//maxAge: 30 * 24 * 60 * 60, // Session expiry: 30 days
	//},
	// Optional: Configure JSON Web Tokens - (https://next-auth.js.org/configuration/options#jwt)
	//jwt: {
	// A secret to encrypt the JWT. Use the same secret as NEXTAUTH_SECRET in your .env file
	//secret: process.env.NEXTAUTH_SECRET,
	// The maximum age of the NextAuth.js issued JWT in seconds.
	// Defaults to `session.maxAge`.
	//maxAge: 60 * 60 * 24 * 30,
	//},

	// Optional: Specify pages for signing in, signing out, error, verify request, etc. - (https://next-auth.js.org/configuration/options#pages)
	// TODO: Optionally turn on the below and style the page at pages/auth/signin etc. See delete page in Commit "Deleted custom NextAuth page for sign in" on 14/03/2024
	//pages: {
	//signIn: "/auth/signin", // Displays signin buttons
	//signOut: "/auth/signout", // Displays signout button
	//error: "/auth/error", // Error code passed in query string as ?error=
	//verifyRequest: "/auth/verify-request", // Used for email provider
	//newUser: null, // If set, new users will be directed here on first sign in
	//},

	// Optional: Theme - (https://next-auth.js.org/configuration/options#theme)
	theme: {
		colorScheme: "auto", // "auto" | "dark" | "light"
		brandColor: "#fe395c", // Hex color code
		logo: "https://i.imgur.com/0Fm5UcF.png", // Absolute URL to image
		//buttonText: "#F03FF0", // Hex color code
	},

	// Optional: Callbacks - (https://next-auth.js.org/configuration/callbacks)
	callbacks: {
		async signIn(user, account, profile) {
			// https://next-auth.js.org/configuration/callbacks#sign-in-callback
			LogS.log("Signed in user.user.email: ", user.user.email);
			//LogS.log("allowedEmailsList", allowedEmailsList);
			//LogS.log("Check matches email:", allowedEmailsList.includes(user.user.email));

			// Check if the user's email is in the list of allowed emails
			if (user.user.email && allowedEmailsList.includes(user.user.email)) {
				return true; // Sign-in allowed
			} else {
				// return false; // Sign-in denied
				return "/auth/unauthorized?email=" + user.user.email; // Redirect to unauthorized and pass the email
			}
		},

		// Other callbacks...
	},

	// Optional: Events - (https://next-auth.js.org/configuration/options#events)
	//events: {
	// 	async signIn(message) {
	// 		/* on successful sign in */
	// 		// LogS.log("Sign In Event: ", message);
	// 	},
	// 	async signOut(message) {
	// 		/* on signout */
	// 	},
	// 	async createUser(message) {
	// 		/* user created */
	// 	},
	// 	async updateUser(message) {
	// 		/* user updated - e.g. their email was verified */
	// 	},
	// 	async linkAccount(message) {
	// 		/* account (e.g. Twitter) linked to a user */
	// 	},
	// 	async session(message) {
	// 		/* session is active */
	// 	},
	// },

	// Optional: Debug - https://next-auth.js.org/configuration/options#debug
	debug: false, // Set debug to true to enable debug messages for authentication and database operations.
};

export default NextAuth(authOptions);
