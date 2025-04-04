import Hero from 'components/hero'
import s from './schedule.module.css'

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
												<p className={s.dayItemDescription}>{description}</p>
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
		</>
	)
}

type DateItem = {
	date: string
	items: Array<{
		heading: string
		description: string
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
				description: 'More details on location and time to come.',
				time: 'Around 7pm',
			},
		],
	},
	{
		date: 'Saturday, May 31',
		items: [
			// {
			// 	heading: 'Fallingwater Tours',
			// 	description: '',
			// 	time: '10am-12pm',
			// 	location: 'Fallingwater',
			// 	addressLink: 'https://maps.app.goo.gl/Zut1RfyGQH1Yvoc2A',
			// },
			{
				heading: 'Ceremony & Reception',
				description: 'The main event',
				time: '5pm - 10pm',
				location: 'The Barn at Fallingwater',
				addressLink: 'https://maps.app.goo.gl/nvxHYZxzrYAhgkjc7',
			},
			{
				heading: 'After Party',
				time: '10pm - 11pm',
				description:
					'Continue partying at The Barn at Fallingwater with a DJ, dancing, and late-night snacks',
			},
		],
	},
	{
		date: 'Sunday, June 1',
		items: [
			{
				heading: 'Brunch',
				description:
					'If you aren’t too hungover and are still in town, join us for brunch.',
				time: 'TBD',
				location: 'TBD',
				// addressLink: 'https://maps.app.goo.gl/6tV8Ry6QZQ5QgR1z8',
			},
		],
	},
]
