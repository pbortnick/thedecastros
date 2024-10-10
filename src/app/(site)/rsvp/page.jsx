// pages/index.js
import Hero from 'components/hero'
import Head from 'next/head'
import Script from 'next/script'

const Home = () => {
	return (
		<>
			<Head>
				<Script
					id="oursvp-script"
					src="https://www.oursvp.app/widget/widget.js"
					strategy="afterInteractive"
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
			<Hero title="RSVP" />
			<div id="rsvp-widget"></div>
		</>
	)
}

export default Home
