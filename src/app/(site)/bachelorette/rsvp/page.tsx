import Hero from 'components/hero'
import RsvpWidget from 'components/rsvp-widget/old'

const Rsvp = () => {
	return (
		<>
			<Hero title="RSVP" subtitle="Pam's bachelorette party!" />
			<p
				className="centered-text body"
				style={{
					paddingTop: 'var(--spacing-03)',
					paddingBottom: 'var(--spacing-03)',
				}}
			>
				Please submit your RSVP by Oct 31.
			</p>
			<div className="container details">
				<p className="centered-text">
					<strong>When: </strong>Feb 14 - Feb 17
				</p>
				<p className="centered-text">
					<strong>Where: </strong>Las Vegas, NV
				</p>
			</div>
			<div className="bachelorette-rsvp">
				<RsvpWidget eventId="26yInM3B8aaTu0Az2SSX" />
			</div>
		</>
	)
}

export default Rsvp
