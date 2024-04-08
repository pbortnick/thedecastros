import s from './page.module.css'

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
