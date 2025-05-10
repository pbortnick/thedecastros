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
				description:
					<div><p>Join us for a welcome event to kick off the weekend. We will have beer, wine, and excellent food.</p><p>Casual attire.</p></div>,
				time: '6pm - 8pm',
				location: 'Hopwood House',
				addressLink: '1186 National Pike, Hopwood, PA 15445',
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
				description:
					<p>We are so excited to celebrate with you!<br />Cocktail attire.</p>,
				time: '5pm - 11pm',
				location: 'The Barn at Fallingwater',
				addressLink: 'https://maps.app.goo.gl/nvxHYZxzrYAhgkjc7',
			},
			// {
			// 	heading: 'After Party',
			// 	time: '10pm - 11pm',
			// 	description:
			// 		'Continue partying at The Barn at Fallingwater with a DJ, dancing, and late-night snacks',
			// },
			
		],
	},
	{
		date: 'Sunday, June 1',
		items: [
			{
				heading: 'The ',
				description:
					<div>
<p>Due to varying travel schedules, we will not be hosting a formal brunch. But stay tuned for reccommendations in your welcome bag and on this site!</p>

</div>
			},
		],
	},
]
