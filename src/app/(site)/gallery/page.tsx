import type { ImageProps } from 'next/image'
import GalleryContent from './components/gallery-content'
import type { Metadata } from 'next'
import { ImageKitFile } from 'lib/format-imagekit-file'
import Hero from 'components/hero'

export const revalidate = 86400

export const metadata: Metadata = {
	openGraph: {
		url: 'https://thedecastro.com/gallery',
	},
}

function formatImageKitFile(file: ImageKitFile): ImageProps {
	return {
		src: file.url,
		width: file.width,
		height: file.height,
		alt: file.customMetadata?.alt ?? '',
	}
}

async function getData() {
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

	const relationshipGallery = data
		.filter((file) => file.filePath.startsWith('/relationship'))
		.map((file) => formatImageKitFile(file))

	const proposalGallery = data
		.filter((file) => file.filePath.startsWith('/proposal'))
		.map((file) => formatImageKitFile(file))

	return {
		images: {
			proposal: proposalGallery,
			relationship: relationshipGallery,
		},
	}
}

const GalleryPage = async () => {
	const data = await getData()

	return (
		<>
			<Hero
				title="Gallery"
				image={{
					src: require('./gallery-graphic.png'),
					width: 427.5,
					height: 425.5,
					alt: 'Outline of proposal on the beach',
				}}
			/>
			<GalleryContent {...data.images} />
		</>
	)
}

export default GalleryPage
