import Image from 'next/image'
import s from './page.module.css'
import Nav from 'components/nav'

export default function HomePage() {
	return (
		<div className={s.homePage}>
			<Nav />
			<main className={s.main}>
				<div className={s.container}>
					<div className={s.intro}>
						<span className="subheading">Please join us to celebrate</span>
					</div>
					<h1 className="title">
						Pamela
						<br />
						<span className={s.accent}>&</span> Jason
					</h1>
					<div className={s.details}>
						<span className="subheading">May 31, 2024</span>
						<span className="subheading">Mill Run, PA</span>
					</div>
				</div>

				<div className={s.imageContainer}>
					<Image
						src={require('./homepage-graphic.png')}
						width={1000}
						height={734}
						alt="Outline of Fallingwater"
						priority
					/>
				</div>
			</main>
		</div>
	)
}
