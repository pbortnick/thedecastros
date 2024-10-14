'use client'

import { useEffect } from 'react'
// import { usePathname } from 'next/navigation'

const RsvpWidget = () => {
	// const pathname = usePathname()

	useEffect(() => {
		// if (typeof window === 'undefined') return

		// if (window.oursvp) {
		// 	window.oursvp('destroy')
		// }

		;(function (w, d, s, o, f, js, fjs) {
			w[o] =
				w[o] ||
				function () {
					;(w[o].q = w[o].q || []).push(arguments)
				}
			;(js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0])
			js.id = o
			js.src = f
			js.async = 1
			fjs.parentNode.insertBefore(js, fjs)
		})(
			window,
			document,
			'script',
			'oursvp',
			'https://www.oursvp.app/widget/widget.js',
		)
		oursvp('init', {
			element: document.getElementById('rsvp-widget'),
			eventId: 'IUZIpFfYkHlXZSYa11Et',
			showBackBtn: true,
		})
	}, [])

	return <div id="rsvp-widget"></div>
}

export default RsvpWidget
