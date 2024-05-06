/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	images: {
		formats: ["image/avif", "image/webp"],
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

	async redirects() {
		return [
			// Basic redirect
			{
				source: "/towns",
				destination: "/locations",
				permanent: true,
			},
			{
				source: "/islands",
				destination: "/locations",
				permanent: true,
			},
			{
				source: "/counties",
				destination: "/locations",
				permanent: true,
			},
			{
				source: "/states",
				destination: "/locations",
				permanent: true,
			},
			{
				source: "/capitals",
				destination: "/cities",
				permanent: true,
			},
			// Wildcard path matching
			{
				source: "/towns/:slug",
				destination: "/locations/:slug",
				permanent: true,
			},
			{
				source: "/islands/:slug",
				destination: "/locations/:slug",
				permanent: true,
			},
			{
				source: "/counties/:slug",
				destination: "/locations/:slug",
				permanent: true,
			},
			{
				source: "/states/:slug",
				destination: "/locations/:slug",
				permanent: true,
			},
			{
				source: "/capitals/:slug",
				destination: "/cities/:slug",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
