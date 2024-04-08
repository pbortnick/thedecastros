import s from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	openGraph: {
		url: 'https://thedecastro.com',
	},
}

export default function Home() {
	return (
		<main className={s.main}>
			<div className={s.heading}>
				<h1 className="page-heading">Jason & Pamela</h1>
				<p className="typography-body-large">Date & venue coming soon</p>
			</div>
		</main>
	)
}
