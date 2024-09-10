import Balancer from 'react-wrap-balancer'
import s from './faq.module.css'

interface FaqProps {
	question: string
	answer: string | TrustedHTML
}

export default function Faq({ question, answer }: FaqProps) {
	return (
		<div className={s.root}>
			<div className={s.question}>
				<Balancer>{question}</Balancer>
			</div>
			<div className={s.answer}>
				<Balancer>
					<div dangerouslySetInnerHTML={{ __html: answer }} />
				</Balancer>
			</div>
		</div>
	)
}
