import TravelOption from './components/option'
import SectionHeading from './components/section-heading'
import s from './travel.module.css'

export default function Directions() {
	return (
		<div className={s.content}>
			<SectionHeading
				heading="Travel"
				subtitle={
					<>
						For more information visit{' '}
						<a
							className={s.link}
							href="https://fallingwater.org/visit/hotels-attractions-travel-information/travel-advisories/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Fallingwater's website
						</a>
					</>
				}
			/>
			<TravelOption heading="Airports">
				<>
					<ul className={s.list}>
						<li>
							<a
								className={s.link}
								href="https://www.palmerairport.com/airport/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Arnold Palmer Regional Airport
							</a>
							<br />
							<span>40 min drive</span>
						</li>
						<li>
							<a
								className={s.link}
								href="https://www.morgantownairport.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Morgantown Municipal Airport
							</a>
							<br />
							<span>55 min drive</span>
						</li>
						<li>
							<a
								className={s.link}
								href="https://flypittsburgh.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Pittsburgh International Airport
							</a>
							<br />
							<span>~1.5 hr drive</span>
						</li>
					</ul>
				</>
			</TravelOption>
		</div>
	)
}
