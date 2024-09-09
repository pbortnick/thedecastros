import type { ReactNode } from 'react'
import s from './section-heading.module.css'
import classNames from 'classnames'

interface SectionHeadingProps {
	heading: string
	subtitle?: ReactNode
	className?: string
}

export default function SectionHeading({
	heading,
	subtitle,
	className,
}: SectionHeadingProps) {
	return (
		<div className={classNames(s.root, className)}>
			<h2 className="heading-2">{heading}</h2>
			{subtitle && <span className={s.subtitle}>{subtitle}</span>}
		</div>
	)
}
