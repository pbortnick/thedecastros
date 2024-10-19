'use client'

import Script from 'next/script'

const RsvpWidget = ({ eventId }: { eventId: string }) => {
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
		eventId: "${eventId}",
		showBackBtn: true
});`,
				}}
			/>
			<div style={{ margin: '0 auto', maxWidth: '90%', width: 'fit-content', padding: '24px' }}>
				<p>If the form below does not load, please refresh the page.</p>
			</div>
			<div id="rsvp-widget"></div>
		</>
	)
}

export default RsvpWidget
