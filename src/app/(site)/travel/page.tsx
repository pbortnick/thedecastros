import Hero from 'components/hero'
import Tabs from 'components/tabs'
import Hotels from './hotels'
import Directions from './directions'
import Attractions from './attractions'

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
			<Tabs
				tabs={[
					{
						id: 'hotels',
						label: 'Hotels',
						content: <Hotels />,
					},
					{
						id: 'directions',
						label: 'Directions',
						content: <Directions />,
					},
					{
						id: 'attractions',
						label: 'Attractions',
						content: <Attractions />,
					},
				]}
			/>
		</>
	)
}
