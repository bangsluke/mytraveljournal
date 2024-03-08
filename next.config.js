/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
				port: "",
				// pathname: "/account123/**",
			},
			{
				protocol: "https",
				hostname: "i.imgur.com",
				port: "",
				// pathname: "/account123/**",
			},
		],
	},
	// async rewrites() {
	// 	return [
	// 		{
	// 			source: "/api/:path*",
	// 			destination: `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/api/:path*`, // Point to your Heroku backend
	// 		},
	// 	];
	// },
};

module.exports = nextConfig;
