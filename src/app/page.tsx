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
				<h1 className="page-heading">Pamela & Jason</h1>
				<h2 style={{ display: 'none' }}>
					Pamela Bortnick & Jason Decastro's wedding website
				</h2>
				<div className={s.details}>
					<p className="typography-body-large">The Barn at Fallingwater</p>
					<p className="typography-body-large">Mill Run, PA</p>
					<p className="typography-body-large">Spring 2025</p>
				</div>
			</div>
		</main>
	)
}
