import Hero from 'components/hero'
import RsvpWidget from './components/rsvp-widget'

const Home = () => {
	return (
		<>
			<Hero title="RSVP" />
			<div style={{ margin: '0 auto', maxWidth: '90%', width: 'fit-content' }}>
				<p>If the form below does not load, please refresh the page.</p>
			</div>
			<RsvpWidget />
		</>
	)
}

export default Home
