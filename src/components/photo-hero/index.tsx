import Image, { type ImageProps } from 'next/image'
import s from './photo-hero.module.css'

interface PhotoHeroProps {
	image: ImageProps
	title: string
}

const PhotoHero = ({ image, title }: PhotoHeroProps) => (
	<div className={s.hero}>
		<Image
			{...image}
			alt="Jason proposing to Pam on beach"
			className={s.heroImage}
			priority
		/>
		<div className={s.heroText}>
			<h1 className={s.heroTitle}>{title}</h1>
		</div>
	</div>
)

export default PhotoHero
