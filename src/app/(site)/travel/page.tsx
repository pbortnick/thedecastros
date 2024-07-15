import Hero from 'components/hero'
import s from './travel.module.css'

export default function TravelPage() {
	return (
		<>
			<Hero
				title="Travel"
				image={{
					src: require('./accent.png'),
					width: 385,
					height: 347,
					alt: '',
				}}
			/>
			<div className={s.content}>
				<div>Coming soon</div>
			</div>
		</>
	)
}
