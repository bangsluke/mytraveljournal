import NextAuth from "next-auth";
// import AppleProvider from "next-auth/providers/apple";
// import EmailProvider from "next-auth/providers/email";
// import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

// Define the API routes for Authentication
export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		// AppleProvider({
		// 	clientId: process.env.APPLE_ID,
		// 	clientSecret: process.env.APPLE_SECRET,
		// }),
		// FacebookProvider({
		// 	clientId: process.env.FACEBOOK_ID,
		// 	clientSecret: process.env.FACEBOOK_SECRET,
		// }),
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		// Passwordless / email sign in
		// EmailProvider({
		// 	server: process.env.MAIL_SERVER,
		// 	from: "NextAuth.js <no-reply@example.com>",
		// }),
		// ...add more providers here
	],
	// Optional: Configure sessions - (https://next-auth.js.org/configuration/options#session)
	session: {
		jwt: true, // Use JSON Web Tokens for session
		maxAge: 30 * 24 * 60 * 60, // Session expiry: 30 days
	},
	// Optional: Configure JSON Web Tokens - (https://next-auth.js.org/configuration/options#jwt)
	jwt: {
		// A secret to encrypt the JWT. Use the same secret as NEXTAUTH_SECRET in your .env file
		secret: process.env.NEXTAUTH_SECRET,
		// The maximum age of the NextAuth.js issued JWT in seconds.
		// Defaults to `session.maxAge`.
		//maxAge: 60 * 60 * 24 * 30,
	},
	// Optional: Specify pages for signing in, signing out, error, verify request, etc. - (https://next-auth.js.org/configuration/options#pages)
	pages: {
		// signIn: "/auth/signin", // Displays signin buttons
		// signOut: "/auth/signout", // Displays signout button
		// error: "/auth/error", // Error code passed in query string as ?error=
		// verifyRequest: "/auth/verify-request", // Used for email provider
		// newUser: null, // If set, new users will be directed here on first sign in
	},

	// Optional: Events - (https://next-auth.js.org/configuration/options#events)
	events: {
		async signIn(message) {
			/* on successful sign in */
			LogS.log("Sign In Event: ", message);
		},
		async signOut(message) {
			/* on signout */
		},
		async createUser(message) {
			/* user created */
		},
		async updateUser(message) {
			/* user updated - e.g. their email was verified */
		},
		async linkAccount(message) {
			/* account (e.g. Twitter) linked to a user */
		},
		async session(message) {
			/* session is active */
		},
	},

	// Optional: Debug - https://next-auth.js.org/configuration/options#debug
	debug: true, // Set debug to true to enable debug messages for authentication and database operations.

	// Optional: Theme - (https://next-auth.js.org/configuration/options#theme)
	theme: {
		colorScheme: "auto", // "auto" | "dark" | "light"
		brandColor: "#FFF000", // Hex color code
		logo: "https://i.imgur.com/0Fm5UcF.png", // Absolute URL to image
		buttonText: "", // Hex color code
	},
};

export default NextAuth(authOptions);
