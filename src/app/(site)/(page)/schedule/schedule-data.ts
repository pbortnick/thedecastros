interface ScheduleData {
	id: string
	title: string
	titleLink?: {
		text: string
		link: string
	}
	time?: string
	details?: string
	address?: {
		text: string
		link: string
	}
}

export const scheduleData: Array<{ day: string; items: Array<ScheduleData> }> =
	[
		{
			day: 'Friday',
			items: [
				{
					id: 'welcome_event',
					title: 'Welcome event at ',
					titleLink: {
						link: 'https://www.treetopsrestaurant.net',
						text: 'Treetops Restaurant',
					},
					time: '6pm - 8pm',
					address: {
						text: '187 Evergreen Lane, Acme Pa 15610',
						link: 'https://maps.app.goo.gl/DWRwFEDQMkNNqgyz7',
					},
					details:
						'Keeping in theme with the weekend, we will kick off the weekend at Treetops restaurant located in Polymouth Park, home to 4 Frank Lloyd Wright homes',
				},
			],
		},
		{
			day: 'Saturday',
			items: [
				{
					id: 'saturday_day',
					title: 'Group tours at ',
					titleLink: {
						text: 'Fallingwater',
						link: 'https://fallingwater.org/visit/fallingwater-tours/',
					},
					time: '11am - 2pm',
					address: {
						text: '1491 Mill Run Road, Mill Run, PA 15464',
						link: 'https://maps.app.goo.gl/Zut1RfyGQH1Yvoc2A',
					},
					details:
						'We will schedule our guests in groups to get a private tour of the grounds',
				},
				{
					id: 'main_event',
					title: 'Ceremony & Reception at ',
					titleLink: {
						link: 'https://fallingwater.org/history-barn-fallingwater',
						text: 'The Barn at Fallingwater',
					},
					time: '4:30pm - 10pm',
					address: {
						text: '1478 Mill Run Rd, Mill Run, PA 15464',
						link: 'https://maps.app.goo.gl/nvxHYZxzrYAhgkjc7',
					},
					details: 'The main event',
				},
				{
					id: 'afterparty',
					title: 'Afterparty at ',
					titleLink: {
						text: 'The Wicked Googly',
						link: 'https://thewickedgoogly.com',
					},
					time: '11pm-2am',
					address: {
						text: '209 W Main St, Ligonier, PA 15658',
						link: 'https://maps.app.goo.gl/PS6PrRZgs7LJAu4j6',
					},
					details: 'Unlimited bowling and open bar',
				},
			],
		},
		{
			day: 'Sunday',
			items: [
				{
					id: 'brunch',
					title: 'Brunch - more details soon',
				},
			],
		},
	]
