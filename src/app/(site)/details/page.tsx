import PageHeading from 'components/page-heading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	openGraph: {
		url: 'https://thedecastro.com/details',
	},
}

const DetailsPage = () => {
	return (
		<main>
			<PageHeading title="Details" />
		</main>
	)
}

export default DetailsPage
