import s from './gallery.module.css'
import hero from '~images/gallery/hero.jpg'
import Image from 'next/image'
import type { Metadata } from 'next'
import GalleryContent from './components/gallery-content'

export const metadata: Metadata = {
	openGraph: {
		url: 'https://thedecastro.com/gallery',
	},
}

const GalleryPage = () => (
	<main className={s.main}>
		<div className={s.content}>
			<div className={s.hero}>
				<Image
					{...hero}
					alt="Jason proposing to Pam on beach"
					className={s.heroImage}
					priority
					placeholder="blur"
				/>
				<div className={s.heroText}>
					<h1 className={s.heroTitle}>Gallery</h1>
				</div>
			</div>
			<GalleryContent />
		</div>
	</main>
)

export default GalleryPage
