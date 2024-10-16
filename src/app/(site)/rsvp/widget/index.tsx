'use client'

import { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { findName } from './utils'
import s from './style.module.css'
import useRovingIndex from 'hooks/use-roving-index'

type StepOneInputs = {
	name: string
}

type StepTwoInputs = {
	attending: boolean
}

type Inputs = {
  example: string,
  exampleRequired: string,
};
    

const RsvpWidget = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	console.log(watch('example'))

	const {
		activeIndex,
		moveForward,
		moveForwardDisabled,
		moveBackward,
		moveBackwardDisabled,
	} = useRovingIndex({
		maxIndex: 5,
	})

	const methods = useForm({
		mode: 'all',
		resolver: (values: Record<string, string | boolean>) => {
			const errors = resolverErrors(
				values,
				formattedMarketoFormForSteps[activeIndex].fields,
			)

			return { values, errors }
		},
	})

	// const onSubmit = useCallback(
	// 	async (data: OnSubmitData) => {
	// 		await handleSubmitForm({
	// 			data,
	// 			reset: methods.reset,
	// 			metadata,
	// 			resetOnSubmission,
	// 			...rest,
	// 		})
	// 	},
	// 	[activeIndex]
	// )

	// const handleNext = useCallback(async () => {
	// 	const isStepValid = await methods.trigger(
	// 		formattedMarketoFormForSteps[activeIndex].fieldIds,
	// 		{ shouldFocus: true }
	// 	)

	// 	if (isStepValid) {
	// 		moveForward()
	// 	}
	// }, [activeIndex])

	return (
		<div className={s.rsvpWidget}>
			{step === 0 && (
				<div>
					<label htmlFor="search">
						If you're responding for you and a guest (or your family), you'll be
						able to RSVP for your entire group.
					</label>
					<input
						type="text"
						placeholder="Search for your name"
						name="search"
						onChange={(e) => setNameInput(e.target.value)}
					/>
					<button onClick={() => findName(nameInput)}>Find your invite!</button>
				</div>
			)}
		</div>
	)
}

export default RsvpWidget
