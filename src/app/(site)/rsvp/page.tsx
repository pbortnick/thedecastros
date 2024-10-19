import Hero from 'components/hero'
import RsvpWidget from 'components/rsvp-widget'
import { getForm } from 'components/rsvp-widget/utils'

const EVENT_ID = 'IUZIpFfYkHlXZSYa11Et'

const Rsvp = async () => {
	const data = await getForm(EVENT_ID)

	return (
		<>
			<Hero title="RSVP" subtitle="Wedding Weekend" />
			<RsvpWidget eventId="IUZIpFfYkHlXZSYa11Et" {...data} />
		</>
	)
}

export default Rsvp
