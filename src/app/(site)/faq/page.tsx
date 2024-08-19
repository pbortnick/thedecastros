import Hero from 'components/hero'
import s from './faq-page.module.css'
import Faq from 'components/faq'

export default function FAQPage() {
	return (
		<>
			<Hero
				title="FAQ"
				image={{
					src: require('./accent.png'),
					width: 402.75,
					height: 435,
					alt: '',
				}}
			/>
			<div className={s.root}>
				<ul className={s.list}>
					{faqList.map((faq) => (
						<Faq {...faq} />
					))}
				</ul>
			</div>
		</>
	)
}

const faqList = [
	{
		question: 'How can I reach Pam and Jason?',
		answer: (
			<p>
				Pam's phone number is (516) 205-3754
				<br />
				Our shared email address is hello@thedecastros.com
				<br />
				<br />
				Jason's phone number is (917) 676-1342. Feel free to text him if you
				don't mind waiting a few days for a response...
			</p>
		),
	},
	{
		question: 'What is the dress code?',
		answer:
			'Cocktail/formal attire is suggested but most importantly, we want you to feel comfortable and have fun!',
	},
]
