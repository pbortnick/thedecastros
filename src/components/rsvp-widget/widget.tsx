'use client'

import Script from 'next/script'

const Widget = ({ eventId, loaded }: { eventId: string; loaded: boolean }) => {
	if (!loaded) {
		return
	}

	return (
		<>
			{loaded ? (
				<Script
					type="text/javascript"
					id="oursvp-js-script"
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
			) : null}
		</>
	)
}

export default Widget
