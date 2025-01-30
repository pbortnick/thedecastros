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
							We will be adding more information about attractions in the area
							but for now, these sites provide excellent guides about the area:
						</p>
						<ul>
							<li>
								<a
									href="https://fallingwater.org/visit-laurel-highlands/"
									target="_blank"
								>
									Visit the Laurel Highlands of Pennsylvania - Home to
									Fallingwater
								</a>
							</li>
							<li>
								<a
									href="https://www.hartzellhouse.com/area.htm"
									target="_blank"
								>
									Things to Do & See: Vacations in the Laurel Highlands of
									Western PA
								</a>
							</li>
						</ul>
					</>
				}
			/>
		</div>
	)
}
