import Image from 'next/image'
import type { ImageProps } from 'next/image'
import s from './hero.module.css'

interface HeroProps {
	title: string
	image: ImageProps
}

export default function Hero({ title, image }: HeroProps) {
	return (
		<div className={s.root}>
			<h1 className={s.title}>{title}</h1>
			<div className={s.image}>
				<Image {...image} priority className={s.image} />
			</div>
		</div>
	)
}
