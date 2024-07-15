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
		]
	},
}

export default nextConfig
