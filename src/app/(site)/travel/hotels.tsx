import Button from 'components/button'
import TravelOption from './components/option'
import SectionHeading from './components/section-heading'
import s from './travel.module.css'

export default function Hotels() {
	return (
		<div className={s.content}>
			<SectionHeading
				heading="Places to Stay"
				subtitle={
					<>
						<p>
							For each option below, follow the booking instructions to reserve.
							Once we know that one of these options has has been fully booked,
							we will update this page.
						</p>
						<br />
						<p>
							Please feel free to reach out to us if you have any questions!
							Also visit our <a href="/faq">FAQ page</a> for more information.
						</p>
					</>
				}
			/>
			<div className={s.options}>
				<div className={s.smallerOptions}>
					<SectionHeading heading="Farmington, PA" />
					<TravelOption
						heading="The Historic Summit Inn"
						link={{
							text: 'Website',
							href: 'https://www.summitinnresort.com/',
						}}
						contact={{
							name: '',
							phone: '7244388594',
							instructions:
								"Call to book and let them know you are a guest of Pamela Bortnick & Jason Decastro's wedding",
						}}
						tags={['hotel rooms']}
						image={{
							src: '/images/hotels/historic-summit-inn.jpg',
							alt: 'Image of patio at the Historic Summit Inn',
							width: 500,
							height: 400,
						}}
					>
						<p>
							We have 5 kings rooms and 7 double rooms reserved at this hotel
							for the nights of May 30 & May 31
						</p>
						<p>The block will be available until April 1 2025</p>
						<span>
							<i>$244/night</i>
						</span>
					</TravelOption>
					<Button
						text="More options in Farmington"
						href="https://www.ohiopylevacationrentals.com/"
					/>
				</div>
				<div className={s.smallerOptions}>
					<SectionHeading heading="Confluence, PA" />
					<TravelOption
						isBooked
						heading="Paddler's Lane"
						// tags={['capacity: 22-28 guests']}
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
						// contact={{
						// 	name: 'Robin',
						// 	phone: '8149640410',
						// 	instructions: `Let Pam know if you are interested
						// 		in any or all of these options via email hello@thedecastros.com
						// 		or phone (516) 205-3754.`,
						// }}
					>
						{/* <>
							<p>
								Paddler's Lane is absolutely beautiful. It has 3 different homes
								on a large campground property with access to the river.
							</p>
							<ul>
								<li>
									<strong>Chalet Rental w/ Apartment:</strong> 3 queen bedrooms
									and 1 sleeper sofa. The attached basement apartment has 1
									queen bedroom and 2 single beds in the common area.
								</li>
								<li>
									<strong>Main House:</strong> 3 queen bedrooms, 1 sleeper sofa.{' '}
									<i className="caption">
										*There is also an attic area with 8 single beds.
									</i>
								</li>
								<li>
									<strong>Cabin:</strong> 1 king, 1 queen, and 1 single bedroom.{' '}
									<i className="caption">*cash only upon arrival</i>
								</li>
							</ul>
							<p>
								If you have specific questions about the property, feel free to
								contact Robin and let her know that you are a guest of our
								wedding.
							</p>
						</> */}
					</TravelOption>
					<TravelOption
						heading="Smith House Inn"
						tags={['Good for a group', 'Capacity: 10']}
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
							name: 'Amber',
							phone: '7243666142',
						}}
					>
						<p>
							The Smith House Inn offers 3 rooms and 1 suite with 2 bedrooms (so
							5 bedrooms total). All of the rooms are in one house. Click{' '}
							<a href="https://www.book-it-now.com/smithhouseinn/">here</a> to
							learn more about the rates. Contact Amber to book and let her know
							you are with the wedding!
						</p>
						<p>
							There are also many listings on AirBnB that are walking distance
							to this property (linked below)
						</p>
					</TravelOption>
					<div className={s.smallestOption}>
						<Button
							text="More options in Confluence"
							href="https://www.airbnb.com/s/Confluence--Pennsylvania--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=2&channel=EXPLORE&query=Confluence%2C%20PA&date_picker_type=calendar&checkin=2025-05-30&checkout=2025-06-01&source=structured_search_input_header&search_type=user_map_move&price_filter_num_nights=2&zoom_level=15.363981837111908&place_id=ChIJAfaHMGa1yokRnTtK0WnM6Yw&search_mode=regular_search&ne_lat=39.82520179134156&ne_lng=-79.35474150772177&sw_lat=39.80486463620985&sw_lng=-79.3727272212659&zoom=15.363981837111908&search_by_map=true"
						/>
						<span className="caption">
							<i>walking distance from Smith House Inn</i>
						</span>
					</div>
					{/* <TravelOption
					heading="Hanna House Bed & Breakfast (up to 12 people)"
					tags={['individuals', 'couples', 'group']}
					image={{
						src: '/images/hotels/hanna-house.jpg',
						width: 500,
						height: 400,
						alt: 'Image of Hanna House BnB',
					}}
					link={{
						text: 'Rooms',
						href: 'http://www.hannahousebandb.net/rooms---rates',
					}}
					contact={{
						name: 'Frances',
						phone: '8143959466',
					}}
				>
					<p>
						Hanna House has one of the coolest bathrooms we've ever seen with an
						actual tree inside of it. Frances is the owner and she is super
						sweet. When we visited, we were treated to delicious homemade iced
						tea and fresh veggies from her garden. Check out the rooms available
						and see if it works for you. Let her know you are with the wedding
						and your third night will be half off!
					</p>
					<p>
						Just a note: Hanna House doesn't have A/C but there are ceiling fans
						and the place is breezy
					</p>
					<ul>
						<li>
							<strong>First floor:</strong> 1 bedroom with 2 single beds &
							private bathroom <i>$140/night</i>
						</li>
						<li>
							<strong>Second floor:</strong> 3 bedrooms with a full bed in each
							& a shared bathroom <i>$125/night each</i>
						</li>
						<li>
							<strong>Third floor:</strong> 1 bedroom with a full bed, 1 bedroom
							with 2 singles, one shared bathroom <i>$125/night each</i>
						</li>
					</ul>
				</TravelOption> */}
				</div>
				<div className={s.smallerOptions}>
					<SectionHeading heading="Addison, PA" />
					<TravelOption
						// isBooked
						heading="Hartzell House"
						tags={['14-18 guests']}
						// tags={['groups', 'individuals', 'couples']}
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
							phone: '8143955248',
						}}
					>
					<>
							<p>
								Hartzell house is a special place. There is something
								indescribable about this property. It is impeccably clean with
								whimsical touches.
							</p>
							<ul>
								<li>
									<strong>Cottage:</strong> 1 lofted queen bed & pull out
									mattress
								</li>
								<li>
									<strong>East wing upstairs:</strong> 1 king & 2 queen bedrooms
								</li>
								<li>
									<strong>West wing:</strong> 3 queen bedrooms
								</li>
							</ul>
							<span>
								<i>$215-280/night</i>
							</span>
						</>
					</TravelOption>
					<TravelOption
						// isBooked
						heading="Fernwalk"
						tags={['max 6 guests']}
						image={{
							src: '/images/hotels/fernwalk.jpeg',
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
							phone: '2153130112',
							instructions: `Call Beth and let her know that you are a guest of Pamela &
							Jason's wedding.`,
						}}
					>
					<p>
							Fernwalk is right next door to the Hartzell House and they share
							amenities. with an en suite bathroom and one with a detached (but
							private) bathroom. There are also 2 single or 1 queen inflatable
							beds available that can be placed in the semi-private sunroom.
						</p>
						<p>
							Note: There is another property being built next door that will be
							available by the time of the wedding. It is almost identical to
							Fernwalk but will also have a private ADA compliant suite.
						</p>
						<span>
							<i>$215-280/night for the house</i>
						</span>
					</TravelOption>
					<Button
						text="More options in Addison"
						href="https://www.airbnb.com/rooms/960911509298197520"
					/>
				</div>
			</div>
			<div className={s.smallerOptions}>
				<SectionHeading
					heading="More Options"
					subtitle={
						<>
							Please let us know if you book one of these options and we will do
							our best to coordinate transportation. See <a href="/faq">FAQ</a>{' '}
							for more information.
						</>
					}
				/>
				<TravelOption heading="Rental Sites">
					<p>
						There are plenty of other options in the area. We suggest finding to{' '}
						<strong>Addison, Confluence, & Farmington/Chalk Hill</strong> for
						the most convenient locations.
					</p>
					{/* <div>
						<Button
							text="AirBnB in Confluence, PA"
							href="https://www.airbnb.com/s/Confluence--Pennsylvania--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=2&channel=EXPLORE&query=Confluence%2C%20PA&date_picker_type=calendar&checkin=2025-05-30&checkout=2025-06-01&source=structured_search_input_header&search_type=user_map_move&price_filter_num_nights=2&zoom_level=15.363981837111908&place_id=ChIJAfaHMGa1yokRnTtK0WnM6Yw&search_mode=regular_search&ne_lat=39.82520179134156&ne_lng=-79.35474150772177&sw_lat=39.80486463620985&sw_lng=-79.3727272212659&zoom=15.363981837111908&search_by_map=true"
						/>
						<span className="caption">
							<i>walking distance from Smith House Inn</i>
						</span>
					</div> */}
					{/* <div>
						<Button
							text="Turning Leaf Rentals"
							href="https://www.turningleafrentals.com/fallingwater/"
						/>
						<span className="caption">
							<i>Contact: Lindsay Zeuch sales@turningleafrentals.com</i>
						</span>
					</div> */}
					{/* <Button
						text="Ohiopyle Vacation Rentals"
						href="https://www.ohiopylevacationrentals.com/"
					/> */}
					{/* <Button
						text="AirBnB in Mill Run, PA"
						href="https://www.airbnb.com/s/Mill-Run--Pennsylvania--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=2&channel=EXPLORE&query=Mill%20Run%2C%20PA&date_picker_type=calendar&checkin=2025-05-30&checkout=2025-06-01&source=structured_search_input_header&search_type=user_map_move&price_filter_num_nights=2&zoom_level=14.956766308102925&search_mode=regular_search&place_id=ChIJWYLHQzMyNYgRgCSmlC_aofs&ne_lat=39.905042576124&ne_lng=-79.45026461168567&sw_lat=39.87810304703659&sw_lng=-79.47411589554753&zoom=14.956766308102925&search_by_map=true"
					/> */}
				</TravelOption>
				<TravelOption
					heading="Nemacolin"
					link={{
						text: 'Website',
						href: 'https://www.nemacolin.com/',
					}}
				>
					Nemacolin is a pricey option but absolutely beautiful. You may
					recognize it from Matt James' season of The Bachelor. Or maybe thats
					just me 🤷‍♀️
				</TravelOption>
			</div>
		</div>
	)
}
