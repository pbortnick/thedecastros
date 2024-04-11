import Image, { type ImageProps } from 'next/image'
import GalleryContent from './components/gallery-content'
import type { Metadata } from 'next'
import s from './gallery.module.css'
import { ImageKitFile } from './types'

export const metadata: Metadata = {
	openGraph: {
		url: 'https://thedecastro.com/gallery',
	},
}

function formatImageKitFile(file: ImageKitFile): ImageProps {
	return {
		src: file.url,
		blurDataURL: `${file.url}?tr=bl-6`,
		width: file.width,
		height: file.height,
		alt: file.name,
	}
}

async function getData() {
	console.log(process.env.IMAGEKIT_PRIVATE_KEY)
	const res = await fetch('https://api.imagekit.io/v1/files', {
		headers: {
			Authorization: `Basic ${Buffer.from(
				`${process.env.IMAGEKIT_PRIVATE_KEY}:`,
			).toString('base64')}`,
		},
	})

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	const data: Array<ImageKitFile> = await res.json()

	const hero = data.find((file) => file.filePath.includes('hero'))
	
	const relationshipGallery = data
		.filter((file) => file.filePath.startsWith('/relationship'))
		.map((file) => formatImageKitFile(file))

	const proposalGallery = data
		.filter((file) => file.filePath.startsWith('/proposal'))
		.map((file) => formatImageKitFile(file))

	return {
		hero: hero ? formatImageKitFile(hero) : undefined,
		images: {
			proposal: proposalGallery,
			relationship: relationshipGallery,
		},
	}
}

const GalleryPage = async () => {
	const data = await getData()

	return (
		<main className={s.main}>
			<div className={s.content}>
				<div className={s.hero}>
					{data.hero && (
						<Image
							{...data.hero}
							alt="Jason proposing to Pam on beach"
							className={s.heroImage}
							priority
							placeholder="blur"
						/>
					)}
					<div className={s.heroText}>
						<h1 className={s.heroTitle}>Gallery</h1>
					</div>
				</div>
				<GalleryContent {...data.images} />
			</div>
		</main>
	)
}

export default GalleryPage
