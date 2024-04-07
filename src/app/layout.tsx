import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import '../styles/style.css'
import s from './site.module.css'
import Nav from '@/components/nav'
import classNames from 'classnames'

const bebasNeue = Bebas_Neue({
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Jason & Pamela 2025',
	description: "Jason Decastro & Pamela Bortnick's wedding website",
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
			</body>
		</html>
	)
}
