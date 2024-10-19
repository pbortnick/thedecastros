import Image from 'next/image'
import type { ImageProps } from 'next/image'
import s from './hero.module.css'

interface HeroProps {
	title: string
	subtitle?: string
	image?: ImageProps
}

export default function Hero({ title, subtitle, image }: HeroProps) {
	return (
		<div className={s.root}>
			<div className="details">
				{subtitle && (
					<p
						className="centered-text subtitle"
						style={{
							paddingTop: 'var(--spacing-03)',
							paddingBottom: 'var(--spacing-01)',
						}}
					>
						{subtitle}
					</p>
				)}
				<h1 className={s.title}>{title}</h1>
			</div>
			{image && (
				<div className={s.image}>
					<Image {...image} priority className={s.image} />
				</div>
			)}
		</div>
	)
}
