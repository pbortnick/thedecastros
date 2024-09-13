import SectionHeading from './components/section-heading'
import s from './travel.module.css'

export default function Attractions() {
	return (
		<div className={s.content}>
			<SectionHeading
				heading="Attractions"
				subtitle={
					<>
						<p>
							We will be adding more information about attractions in the area but for now, please visit <a href="https://fallingwater.org/visit-laurel-highlands/" target="_blank">Fallingwater's website</a> for more information.
						</p>
					</>
				}
			/>
		</div>
	)
}
