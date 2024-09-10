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
		answer:
			' We plan to schedule vehicles to & from the venue at a designated location in each of the main areas: 1) Ohiopyle/Mill Run (The Historic Summit House Inn & Rentals), 2) Confluence (Smith House Inn, AirBnBs, Paddler\s Lane), 3) Addison (Hartzell House/Fernwalk). We will do our absolute best to provide convenient transportation for each & every one of you. We will provide an exact pickup schedule closer to the wedding date.',
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
	{
		question: 'Why Fallingwater?',
		answer:
			'Fallingwater is a special place for us. We visited in 2020 and fell in love with the architecture and the natural beauty of the area. We hope you will love it as much as we do!',
	},
]
