import OpenGraphReact from 'opengraph-react'
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
									Fallingwater's website
								</a>
							</li>
							<li>
								<OpenGraphReact
									site="https://fallingwater.org/visit-laurel-highlands/"
									appId="695b84f7-ff34-4c32-8301-e6407d7356f1"
								/>
							</li>
							<li>
								<a
									href="https://www.hartzellhouse.com/area.htm"
									target="_blank"
								></a>
							</li>
						</ul>
					</>
				}
			/>
		</div>
	)
}
