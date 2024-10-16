import { useCallback, useRef, useState } from 'react'

/**
 * Manage an active index that needs to be contained or wrap.
 *
 * @example
 *
 * const {
 *   activeIndex,
 *   moveActiveIndex,
 * } = useRovingIndex({ maxIndex: items.length - 1 })
 */
function useRovingIndex({
	defaultIndex = 0,
	maxIndex = Infinity,
	type = 'contain',
}: {
	/** The default index used when first mounting. */
	defaultIndex?: number

	/** The max index used to know when to contain or wrap. */
	maxIndex?: number

	/** How to handle navigation when exceeding minimum and maximum indexes. */
	type?: 'contain' | 'wrap' | 'none'
}): {
	/** The active index. */
	activeIndex: number

	/** The previously set index. */
	previousIndex: null | number

	/** Whether the active index can be moved backward. */
	moveBackwardDisabled: boolean

	/** Whether the active index can be moved forward. */
	moveForwardDisabled: boolean

	/** Move the index backwards. */
	moveBackward: () => void

	/** Move the index forwards. */
	moveForward: () => void

	/** Move the active index by a positive or negative amount. */
	moveActiveIndex: (amount: number) => void

	/** Set any active index. */
	setActiveIndex: (nextIndex: number) => void
} {
	const [activeIndex, setLocalActiveIndex] = useState(defaultIndex)
	const previousIndex = useRef<number | null>(null)
	const getNextIndex = useCallback(
		(incomingIndex: number) => {
			const exceedsMax = incomingIndex > maxIndex
			const exceedsMin = incomingIndex < 0

			switch (type) {
				case 'contain': {
					if (exceedsMax) {
						return maxIndex
					}

					if (exceedsMin) {
						return 0
					}

					return incomingIndex
				}
				case 'wrap': {
					if (exceedsMax) {
						return 0
					}

					if (exceedsMin) {
						return maxIndex
					}

					return incomingIndex
				}
				default:
					return incomingIndex
			}
		},
		[maxIndex, type],
	)
	const moveActiveIndex = useCallback(
		(amountToMove: number) => {
			setLocalActiveIndex((currentIndex) => {
				previousIndex.current = currentIndex
				return getNextIndex(currentIndex + amountToMove)
			})
		},
		[getNextIndex],
	)
	const setActiveIndex = useCallback(
		(nextIndex: number) => {
			setLocalActiveIndex((currentIndex) => {
				previousIndex.current = currentIndex
				return getNextIndex(nextIndex)
			})
		},
		[getNextIndex],
	)
	const moveBackward = useCallback(() => moveActiveIndex(-1), [moveActiveIndex])
	const moveForward = useCallback(() => moveActiveIndex(1), [moveActiveIndex])

	return {
		activeIndex,
		moveActiveIndex,
		setActiveIndex,
		moveBackward,
		moveForward,
		moveBackwardDisabled: activeIndex <= 0,
		moveForwardDisabled: activeIndex >= maxIndex,
		previousIndex: previousIndex.current,
	}
}

export default useRovingIndex
