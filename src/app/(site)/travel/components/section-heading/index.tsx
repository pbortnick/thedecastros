import type { ReactNode } from 'react'
import s from './section-heading.module.css'

interface SectionHeadingProps {
	heading: string
	subtitle?: ReactNode
}

export default function SectionHeading({
	heading,
	subtitle,
}: SectionHeadingProps) {
	return (
		<div className={s.root}>
			<h2 className="heading-2">{heading}</h2>
			{subtitle && <span className={s.subtitle}>{subtitle}</span>}
		</div>
	)
}
