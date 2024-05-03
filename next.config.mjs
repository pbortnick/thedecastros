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
				source: '/details',
				destination: '/things-to-do',
				permanent: true,
			},
		]
	},
}

export default nextConfig
