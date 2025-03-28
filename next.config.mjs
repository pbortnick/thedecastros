/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ik.imagekit.io',
			},
		],
	},
	async redirects() {
		return [
			{
				source: '/travel',
				destination: '/travel/hotels',
				permanent: true,
			},
		]
	},
}

export default nextConfig
