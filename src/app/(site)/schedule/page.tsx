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
					width: 476,
					height: 500,
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
											<div className={s.time}>{time && <span>{time}</span>}</div>
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
				description: 'Details to come',
			},
		],
	},
	{
		date: 'Saturday, May 31',
		items: [
			{
				heading: 'Fallingwater Tours',
				description: 'Feel free to take this time to tour the historic home!',
				time: '12pm-3pm',
				location: 'Fallingwater',
				addressLink: 'https://maps.app.goo.gl/Zut1RfyGQH1Yvoc2A',
			},
			{
				heading: 'Ceremony & Reception',
				description: 'The main event',
				time: '4pm - 10pm',
				location: 'The Barn at Fallingwater',
				addressLink: 'https://maps.app.goo.gl/nvxHYZxzrYAhgkjc7',
			},
			{
				heading: 'After Party',
				description: 'Details to come',
			},
		],
	},
	{
		date: 'Sunday, June 1',
		items: [
			{
				heading: 'Brunch',
				description: 'Details to come',
			},
		],
	},
]
