import { useEffect } from 'react'

export const useScript = () => {
	useEffect(() => {
		const script = document.createElement('script')
		script.id = 'oursvp'
		script.src = 'https://www.oursvp.app/widget/widget.js'
		script.async = true
		script.async = true

		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])
}
