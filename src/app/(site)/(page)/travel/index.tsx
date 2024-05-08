import PageBody from 'components/page-body'
import PageHeading from 'components/page-heading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	openGraph: {
		url: 'https://thedecastro.com/things-to-do',
	},
}

const DetailsPage = () => {
	return (
		<>
			<PageHeading
			title='Travel'
			
			/>
			<PageBody />
		</>
	)
}

export default DetailsPage
