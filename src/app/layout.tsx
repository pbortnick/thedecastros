import Image from 'next/image'
import pageBackgroundBorderLeft from '~images/page-border-bottom-left.svg'
import pageBackgroundBorderRight from '~images/page-border-bottom-right.svg'
import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import '../styles/style.css'
import s from './site.module.css'
import Nav from 'components/nav'
import classNames from 'classnames'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const bebasNeue = Bebas_Neue({
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Jason & Pamela 2025',
	description: 'Jason Decastro & Pamela Bortnick\'s wedding website',
	openGraph: {
		siteName: 'Jason & Pamela 2025',
		title: 'Jason & Pamela 2025',
		description: 'Jason Decastro & Pamela Bortnick\'s wedding website',
		type: 'website',
		locale: 'en_US',
		images: [
			{
				url: 'images/social.jpg',
				width: 3268,
				height: 4060,
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
						<Image {...pageBackgroundBorderLeft} alt="" />
					</div>
					<div className={s.borderRight}>
						<Image {...pageBackgroundBorderRight} alt="" />
					</div>
				</div>
				<VisuallyHidden>
					<h2>Jason Decastro & Pamela Bortnick's wedding website</h2>
				</VisuallyHidden>
			</body>
		</html>
	)
}
