import TravelOption from '../components/option'
import Hero from 'components/hero'
// import SectionHeading from '../components/section-heading'
import s from '../travel.module.css'

export default function Dining() {
	return (
		<>
			<Hero
				title="Dining"
				image={{
					src: require('../accent.png'),
					width: 402.75,
					height: 435,
					alt: '',
				}}
			/>
			<div className={s.content}>
				<div className={s.options}>
					<div className={s.smallerOptions}>
						{/* <SectionHeading heading="Tour Frank Lloyd Wright Properties" /> */}
						<TravelOption
							heading="Treetops Restaurant"
							link={{
								text: 'Website',
								href: 'https://www.treetopsrestaurant.net/',
							}}
							image={{
								src: '/images/dining/treetops.jpg',
								alt: 'Image of Treehouse dining',
								width: 500,
								height: 400,
							}}
						>
							<p>
								Once the owner's private home, now transformed into a
								destination for all to enjoy... return to nature while enjoying
								world-renowned culinary inside your personal Treehouse style
								dining pod or allow our chef to expand your palate, with our
								in-house multi-course Branch Dining Experience.
							</p>
							<p>Reservations required.</p>
						</TravelOption>
						<TravelOption
							heading="Bittersweet Cafe"
							link={{
								text: 'Website',
								href: 'https://www.bittersweetfresh.com/',
							}}
							image={{
								src: '/images/dining/bittersweet-cafe.png',
								alt: 'Image of Bittersweet Cafe outside',
								width: 500,
								height: 400,
							}}
						>
							<p>
								Bittersweet Café provides the mountain and beyond with fresh,
								delicious small-batch food and drink. Unwilling to sacrifice
								quality for large-scale production prioritizing speed, we are
								putting flavor first. We have sought and found a way to eat
								better.
							</p>
						</TravelOption>
						<TravelOption
							heading="Brewery and the Beast"
							link={{
								text: 'Website',
								href: 'https://breweryandthebeastmd.com/',
							}}
							image={{
								src: '/images/dining/brewer-and-the-beast.jpg',
								alt: 'Image of Brewery and the Beast outside',
								width: 500,
								height: 400,
							}}
						>
							<p>
								Enjoy unique beers crafted exclusively in Garrett County, MD.
							</p>
						</TravelOption>
						<TravelOption
							heading="Twisted Spoke Cafe"
							link={{
								text: 'Website',
								href: 'https://gettwistedohiopyle.com/',
							}}
							image={{
								src: '/images/dining/twisted-spoke-cafe.jpg',
								alt: 'Image of Twisted Spoke Cafe',
								width: 500,
								height: 400,
							}}
						>
							<p>
								Nestled in Southwest PA's scenic Laurel Highlands, in the heart
								of Ohiopyle, sits the Twisted Spoke Cafe. Passionate about more
								than just great food and drinks, our goal is to provide
								exceptional customer service in a family-friendly atmosphere.
								Make the Twisted Spoke your go-to spot for a great meal while
								enjoying the natural beauty of Ohiopyle State Park.
							</p>
						</TravelOption>
						<TravelOption
							heading="The Historic Stone House Restaurant & Inn"
							link={{
								text: 'Website',
								href: 'https://www.stonehouseinn.com/',
							}}
							image={{
								src: '/images/dining/stone-house.jpg',
								alt: 'Image of The Historic Stone House Restaurant & Inn',
								width: 500,
								height: 400,
							}}
						>
							<p>
								The Stone House Restaurant and Country Inn, located in
								Pennsylvania's scenic Laurel Mountains, is proud to continue a
								time-honored tradition of fine dining and rest for the weary
								traveler. One of the original wayside inns along the National
								Road, the Stone House first opened its doors in 1822 to wagoners
								and travelers seeking renewed health in the waters of nearby
								Fayette Springs. Ever since those early days, the Stone House
								has been regarded by travelers and locals alike as a charming
								getaway for fine dining and good times in a peaceful mountain
								setting.
							</p>
						</TravelOption>
						<TravelOption
							heading="Rivers Edge Cafe"
							link={{
								text: 'Website',
								href: 'https://www.riversedgecafebnb.com/',
							}}
							image={{
								src: '/images/dining/rivers-edge-cafe.jpg',
								alt: 'Image of The Rivers Edge Cafe',
								width: 500,
								height: 400,
							}}
						>
							<p>
								Enjoy the casual elegance of the River’s Edge Cafe on the banks
								of the Youghiogheny cafe_outside_view1River, in the quaint
								mountain village of Confluence, Pennsylvania. Dine on the
								wrap-around porch overlooking the river, or inside the old-world
								1890’s farmhouse. Long a favorite of bicyclists on the Great
								Allegheny Passage. Established in 1989, our specialties include
								seafood, steaks, pasta,soups, salads and all your favorite wine
								and spirits.
							</p>
						</TravelOption>
					</div>
					<div className={s.smallerOptions}>
						<div className={s.optionText}>
							<p>For more, visit the following guides:</p>
							<ul>
								<li>
									<a href="https://www.golaurelhighlands.com/food-drink/?skip=12&bounds=false&view=grid&sort=qualityScore&filter_regions%5B0%5D=72">
										Go Lauren Highlands Guide
									</a>
								</li>
								<li>
									<a href="https://www.hartzellhouse.com/area.htm#wineanddine">
										Hartzell House Guide
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
