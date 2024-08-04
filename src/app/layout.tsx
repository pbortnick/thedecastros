import classNames from 'classnames'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Montaga } from 'next/font/google'
import '../styles/index.css'
import 'primeicons/primeicons.css'
import s from './layout.module.css'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const bebasNeue = Montaga({
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Pamela & Jason 2025',
	description: "Jason Decastro & Pamela Bortnick's wedding website",
	openGraph: {
		siteName: 'Pamela & Jason 2025',
		title: 'Pamela & Jason 2025',
		description:
			"Find details of Jason Decastro and Pamela Bortnick's wedding here. View the schedule, travel information, and more. You can also access their photo gallery and registry.",
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
			<body className={classNames(bebasNeue.className, s.layout)}>
				{children}
				<SpeedInsights />
				<Analytics />
				<VisuallyHidden>
					Find details of Jason Decastro and Pamela Bortnick's wedding here.
					View the schedule, travel information, and more. You can also access
					their photo gallery and registry.
				</VisuallyHidden>
			</body>
		</html>
	)
}
