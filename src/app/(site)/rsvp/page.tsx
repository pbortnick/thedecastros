// pages/index.js
import Hero from 'components/hero'
import RsvpWidget from './components/rsvp-widget'

const Home = () => {
	return (
		<>
			<Hero title="RSVP" />
			<RsvpWidget eventId="IUZIpFfYkHlXZSYa11Et" />
		</>
	)
}

export default Home
