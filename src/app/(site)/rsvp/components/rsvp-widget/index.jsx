import Head from 'next/head'
import Script from 'next/script'

const RsvpWidget = () => {
	return (
		<>
			<Head>
				<Script
					id="oursvp-script"
					src="https://www.oursvp.app/widget/widget.js"
					strategy="lazyOnload"
					onLoad={() => {
						window.oursvp =
							window.oursvp ||
							function () {
								;(window.oursvp.q = window.oursvp.q || []).push(arguments)
							}
						window.oursvp('init', {
							element: document.getElementById('rsvp-widget'),
							eventId: 'IUZIpFfYkHlXZSYa11Et',
							showBackBtn: false,
						})
					}}
				/>
			</Head>
		</>
	)
}

export default RsvpWidget
