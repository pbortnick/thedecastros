import TravelOption from '../components/option'
import Hero from 'components/hero'
import s from '../travel.module.css'
import SectionHeading from '../components/section-heading'

export default function ThingsToDo() {
	return (
		<>
			<Hero title="Things to do" />
			<div className={s.content}>
				<div className={s.options}>
					<div className={s.smallerOptions}>
						<SectionHeading heading="Tour Frank Lloyd Wright Properties" />
						<TravelOption
							heading="The Iconic Fallingwater"
							link={{
								text: 'Website',
								href: 'https://fallingwater.org/visit/fallingwater-tours/',
							}}
							image={{
								src: '/images/things-to-do/fallingwater-tour.jpg',
								alt: 'Image of Fallingwater interior',
								width: 500,
								height: 400,
							}}
						>
							<p>
								Fallingwater, a National Historic Landmark and a site inscribed
								on the UNESCO World Heritage List, is open for the 61st tour
								season with a variety of experiences for visitors to gain
								insights into Wright’s organic architecture and design
								philosophy, and discover the beauty of Fallingwater and its
								natural landscape.
							</p>
						</TravelOption>
						<TravelOption
							heading="Kentuck Knob"
							link={{
								text: 'Website',
								href: 'https://kentuckknob.com/',
							}}
							image={{
								src: '/images/things-to-do/kentuck-knob-tour.jpg',
								alt: 'Image of Kentuck Knob',
								width: 500,
								height: 400,
							}}
						>
							<p>
								On a guided tour of Kentuck Knob, visitors will learn about the
								Hagan family, Frank Lloyd Wright, the architect's vision for the
								house, and the Palumbo family's stewardship of this
								architectural treasure.
							</p>
						</TravelOption>
						<TravelOption
							heading="Polymath Park"
							link={{
								text: 'Website',
								href: 'https://www.franklloydwrightovernight.net/about-3',
							}}
							image={{
								src: '/images/things-to-do/polymath-park-tour.jpg',
								alt: 'Image of Polymath Park',
								width: 500,
								height: 400,
							}}
						>
							<p>
								At Polymath Park, the Wright Collections Tour is great for
								everyone. Whether you're new to Frank Lloyd Wright or an
								experienced fan, you'll get a wonderful view into the world of
								his Usonian designs. See both the Duncan House and Mäntylä,
								residences constructed in the 1950s and painstakingly moved to
								their current locations. Learn the history of these structures
								as well as their monumental preservation efforts.
							</p>
						</TravelOption>
					</div>
					<div className={s.smallerOptions}>
						<SectionHeading heading="Outdoor activities" />
						<TravelOption
							heading="Laurel Highlands River Tours"
							link={{
								text: 'Website',
								href: 'https://www.laurelhighlands.com/',
							}}
							image={{
								src: '/images/things-to-do/laurel-highlands-river-tours.jpg',
								alt: 'Image of Fallingwater interior',
								width: 500,
								height: 400,
							}}
						>
							<p>
								Laurel Highlands River Tours & Outdoor Center offers you the
								chance to experience all the splendor of the largest park in
								Pennsylvania, Ohiopyle State Park, with our many water and land
								activities.
							</p>
						</TravelOption>
						<TravelOption
							heading="Golfing"
							link={{
								text: 'Website',
								href: 'https://www.hartzellhouse.com/area.htm#golf',
							}}
							image={{
								src: '/images/things-to-do/golfing.jpg',
								alt: 'Image of Fallingwater interior',
								width: 500,
								height: 400,
							}}
						>
							<p>
								There are plenty of spots for golfing in the area. Check out the
								link for more information.
							</p>
						</TravelOption>
					</div>
					<div className={s.smallerOptions}>
						<SectionHeading heading="Other stuff" />
						<TravelOption
							heading="Casino at Nemacolin"
							link={{
								text: 'Website',
								href: 'https://www.casinonemacolin.com/',
							}}
							image={{
								src: '/images/things-to-do/casino.jpg',
								alt: 'Image of casino',
								width: 500,
								height: 400,
							}}
						>
							<p>
								Welcome to The Casino at Nemacolin, the luckiest spot in the
								Laurel Highlands. Try your hand at 26 table games, high limit
								gaming area, and 500 slot, keno, and video poker machines. With
								elevated dining, members-only perks, and exclusive promotions,
								you’ve just stumbled on your new favorite spot for gaming action
								in the mountains.
							</p>
						</TravelOption>
					</div>
					<div className={s.smallerOptions}>More coming soon!</div>
				</div>
			</div>
		</>
	)
}
