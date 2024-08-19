import type { ReactNode } from 'react'
import s from './faq.module.css'

interface FaqProps {
	question: string
	answer: ReactNode
}

export default function Faq({ question, answer }: FaqProps) {
	return (
		<div className={s.root}>
			<div className={s.question}>{question}</div>
			<div className={s.answer}>{answer}</div>
		</div>
	)
}
