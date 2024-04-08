import PageHeading from 'components/page-heading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	openGraph: {
		url: 'https://thedecastro.com/schedule',
	},
}


const SchedulePage = () => {
	return (
		<main>
			<PageHeading title="Weekend Schedule" />
		</main>
	)
}

export default SchedulePage
