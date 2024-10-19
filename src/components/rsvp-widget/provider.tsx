import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react'
import { useForm } from 'react-hook-form'
import { Guests } from './utils'

interface WidgetState {
	activeIndex: number
	setActiveIndex: (step: number) => void
	handleNext: () => void
	moveBackward: () => void
	eventId: string
	partyData: Guests | null
	setPartyData: (data: Guests) => void
}

export function useWidget() {
	return useContext(WidgetContext)
}

const WidgetContext = createContext<WidgetState>({
	activeIndex: 0,
	setActiveIndex: () => {},
	handleNext: () => {},
	moveBackward: () => {},
	eventId: '',
	partyData: null,
	setPartyData: () => {},
})

export default function WidgetProvider({
	eventId,
	children,
}: {
	eventId: string
	children: ReactNode
}) {
	const [activeIndex, setActiveIndex] = useState(0)
	const [partyData, setPartyData] = useState<Guests | null>(null)

	const { trigger } = useForm({ mode: 'all' })

	const moveForward = useCallback(
		() => setActiveIndex((prev: number) => prev + 1),
		[],
	)
	const moveBackward = useCallback(
		() => setActiveIndex((prev: number) => prev - 1),
		[],
	)

	const handleNext = useCallback(async () => {
		const isStepValid = await trigger('search', { shouldFocus: true })

		if (isStepValid) {
			moveForward()
		}
	}, [activeIndex])

	const contextValue = useMemo(
		() => ({
			activeIndex,
			setActiveIndex,
			handleNext,
			moveBackward,
			eventId,
			partyData,
			setPartyData,
		}),
		[
			activeIndex,
			setActiveIndex,
			handleNext,
			moveBackward,
			eventId,
			partyData,
			setPartyData,
		],
	)

	return (
		<WidgetContext.Provider value={contextValue}>
			{children}
		</WidgetContext.Provider>
	)
}
