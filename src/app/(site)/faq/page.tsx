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
		// <>
		// 	Pam's phone number is (516) 205-3754
		// 	<br />
		// 	Our shared email address is hello@thedecastros.com
		// 	<br />
		// 	Jason's phone number is (917) 676-1342.
		// 	<br />
		// 	Feel free to text him if you don't mind waiting a few days for a
		// 	response...
		// </>
	},
	{
		question: 'PA has weird alcohol laws. Help?',
		answer:
			"If you are driving from out of town, you may want to stock up for your stay. There is alcohol delivery available but it is limited. We don't know all of the rules but it definitely isn't NY here. Alcohol will be plentiful at all of the wedding events so don't worry about that!",
	},
	{
		question: 'What is the dress code?',
		answer:
			'Cocktail/casual attire is suggested but most importantly, we want you to feel comfortable and have fun!',
	},
	{
		question: 'Will transportation be provided?',
		answer:
			'Transportation will be provided from the designated hotels to the venue and back. After party plans are TBD but we will make sure everyone gets home safely.',
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
