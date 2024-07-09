/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: "https://d15f34w2p8l1cc.cloudfront.net/overwatch",
			},
		]
	}
};

export default nextConfig;
