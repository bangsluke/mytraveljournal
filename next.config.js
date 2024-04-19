/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// TODO: Change below back to true
	swcMinify: false,

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
};

module.exports = nextConfig;
