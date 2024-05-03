import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Image from 'next/image'
import pageBackgroundBorderLeft from '~images/page-border-bottom-left.svg'
import pageBackgroundBorderRight from '~images/page-border-bottom-right.svg'
import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import '../styles/style.css'
import s from './site.module.css'
import Nav from 'components/nav'
import classNames from 'classnames'
import 'primeicons/primeicons.css';

const bebasNeue = Bebas_Neue({
	weight: '400',
	subsets: ['latin'],
})


export const metadata: Metadata = {
	title: 'Pamela & Jason 2025',
	description: 'Jason Decastro & Pamela Bortnick\'s wedding website',
	openGraph: {
		siteName: 'Pamela & Jason 2025',
		title: 'Pamela & Jason 2025',
		description: 'Jason Decastro & Pamela Bortnick\'s wedding website',
		type: 'website',
		locale: 'en_US',
		images: [
			{
				url: 'https://thedecastros.com/images/social.jpg',
				width: 3268,
				height: 4060,
				alt: 'Jason Decastro & Pamela Bortnick\'s wedding website',
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
			<body className={classNames(bebasNeue.className, s.site)}>
				<Nav />
				{children}
				<div className={s.borderImages}>
					<div className={s.borderLeft}>
						<Image
							src={pageBackgroundBorderLeft.src}
							width={pageBackgroundBorderLeft.width}
							height={pageBackgroundBorderLeft.height}
							alt=""
						/>
					</div>
					<div className={s.borderRight}>
						<Image
							src={pageBackgroundBorderRight.src}
							width={pageBackgroundBorderRight.width}
							height={pageBackgroundBorderRight.height}
							alt=""
						/>
					</div>
				</div>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	)
}
