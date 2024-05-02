import PageBody from 'components/page-body'
import PhotoHero from 'components/photo-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	openGraph: {
		url: 'https://thedecastro.com/details',
	},
}

const DetailsPage = () => {
	return (
		<>
			<PhotoHero
				image={{
					src: 'https://ik.imagekit.io/1m3aqn3vb/details-hero.jpeg?updatedAt=1714667502092',
					width: 1440,
					height: 508,
					alt: 'Wide image of Fallingwater',
				}}
				title="Details"
			/>
			<PageBody />
		</>
	)
}

export default DetailsPage
