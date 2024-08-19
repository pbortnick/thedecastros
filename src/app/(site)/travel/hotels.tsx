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
							For each option listed below, call or text the phone number and
							let them know you are a guest of Pamela Bortnick & Jason
							Decastro's wedding.
						</p>
						{/* <br />
						<p>
							Please feel free to reach out to us if you have any questions!
						</p>
						<br />
						<p>
							Also check back in. We may be adding more options to this page as
							time goes on.
						</p> */}
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
						phone: '(814) 395-5248',
					}}
				>
					<>
						<p>
							Check out the rooms and either book for a single room for yourself
							or get a group together and book the entire house (max 15
							people)
						</p>
					</>
				</TravelOption>
				<TravelOption
					heading="Fernwalk"
					tags={['group']}
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
						Fernwalk offers 2 queen beds, and a queen inflatable or two twin
						inflatables. Max 6 people.
					</p>
				</TravelOption>
				{/* <TravelOption
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
					<p>
						Smith House Inn has 3 options:
						<ul>
							<li>Chalet (6 guests)</li>
							<li>Main House (6 guests)</li>
							<li>Cabin (5 guests)</li>
						</ul>
					</p>
				</TravelOption> */}
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
						Check out the rooms and either book for a single room for yourself
						or get a group together and book the whole house (max 10 people)
					</p>
				</TravelOption>
			</div>
			<div className={s.smallerOptions}>
				<SectionHeading
					heading="More Options"
					subtitle={
						<>
							Please let us know if you book one of these options (or something
							else) and we will do our best to coordinate transportation. See{' '}
							<a href="/faq">FAQ</a> for more information.
						</>
					}
				/>
				<TravelOption
					heading="Airbnb"
					link={{
						text: 'View nearby options',
						href: 'https://www.airbnb.com/s/Mill-Run--Pennsylvania--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-09-01&monthly_length=3&monthly_end_date=2024-12-01&price_filter_input_type=2&channel=EXPLORE&query=Mill%20Run%2C%20PA&place_id=ChIJWYLHQzMyNYgRgCSmlC_aofs&date_picker_type=calendar&checkin=2025-05-30&checkout=2025-06-01&source=structured_search_input_header&search_type=user_map_move&search_mode=regular_search&price_filter_num_nights=2&ne_lat=39.94085860566678&ne_lng=-79.41433728380179&sw_lat=39.85816448922689&sw_lng=-79.48842078877027&zoom=13.301733431116443&zoom_level=13.301733431116443&search_by_map=true',
					}}
				>
					<p>
						There are plenty of options in the surrounding areas but if you will
						require transportation, the closer to the hotels listed above the
						better!
					</p>
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
					You may recognize this one from Matt James' season of The Bachelor. Or
					maybe thats just me 🤷‍♀️
				</TravelOption>
			</div>
		</div>
	)
}
