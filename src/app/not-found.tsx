import classNames from 'classnames'
import type { Metadata } from 'next'
import { Montaga } from 'next/font/google'
import { Schibsted_Grotesk } from 'next/font/google'
import '../styles/index.css'
import 'primeicons/primeicons.css'
import s from './layout.module.css'
import Nav from 'components/nav'

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
		description:
			"Find details of Jason Decastro and Pamela Bortnick's wedding here. View the schedule, travel information, and more. You can also access their photo gallery and registry.",
		type: 'website',
		locale: 'en_US',
		images: [
			{
				url: 'https://thedecastros.com/images/social.png',
				width: 3268,
				height: 4060,
				alt: "Jason Decastro & Pamela Bortnick's wedding website",
			},
		],
	},
}

export default function NotFound() {
	return (
		<html lang="en">
			<body
				className={classNames(
					montaga.variable,
					schibstedGrotesk.variable,
					s.layout,
				)}
			>
				<div className={s.siteLayout}>
					<Nav />
					<main className={s.main}>
						<div style={{ margin: 'auto', textAlign: 'center', paddingTop: 100 }}>
							<p>This page could not be found</p>
						</div>
					</main>
				</div>
			</body>
		</html>
	)
}
