'use client'

import Script from 'next/script'

const RsvpWidget = () => {
	return (
		<>
			<Script
				type="text/javascript"
				id=""
				dangerouslySetInnerHTML={{
					__html: `
	(function (w, d, s, o, f, js, fjs) {
		w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
		js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
		js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
}(window, document, 'script', 'oursvp', 'https://www.oursvp.app/widget/widget.js'));
oursvp('init', { 
		element: document.getElementById('rsvp-widget'),
		eventId: 'IUZIpFfYkHlXZSYa11Et',
		showBackBtn: true
});`,
				}}
			/>
			<div id="rsvp-widget"></div>
		</>
	)
}

export default RsvpWidget
