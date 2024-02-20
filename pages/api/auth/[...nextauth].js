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
};

export default NextAuth(authOptions);
