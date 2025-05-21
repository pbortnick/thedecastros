import Hero from 'components/hero'
import s from './schedule.module.css'
import { ReactNode } from 'react'

export default function SchedulePage() {
	return (
		<>
			<Hero
				title="Schedule"
				image={{
					src: require('./accent.png'),
					// width: 1905,
					// height: 2000,
					width: 396.6,
					height: 416.6,
					alt: '',
				}}
			/>
			<div className={s.content}>
				<ul className={s.scheduleList}>
					{data.map(({ date, items }) => (
						<li key={date} className={s.scheduleListItem}>
							<h2 className={s.scheduleListItemHeading}>{date}</h2>
							<ul className={s.dayItemList}>
								{items.map(
									({ heading, description, time, location, addressLink }) => (
										<li key={heading} className={s.dayItem}>
											<div className={s.dayItemContent}>
												<h3 className={s.dayItemHeading}>{heading}</h3>
												{addressLink && (
													<div className={s.address}>
														<i className="pi pi-map" />
														<a href={addressLink}>
															{location ? location : 'Get directions'}
														</a>
													</div>
												)}
												{description}
											</div>
											<div className={s.time}>
												{time && <span>{time}</span>}
											</div>
										</li>
									),
								)}
							</ul>
						</li>
					))}
				</ul>
			</div>
			<div className={s.shuttles} id="shuttles">
				<h2 className={s.dayItemHeading}>Shuttle Information</h2>
				<div className={s.shuttleContent}>
					<p>Vehicles will depart from these locations at 4:30pm</p>
					<div>
						<h3>Addison</h3>
						<div>
							<li>539 Main St</li>
							<li>Hartzell House</li>
							<li>Petersburg Tollhouse</li>
						</div>
					</div>
					<div>
						<h3>Confluence</h3>
						<div>
							<li>Casselman Cabin</li>
							<li>Smith House Inn</li>
						</div>
					</div>
					<div>
						<h3>Farmington</h3>
						<div>
							<li>Historic Summit Inn</li>
						</div>
					</div>
					<div>
						<h3>Mill Run</h3>
						<i>
							*Vehicle will depart at <strong>5pm</strong>
						</i>
						<div>
							<li>201 N First St</li>
						</div>
					</div>
					<p>
						At the end of the night, shuttles will leave the Barn at 10pm and
						11pm
					</p>
				</div>
			</div>
		</>
	)
}

type DateItem = {
	date: string
	items: Array<{
		heading: string
		description: ReactNode
		time?: string
		location?: string
		addressLink?: string
	}>
}

const data: Array<DateItem> = [
	{
		date: 'Friday, May 30',
		items: [
			{
				heading: 'Welcome event',
				description: (
					<div>
						<p>
							Join us for a welcome event to kick off the weekend. We will have
							beer, wine, and excellent food.
						</p>
						<p>Casual attire.</p>
					</div>
				),
				time: '6pm - 8pm',
				location: 'Hopwood House',
				addressLink: 'https://maps.app.goo.gl/bWRLD8xj4RukkjEx9',
			},
		],
	},
	{
		date: 'Saturday, May 31',
		items: [
			{
				heading: 'Ceremony & Reception',
				description: (
					<p>
						We are so excited to celebrate with you!
						<br />
						Semi-formal/Cocktail attire (see <a href="/faq">faq</a> for more
						details).
					</p>
				),
				time: '5pm - 11pm',
				location: 'The Barn at Fallingwater',
				addressLink: 'https://maps.app.goo.gl/nvxHYZxzrYAhgkjc7',
			},
		],
	},
]
