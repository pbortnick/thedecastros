import { Button } from 'components/button'
import s from '../travel.module.css'
import Hero from 'components/hero'

export default function Hotels() {
	return (
		<>
			<Hero
				title="Dining"
				image={{
					src: require('../accent.png'),
					width: 402.75,
					height: 435,
					alt: '',
				}}
			/>
			<div className={s.content}>
				<div style={{ margin: '0 auto' }}>
					<p>Coming soon!</p>
					<p>For now check out this site for recommendations:</p>
					<div style={{ display: 'flex', paddingTop: '1rem' }}>
						<Button
							href="https://www.golaurelhighlands.com/food-drink/"
							text="Laurel Highlands Restaurants"
						/>
					</div>
				</div>
			</div>
		</>
	)
}
