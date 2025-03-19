import type { ReactNode } from 'react'
import s from './section-heading.module.css'
import classNames from 'classnames'

interface SectionHeadingProps {
	heading: string
	subtitle?: ReactNode
	className?: string
	alignment?: 'center' | 'left' | 'right'
}

export default function SectionHeading({
	heading,
	subtitle,
	className,
	alignment = 'center',
}: SectionHeadingProps) {
	return (
		<div className={classNames(s.root, s[alignment], className)}>
			<h2 className="heading-2">{heading}</h2>
			{subtitle && <span className={s.subtitle}>{subtitle}</span>}
		</div>
	)
}
