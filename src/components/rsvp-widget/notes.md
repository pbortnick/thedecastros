1. https://www.oursvp.app/api/forms/IUZIpFfYkHlXZSYa11Et
2. https://www.oursvp.app/api/guests/Caren?id=IUZIpFfYkHlXZSYa11Et
3. https://www.oursvp.app/api/guests/IUZIpFfYkHlXZSYa11Et?id=IUZIpFfYkHlXZSYa11Et&guest=FeEiVqsAofBBXhCz0QJm

const guests = [{
    "partyName": "Caren Bennet and Plus 1",
    "hasRsvp": false,
    "partyId": "FeEiVqsAofBBXhCz0QJm",
    "updated": {
        "_seconds": 1728576072,
        "_nanoseconds": 948000000
    },
    "search": [
        "caren",
        "bennet",
        "plus 1"
    ],
    "invitees": {
        "4cf3dcaf-d5f4-4e0f-b158-f26d1ba68dd0": {
            "firstName": "Caren",
            "lastName": "Bennet",
            "isLeader": "true"
        },
        "3cfa04d6-c3a0-45b2-abed-ed8f34da1087": {
            "firstName": "Plus 1",
            "lastName": "Plus 1"
        }
    }
}]

const form = {
	data: {
		name: 'Ceremony & Reception',
		id: 'IUZIpFfYkHlXZSYa11Et',
		user: 'hello@thedecastros.com',
		isLive: true,
		eventDate: { _nanoseconds: 0, _seconds: 1748664000 },
		eventName: 'Wedding Weekend',
		questions: [
			{
				button: 'Continue',
				select: { no: 'No', yes: 'Yes' },
				title: 'Will you be attending the Welcome Event on Friday?',
				type: 'boolean',
			},
			{
				button: 'Submit',
				select: ['Yes', ' No'],
				title:
					'Are you interested in touring Fallingwater Saturday morning (around 10am)?',
				type: 'radio',
			},
			{
				button: 'Submit',
				select: ['Yes', ' No'],
				title: 'Will you be attending the Wedding on Saturday?',
				type: 'radio',
			},
			{
				button: 'Submit',
				select: null,
				title: 'Are there any dietary restrictions that we should know of?',
				type: 'text',
			},
			{
				button: 'Submit',
				select: null,
				title:
					"Where do you plan on staying? If you don't know yet, leave blank.",
				type: 'text',
			},
		],
	},
}

interface EventDate {
	_nanoseconds: number;
	_seconds: number;
}

interface Question {
	button: string;
	select: { [key: string]: string } | string[] | null;
	title: string;
	type: 'boolean' | 'radio' | 'text';
}

interface Step {
	data: {
		name: string;
		id: string;
		user: string;
		isLive: boolean;
		eventDate: EventDate;
		eventName: string;
		questions: Question[];
	};
}

