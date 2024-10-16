import Hero from 'components/hero'
import RsvpWidget from './widget'

const RsvpPage = () => {
	return (
		<>
			<Hero title="RSVP" />
			<div style={{ margin: '0 auto', maxWidth: '90%', width: 'fit-content' }}>
				<p>RSVP for Pamela & Jason's wedding weekend</p>
			</div>
			<RsvpWidget />
		</>
	)
}

export default RsvpPage
