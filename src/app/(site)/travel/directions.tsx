import TravelOption from './components/option'
import SectionHeading from './components/section-heading'
import s from './travel.module.css'

export default function Directions() {
	return (
		<div className={s.content}>
			<SectionHeading
				heading="Travel"
				subtitle={
					<>
						For more information visit{' '}
						<a
							className={s.link}
							href="https://fallingwater.org/visit/hotels-attractions-travel-information/travel-advisories/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Fallingwater's website
						</a>
					</>
				}
			/>
			<TravelOption heading="Airports">
				<>
					<ul className={s.list}>
						<li>
							<a
								className={s.link}
								href="https://www.palmerairport.com/airport/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Arnold Palmer Regional Airport
							</a>
							<br />
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
							<br />
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
							<br />
							<span>~1 hr drive</span>
						</li>
					</ul>
				</>
			</TravelOption>
			<TravelOption heading="Trains & Buses">
				<>
					<ul className={s.list}>
						<li>
							<a
								className={s.link}
								href="https://www.amtrak.com/stations/gnb"
								target="_blank"
								rel="noopener noreferrer"
							>
								Amtrak to Greensburg, PA
							</a>
							<br />
							<span>45 min drive</span>
						</li>
						<li>
							<a
								className={s.link}
								href="https://shop.greyhound.com/search?departureCity=c0a47c54-53ea-46dc-984b-b764fc0b2fa9&arrivalCity=2a183f67-8ad3-4c8b-bbbd-7eac2c67241d&route=New+York%2C+NY-Greensburg%2C+PA&rideDate=30.05.2025&backRideDate=01.06.2025&adult=1&_locale=en_US&backRide=1&features%5Bfeature.enable_distribusion%5D=1&features%5Bfeature.train_cities_only%5D=0&features%5Bfeature.auto_update_disabled%5D=0&features%5Bfeature.webc_search_us_veterans_promoted%5D=0&features%5Bfeature.darken_page%5D=1&atb_pdid=0aae0fb9-922a-4bae-a692-b82498571746&_sp=34032660-4958-48ee-bba2-4d08c03ba36f&_spnuid=8e601d18-37dd-4e0f-bbed-c1413ff0fdf2_1725394445366"
								target="_blank"
								rel="noopener noreferrer"
							>
								Greyhound to Greensburg, PA
							</a>
							<br />
							<span>50 min drive</span>
						</li>
					</ul>
				</>
			</TravelOption>
		</div>
	)
}
