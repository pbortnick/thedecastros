import Faq from 'components/faq'
import Hero from 'components/hero'
import s from './faq-page.module.css'

export default function FAQPage() {
	return (
		<>
			<Hero
				title="FAQ"
				image={{
					src: require('./accent.png'),
					width: 2752,
					height: 2064,
					alt: '',
				}}
			/>
			<div className={s.root}>
				<ul className={s.list}>
					{faqList.map((faq) => (
						<>
							<li key={faq.question} className={s.item}>
								<Faq {...faq} />
							</li>
							<li>
								<div className={s.divider} />
							</li>
						</>
					))}
				</ul>
			</div>
		</>
	)
}

const faqList = [
	{
		question: 'Why Fallingwater?',
		answer:
			"<p>In the challenging days of 2020, during the height of lockdown, Jason planned a surprise birthday getaway for Pam, something outdoors, peaceful, and meaningful. He remembered her long-standing admiration and fascination for Fallingwater, a place she mentioned (more than once) wanting to visit someday. By some stroke of luck, they were offering self-guided tours at the time.</p><br /><p>Without revealing the destination, Jason booked the tickets, found a cozy Airbnb nearby, and simply told Pam to pack a bag. Normally, she could guess every surprise he had up his sleeve but this time, she was genuinely stumped.</p><p>When they finally arrived, Pam was overjoyed. Seeing Fallingwater in person exceeded even both Pam and Jason's highest expectations. The architecture, the setting, the serenity—it was breathtaking.</p><br /><p>After five years together and many shared adventures, that trip remains one of their most cherished memories.<p>In addition, Pam’s grandfather, Julian Moss, was a gifted builder with a deep admiration for Frank Lloyd Wright. He even had the opportunity to attend one of Wright’s talks, a memory he cherished. Choosing this venue is a heartfelt tribute to Julian.</p><br /><p>We hope you get the chance to visit the home during your stay. It’s a truly magical place.</p>",
	},
	{
		question: 'How can I reach Pam and Jason?',
		answer: 'You can email us at hello@thedecastros.com or call/text our cells',
	},
	{
		question: 'What is the dress code?',
		answer:
			'<p>Semi-formal/Cocktail attire is suggested. But most importantly, we want you to feel comfortable and have fun!</p><br /><p>Don\'t put pressure on yourself to "get it right". If you feel good, we do too.</p>',
	},
	{
		question: 'Will transportation be provided?',
		answer: `<div>
		<p><strong>Yes!</strong></p>
		<br/>
				<p>Vehicles will depart from these locations at 4:30pm</p>
				<br />
				<div>
					<strong>Addison</strong>
					<div>
						<li>539 Main St</li>
						<li>Hartzell House</li>
						<li>Petersburg Tollhouse</li>
					</div>
				</div>
				<br />
				<div>
					<strong>Confluence</strong>
					<div>
						<li>Casselman Cabin</li>
						<li>Smith House Inn</li>
					</div>
				</div>
				<br />
				<div>
					<strong>Farmington</strong>
					<div>
						<li>Historic Summit Inn</li>
					</div>
				</div>
				<br />
				<div>
					<strong>Mill Run</strong>
					<br />
					<i>*Vehicle will depart at <strong>5pm</strong></i>
					<div>
						<li>53 Miller Rd</li>
					</div>
				</div>
				<br />
				<br />
				<p>At the end of the night, shuttles will leave the Barn at 10pm and 11pm</p>
			</div>`,
	},
	{
		question: 'Does the venue have parking?',
		answer: 'Yes, there is parking available at the venue.',
	},
	{
		question: 'Can I leave my car there overnight?',
		answer: 'Yes!',
	},
	{
		question:
			"I'm having trouble booking an Uber. Is there a car service around?",
		answer: 'Call Barbie (724) 557-4241 for help',
	},
	{
		question: 'Is the wedding indoors or outdoors?',
		answer:
			'The ceremony will be outdoors. The cocktail hour will be outdoors & tented. The reception will be inside.',
	},
	// {
	// 	question: 'Can I bring my kids?',
	// 	answer:
	// 		'We love kids and would love to have them at the wedding. Please let us know if you plan to bring your children so we can accommodate.',
	// },
	// {
	// 	question: 'Can I bring a plus one?',
	// 	answer:
	// 		'Unfortunately, our venue has a strict limit on the number of guests we can have. However, we will do our best to accommodate plus ones for all of our guests. If you do not see a plus one option on your RSVP and would like to bring someone, please reach out to us.',
	// },
	// {
	// 	question:
	// 		'I am having trouble RSVPing through the website. What should I do?',
	// 	answer:
	// 		'Please email us at hello@thedecastros.com with the subject line “RSVP” and let us know if you will be attending the welcome event on friday and the wedding on saturday. Please include your name and your guest’s name if applicable.',
	// },
]
