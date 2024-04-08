import { useState, useEffect } from 'react'

function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const media = window.matchMedia(query)
		if (media.matches !== matches) {
			setMatches(media.matches)
		}
		const listener = () => {
			setMatches(media.matches)
		}
		media.addListener(listener)
		return () => media.removeListener(listener)
	}, [matches, query])

	return matches
}

// ref: https://github.com/hashicorp/mktg-global-styles/blob/main/custom-media.css
const useSmall = () => useMediaQuery('(max-width: 768px)')
const useMedium = () =>
	useMediaQuery('(min-width: 768px) and (max-width: 999px)')
const useMediumUp = () => useMediaQuery('(min-width: 768px)')
const useLarge = () => useMediaQuery('(min-width: 1000px)')

export default useMediaQuery
export { useSmall, useMedium, useMediumUp, useLarge }
