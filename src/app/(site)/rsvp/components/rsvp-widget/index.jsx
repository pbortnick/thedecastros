'use client'

import { useEffect } from 'react'

const RsvpWidget = ({ eventId }) => {
	useEffect(() => {
		const loadScript = () => {
			const w = window
			const d = document
			const s = 'script'
			const o = 'oursvp'
			const f = 'https://www.oursvp.app/widget/widget.js'

			w[o] =
				w[o] ||
				function () {
					;(w[o].q = w[o].q || []).push(arguments)
				}

			const js = d.createElement(s)
			const fjs = d.getElementsByTagName(s)[0]
			js.id = o
			js.src = f
			js.async = 1
			fjs.parentNode.insertBefore(js, fjs)

			// Initialize the widget after the script loads
			js.onload = () => {
				w[o]('init', {
					element: document.getElementById('rsvp-widget'),
					eventId,
					showBackBtn: true,
				})
			}
		}

		// Load the script
		loadScript()

		// Styling
		document.body.style.setProperty('--button-shape', '8px')
		document.body.style.setProperty('--border-color', '#f5eeea')
		document.body.style.setProperty('--button-text-color', '#000000')
		document.body.style.setProperty('--button-bg-color', '#f5eeea')
	}, [])

	return <div id="rsvp-widget"></div>
}

export default RsvpWidget
