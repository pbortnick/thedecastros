import {
	type MutableRefObject,
	type MouseEvent,
	type KeyboardEvent,
	createContext,
	useContext,
} from 'react'

interface FormContextState {
	step: number
	onS
}

export const FormContext = createContext<FormContextState | undefined>(
	undefined
)

export function useFormContext(): FormContextState {
	const context = useContext(FormContext)
	if (context === undefined) {
		throw new Error('useFormContext must be used within a FormContext.Provider')
	}
	return context
}
