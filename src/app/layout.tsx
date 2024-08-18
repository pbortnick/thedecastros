import classNames from 'classnames'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Montaga } from 'next/font/google'
import { Schibsted_Grotesk } from 'next/font/google'
import '../styles/index.css'
import 'primeicons/primeicons.css'
import s from './layout.module.css'

const montaga = Montaga({
	weight: '400',
	variable: '--montaga',
	subsets: ['latin'],
	display: 'swap',
})

const schibstedGrotesk = Schibsted_Grotesk({
	variable: '--schibsted-grotesk',
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Pamela & Jason 2025',
	description: "Jason Decastro & Pamela Bortnick's wedding website",
	openGraph: {
		siteName: 'Pamela & Jason 2025',
		title: 'Pamela & Jason 2025',
		description: "Jason Decastro & Pamela Bortnick's wedding website",
		type: 'website',
		locale: 'en_US',
		images: [
			{
				url: 'https://thedecastros.com/images/social.jpg',
				width: 3268,
				height: 4060,
				alt: "Jason Decastro & Pamela Bortnick's wedding website",
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={classNames(montaga.variable, schibstedGrotesk.variable, s.layout)}>
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	)
}
