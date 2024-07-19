import Hero from 'components/hero'
import s from './travel.module.css'

export default function TravelPage() {
	return (
		<>
			<Hero
				title="Travel"
				image={{
					src: require('./accent.png'),
					width: 402.75,
					height: 435,
					alt: '',
				}}
			/>
			<div className={s.content}>
				<div className={s.sidebar}>
					{anchorLinks.map(({ link, text }) => (
						<a href={link} key={link} className={s.anchorLink}>
							<i className="pi pi-arrow-right" />
							{text}
						</a>
					))}
				</div>
				<div className={s.details}>
					<div className={s.section}>
						<div id="hotels" className={s.sectionAnchor} />
						<h2 className="heading-2">Hotels</h2>
						<p>
							For more options, visit{' '}
							<a
								href="https://fallingwater.org/visit/hotels-attractions-travel-information/lodging/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Fallingwater's website
							</a>
						</p>
					</div>
					<div className={s.section}>
						<div id="travel" className={s.sectionAnchor} />
						<h2 className="heading-2">Travel</h2>
						<p>
							For more information visit{' '}
							<a
								href="https://fallingwater.org/visit/hotels-attractions-travel-information/travel-advisories/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Fallingwater's website
							</a>
						</p>
						<div>
							<h3>Airports</h3>
							<p>The closest airports are:</p>
							<ul>
								<li>
									<a
										href="https://www.palmerairport.com/airport/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Arnold Palmer Regional Airport
									</a>
									<span>40 min drive</span>
								</li>
								<li>
									<a
										href="https://www.morgantownairport.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Morgantown Municipal Airport
									</a>
									<span>55 min drive</span>
								</li>
								<li>
									<a
										href="https://flypittsburgh.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Pittsburgh International Airport
									</a>
									<span>~1.5 hr drive</span>
								</li>
							</ul>
						</div>
						<div>
							<h3>Buses/Trains</h3>
							<p>The closest airports are </p>
						</div>
					</div>
					<div className={s.section}>
						<div id="things-to-do" className={s.sectionAnchor} />
						<h2 className="heading-2">Things to do</h2>
						<p>
							For more information see{' '}
							<a href="https://fallingwater.org/visit-laurel-highlands/">
								Fallingwater's site
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

const anchorLinks = [
	{
		link: '#hotels',
		text: 'Hotels',
	},
	{
		link: '#travel',
		text: 'Travel',
	},
	{
		link: '#things-to-do',
		text: 'Things to do',
	},
]
