// TODO: update error handling

const API_URL = 'https://www.oursvp.app/api'

interface EventDate {
	_nanoseconds: number
	_seconds: number
}

interface Question {
	button: string
	select: { [key: string]: string } | string[] | null
	title: string
	type: 'boolean' | 'radio' | 'text'
}

interface Form {
	data: {
		name: string
		id: string
		user: string
		isLive: boolean
		eventDate: EventDate
		eventName: string
		questions: Question[]
	}
}

export const getForm = async (eventId: string) => {
	try {
		const response = await fetch(`${API_URL}/forms/${eventId}`)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const form: Form = await response.json()
		const eventDate = new Intl.DateTimeFormat('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}).format(1e3 * form.data.eventDate._seconds)

		return {
			...form.data,
			eventDate,
		}
	} catch (error) {
		throw new Error(`fetch error: ${error}`)
	}
}

export type GetFormData = Awaited<ReturnType<typeof getForm>>

interface Invitee {
	firstName: string
	lastName: string
	isLeader?: string
}

export interface Guest {
	partyName: string
	hasRsvp: boolean
	partyId: string
	updated: EventDate
	search: string[]
	invitees: {
		[key: string]: Invitee
	}
}

export type Guests = Array<Guest>

export const searchGuests = async (name: string, eventId: string) => {
	try {
		const response = await fetch(`${API_URL}/guests/${name}?id=${eventId}`)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const guestsData: { data: Guests } = await response.json()

		if (guestsData.data.length === 0) {
			return `Looks like we're having trouble finding your invite. Try another spelling of your name (ex. “David” vs. “Dave”) or contact the couple!`
		}

		return guestsData.data
	} catch (error) {
		throw new Error(`fetch error: ${error}`)
	}
}
