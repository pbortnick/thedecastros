/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl:
		process.env.NODE_ENV === 'production'
			? 'https://thedecastros.com'
			: 'https://thedecastros.vercel.app/',
	generateRobotsTxt: true, // (optional)
}
