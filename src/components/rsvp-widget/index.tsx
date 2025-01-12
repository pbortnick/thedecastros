'use client'

import { useEffect, useState } from 'react'
// import Script from 'next/script'
import Widget from './widget'

const RsvpWidget = ({ eventId }: { eventId: string }) => {
	// const [mainScriptRemoved, setMainScriptRemoved] = useState(false)
	// const [jsScriptRemoved, setJsScriptRemoved] = useState(false)
	const [loaded, setLoaded] = useState(false)

	// useEffect(() => {
	// 	if (mainScriptRemoved) return
	// 	console.log('running useEffect 1')
	// 	const script = document.querySelector('#oursvp')
	// 	if (script) {
	// 		script.remove()
	// 	}
	// 	setMainScriptRemoved(true)
	// }, [mainScriptRemoved])

	// useEffect(() => {
	// 	if (jsScriptRemoved || !mainScriptRemoved) return
	// 	console.log('running useEffect 2')
	// 	const script = document.querySelector('#oursvp-js-script')
	// 	if (script) {
	// 		script.remove()
	// 	}
	// 	setJsScriptRemoved(true)
	// }, [mainScriptRemoved, jsScriptRemoved])

	// useEffect(() => {
	// 	if (loaded) return
	// 	console.log('running useEffect 3')

	// 	if (jsScriptRemoved) {
	// 		setLoaded(true)
	// 	}
	// }, [loaded, jsScriptRemoved])

	// console.log({ mainScriptRemoved, jsScriptRemoved, loaded })

	useEffect(() => {
		setLoaded(true)
		return () => {
			const jsScript = document.querySelector('#oursvp-js-script')
			if (jsScript) {
				jsScript.remove()
			}

			const mainScript = document.querySelector('#oursvp')
			if (mainScript) {
				mainScript.remove()
			}
		}
	}, [])

	return (
		<>
			<Widget eventId={eventId} loaded={loaded} />
			<div id="rsvp-widget"></div>
			<div
				className="container"
				style={{
					paddingTop: 'var(--spacing-03)',
				}}
			>
				<p className="centered-text">
					If the form doesn't load, please refresh the page.
				</p>
			</div>
		</>
	)
}

export default RsvpWidget
