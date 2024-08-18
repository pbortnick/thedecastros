import Hero from 'components/hero'
import Sidebar from 'components/sidebar'
import s from './travel.module.css'
import TravelOption from './components/option'
import SectionHeading from './components/section-heading'

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
					<Sidebar anchorLinks={anchorLinks} />
				</div>
				<div className={s.details}>
					<div className={s.section}>
						<div id="hotels" className={s.sectionAnchor} />
						<SectionHeading
							heading="Hotels"
							subtitle="For each option listed below, call or text the phone number and let them know you are a guest of Pamela Bortnick & Jason Decastro's wedding."
						/>
						<div className={s.options}>
							<TravelOption
								heading="Hartzell House"
								tags={['groups', 'individuals', 'couples']}
								image={{
									src: '/images/hotels/hartzell-house.jpg',
									width: 500,
									height: 400,
									alt: 'Image of Hartzell House cabin',
								}}
								link={{
									text: 'Rooms',
									href: 'https://www.hartzellhouse.com/rooms.htm',
								}}
								contact={{
									name: 'Melissa and Robert',
									phone: '(814) 395-5248',
								}}
							>
								<>
									<p>
										Check out the rooms and either book for a single room for
										yourself or get a group together and book the whole house
										(maximum 15 people)
									</p>
								</>
							</TravelOption>
							<TravelOption
								heading="Fernwalk"
								tags={['groups']}
								image={{
									src: '/images/hotels/fernwalk.png',
									width: 500,
									height: 400,
									alt: 'Image of Fernwalk',
								}}
								link={{
									text: 'Website',
									href: 'https://fernwalk.wordpress.com/',
								}}
								contact={{
									name: 'Beth',
									phone: '(215) 313-0112',
								}}
							>
								<p>
									Fernwalk offers 2 queen beds, and a queen inflatable or two
									twin inflatables. Maximum 6 people.
								</p>
							</TravelOption>
							<TravelOption
								heading="Paddler's Lane"
								tags={['groups']}
								image={{
									src: '/images/hotels/paddlers-lane.jpg',
									width: 500,
									height: 400,
									alt: "Image of Paddler's Lane cabin",
								}}
								link={{
									text: 'Website',
									href: 'https://www.paddlerslane.com/',
								}}
								contact={{
									name: 'Robin',
									phone: '(814) 964-0410',
								}}
							>
								<table className={s.table}>
									<thead>
										<tr>
											<th>Cabin</th>
											<th>Max Guests</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Chalet</td>
											<td>6</td>
										</tr>
										<tr>
											<td>Main House</td>
											<td>6</td>
										</tr>
										<tr>
											<td>Cabin</td>
											<td>5</td>
										</tr>
									</tbody>
								</table>
							</TravelOption>
							<TravelOption
								heading="Smith House Inn"
								tags={['groups', 'individuals', 'couples']}
								image={{
									src: '/images/hotels/smith-house.jpg',
									width: 500,
									height: 400,
									alt: 'Image of Smith House Inn',
								}}
								link={{
									text: 'Rooms',
									href: 'https://smithhouseinn.com/guest-rooms/',
								}}
								contact={{
									name: 'Robin',
									phone: '(814) 395-5248',
								}}
							>
								<p>
									Check out the rooms and either book for a single room for
									yourself or get a group together and book the whole house
									(maximum 10 people)
								</p>
							</TravelOption>
						</div>

						{/* <div className={s.sectionItem}>
							<h3 className="heading-3">Historic Summit Inn Resort</h3>
							<p>Standard hotel</p>
							<Image
								className={s.image}
								src="/images/hotels/summit-inn.jpg"
								width={500}
								height={400}
								alt="Image of Summit Inn Resort"
							/>
							<Button
								text="Website"
								href="https://www.summitinnresort.com/"
								target="_blank"
							/>
						</div> */}
						<SectionHeading
							heading="Other options"
							subtitle={
								<span>
									Please let us know if you book one of these options and we
									will do our best to accommodate shuttles. See{' '}
									<a href="/faq">FAQ</a> for more information.
								</span>
							}
						/>
						<TravelOption
							heading="Airbnb"
							link={{
								text: 'View options',
								href: 'https://www.airbnb.com/',
							}}
						/>
					</div>
					<hr />
					<div className={s.section}>
						<div id="travel" className={s.sectionAnchor} />
						<h2 className="heading-2">Travel</h2>
						<p>
							For more information visit{' '}
							<a
								className={s.link}
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
										className={s.link}
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
										className={s.link}
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
										className={s.link}
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
					<hr />
					<div className={s.section}>
						<div id="attractions" className={s.sectionAnchor} />
						<SectionHeading heading="Attractions" subtitle="Coming soon!" />
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
		link: '#attractions',
		text: 'Attractions',
	},
]
