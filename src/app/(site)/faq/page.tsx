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
		question: 'How can I reach Pam and Jason?',
		answer: 'You can email us at hello@thedecastros.com or call/text our cells',
	},
	// {
	// 	question: 'PA has weird alcohol laws. Help?',
	// 	answer:
	// 		"If you are driving from out of town, you may want to stock up for your stay. There is alcohol delivery available but it is limited. We don't know all of the rules but it definitely isn't NY here. Alcohol will be plentiful at all of the wedding events so don't worry about that!",
	// },
	{
		question: 'What is the dress code?',
		answer:
			'Cocktail attire is suggested but most importantly, we want you to feel comfortable and have fun!',
	},
	{
		question: 'Will transportation be provided?',
		answer: `<span>We plan to schedule vehicles to & from the venue at a designated location in each of the main areas: 1) Ohiopyle <i>(The Historic Summit House Inn & Rentals Sites)</i>, 2) Confluence <i>(stops at both Smith House Inn/AirBnBs and Paddler\s Lane)</i>, 3) Addison <i>(Hartzell House/Fernwalk)</i>. We will provide an exact pickup schedule closer to the wedding date.</span>`,
	},
	{
		question: 'Does the venue have parking?',
		answer: 'Yes, there is parking available at the venue.',
	},
	{
		question: 'Is the wedding indoors or outdoors?',
		answer:
			'The ceremony will be outdoors. The cocktail hour will be outdoors & tented. The reception will be inside the barn.',
	},
	// {
	// 	question: 'Can I bring my kids?',
	// 	answer:
	// 		'We love kids and would love to have them at the wedding. Please let us know if you plan to bring your children so we can accommodate.',
	// },
	{
		question: 'Can I bring a plus one?',
		answer:
			'Unfortunately, our venue has a strict limit on the number of guests we can have. However, we will do our best to accommodate plus ones for all of our guests. If you do not see a plus one option on your RSVP and would like to bring someone, please reach out to us.',
	},
	{
		question:
			'I am having trouble RSVPing through the website. What should I do?',
		answer:
			'Please email us at hello@thedecastros.com with the subject line “RSVP” and let us know if you will be attending the welcome event on friday and the wedding on saturday. Please include your name and your guest’s name if applicable.',
	},
	{
		question: 'Why Fallingwater?',
		answer:
			"Fallingwater is a special place for us. We visited in 2020 and fell in love with the architecture and the natural beauty of the area. In addition, Pam's grandfather, Julian Moss, was a builder and was a big fan of Frank Lloyd Wright so choosing this location was in tribute to him. We hope you will love it as much as we do!",
	},
]
