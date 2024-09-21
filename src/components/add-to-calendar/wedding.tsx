'use client'

import { AddToCalendarButton } from 'add-to-calendar-button-react'

const WeddingAddToCalendar = () => (
	<AddToCalendarButton
		name="Pamela Bortnick & Jason Decastro's Wedding"
		description="https://thedecastros.com/"
		startDate="2025-05-31"
		startTime="16:00"
		endDate="2025-05-31"
		endTime="23:00"
		timeZone="America/New_York"
		location="The Barn at Fallingwater, 1478 Mill Run Rd, Mill Run, PA 15464, USA"
		options="'Apple','Google','iCal','Outlook.com','Yahoo'"
		hideBackground
		buttonStyle="round"
		size="5|5|5"
		hideIconButton
		hideBranding
	/>
)

export default WeddingAddToCalendar
