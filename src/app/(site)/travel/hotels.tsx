import Button from 'components/button'
import TravelOption from './components/option'
import SectionHeading from './components/section-heading'
import s from './travel.module.css'

export default function Hotels() {
	return (
		<div className={s.content}>
			<SectionHeading
				heading="Hotels"
				subtitle={
					<>
						<p>
							For each option below, follow the booking instructions to reserve.
						</p>
						<br />
						<p>
							The dates may be blocked out online but that doesn't mean they are
							booked - just that they are blocked off for the wedding. Once we
							know that an option has been booked, we will update this page.
						</p>
						<br />
						<p>
							Please feel free to reach out to us if you have any questions!
						</p>
					</>
				}
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
						phone: '8143955248',
					}}
				>
					<>
						<p>
							Hartzell house is extremely special. There is something
							indescribable about this property. It is impeccably clean and has
							colorful & artistic touches. There are several options available:
						</p>
						<ul>
							<li>
								<strong>Standalone Cottage:</strong> One loft queen bed & pull
								out mattress. Super cute!
							</li>
							<li>
								<strong>East wing Patriot Suite:</strong> King bed with en suite
								large bathroom. ADA compliant.
							</li>
							<li>
								<strong>East wing upstairs:</strong> 1 queen bedroom with en
								suite. 1 queen bedroom with private detached bathroom.
							</li>
							<li>
								<strong>West wing:</strong> 1 queen bedroom with en suite. 2
								queen bedrooms with shared detached bathroom.
							</li>
						</ul>
						<p>
							<strong>Booking instructions</strong>
						</p>
						<p>
							Call or text Melissa & Robert and let them know you are a guest of
							Pam & Jason's wedding. <i>$215-280/night</i>
						</p>
					</>
				</TravelOption>
				<TravelOption
					heading="Fernwalk"
					tags={['group']}
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
					}}
				>
					<p>
						Fernwalk is absolutely lovely. It offers 2 queen bedrooms, one with
						an en suite bathroom and one with a detached (but private) bathroom.
						There are also 2 single or 1 queen inflatable beds available that
						can be placed in the semi-private sunroom. Max 6 people. It is right
						next door to Hartzell House.
					</p>
					<p>
						Note: There is also one more property being built next door that
						will be available by the time of the wedding. It is almost identical
						to Fernwalk but will also have a private ADA compliant suite.
					</p>
					<p>
						<strong>Booking instructions:</strong>
					</p>
					<p>
						Call Beth and let her know that you are a guest of Pamela & Jason's
						wedding. <i>$270/night</i>
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
						phone: '8149640410',
					}}
				>
					<div>
						<p>
							Paddler's Lane has 3 options is absolutely beautiful. It has 3
							different homes on a large campground property with access to the
							river. The homes are:
						</p>
						<ul>
							<li>
								<strong>Chalet Rental with Apartment:</strong> The chalet has 3
								queen bedrooms and 1 sleeper sofa in the living room. It also
								has an attached basement apartment with one queen bedroom and 2
								single beds in the common area. <i>$290/night</i>
							</li>
							<li>
								<strong>Main House:</strong> 3 queen bedrooms and one sleeper
								sofa in the living den. There is also an attic area with 8
								single beds. <i>$425/night</i>
							</li>
							<li>
								<strong>Cabin:</strong> One king bedroom with private bathroom.
								One Queen bedroom with semi-private bath (shared with the single
								room). One single bedroom.<i>$325/night</i>
							</li>
						</ul>
						<p>
							<strong>Booking instructions</strong>
						</p>
						<p>
							Pam reserved this directly. Let Pam know if you are interested in
							any or all of these options via email hello@thedecastros.com or
							phone (516) 205-3754. Note: the cabin is cash only upon arrival
							paid to Robin
						</p>
						<p>
							If you have any other questions about the property, feel free to
							contact Robin and let her know that you are a guest of our
							wedding.
						</p>
					</div>
				</TravelOption>
				<TravelOption
					heading="Smith House Inn"
					tags={['individuals', 'couples']}
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
						The Smith House Inn offers 3 rooms and 1 suite with 2 bedrooms (so 5
						bedrooms total). All of the rooms are in one house. Contact Amber to
						book and let her know you are with the wedding!
					</p>
				</TravelOption>
				<TravelOption
					heading="Hanna House Bed & Breakfast"
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
				</TravelOption>
			</div>
			<div className={s.smallerOptions}>
				<SectionHeading
					heading="More Options"
					subtitle={
						<>
							Please let us know if you book one of these options (if you want)
							and we will do our best to coordinate transportation. See{' '}
							<a href="/faq">FAQ</a> for more information.
						</>
					}
				/>
				<TravelOption heading="Airbnb (or vrbo)">
					<p>
						There are plenty of other options in the area. We suggest sticking
						to <strong>Addison, Confluence, or Mill Run</strong> for the most
						convenient locations.
					</p>
					<Button
						text="Options in Confluence, PA"
						href="https://www.airbnb.com/s/Confluence--Pennsylvania--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=2&channel=EXPLORE&query=Confluence%2C%20PA&date_picker_type=calendar&checkin=2025-05-30&checkout=2025-06-01&source=structured_search_input_header&search_type=user_map_move&price_filter_num_nights=2&zoom_level=15.363981837111908&place_id=ChIJAfaHMGa1yokRnTtK0WnM6Yw&search_mode=regular_search&ne_lat=39.82520179134156&ne_lng=-79.35474150772177&sw_lat=39.80486463620985&sw_lng=-79.3727272212659&zoom=15.363981837111908&search_by_map=true"
					/>
					<Button
						text="Options in Mill Run, PA"
						href="https://www.airbnb.com/s/Mill-Run--Pennsylvania--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=2&channel=EXPLORE&query=Mill%20Run%2C%20PA&date_picker_type=calendar&checkin=2025-05-30&checkout=2025-06-01&source=structured_search_input_header&search_type=user_map_move&price_filter_num_nights=2&zoom_level=13.25241325996383&search_mode=regular_search&place_id=ChIJWYLHQzMyNYgRgCSmlC_aofs&ne_lat=39.957551124585486&ne_lng=-79.40274495983243&sw_lat=39.86978816891993&sw_lng=-79.48047218284779&zoom=13.25241325996383&search_by_map=true"
					/>
				</TravelOption>
				<TravelOption
					heading="Historic Summit Inn"
					link={{
						text: 'Website',
						href: 'https://www.summitinnresort.com/',
					}}
				/>
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
