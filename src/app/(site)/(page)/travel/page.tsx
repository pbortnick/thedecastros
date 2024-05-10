// import PageBody from 'components/page-body'
import PageHeading from 'components/page-heading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	openGraph: {
		url: 'https://thedecastro.com/travel',
	},
}

const DetailsPage = () => {
	return (
		<>
			<PageHeading title="Travel Information" />
			{/* <PageBody /> */}
		</>
	)
}

export default DetailsPage
