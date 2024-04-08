'use client'
import { useRef, useEffect, useState } from 'react'
import classNames from 'classnames'
import s from './registry.module.css'

const Registry = () => {
	const scriptRef = useRef<HTMLDivElement>(null)
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		const script = document.createElement('script')
		script.type = 'text/javascript'
		script.async = true
		script.innerHTML = '!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");'
		scriptRef.current?.appendChild(script)
		setTimeout(() => {
			setIsMounted(true)
		}, 1000)
	}, [scriptRef])

	return (
		<main className={s.registryPage}>
			<div
				className={classNames(
					s.registryLinkContainer,
					isMounted && s.isMounted,
				)}
			>
				<a
					className="button-link zola-registry-embed"
					href="http://www.zola.com/registry/jasonandpamela2025"
					data-registry-key="jasonandpamela2025"
				>
					Link to our registry
				</a>
			</div>
			<div ref={scriptRef} />
		</main>
	)
}

export default Registry
