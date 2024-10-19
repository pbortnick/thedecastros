'use client'

import { useForm } from 'react-hook-form'
import Button from 'components/button/button'
import { searchGuests, type GetFormData } from './utils'
import s from './rsvp-widget.module.css'
import { useCallback, useState } from 'react'
import WidgetProvider, { useWidget } from './provider'

import classNames from 'classnames'

const StepOne = () => {
	const [error, setError] = useState<string | null>(null)

	const { register, watch } = useForm()
	const { eventId, activeIndex, setPartyData, handleNext } = useWidget()

	const searchValue = watch('search')

	const handleClick = useCallback(async () => {
		const guestsData = await searchGuests(searchValue, eventId)
		if (typeof guestsData === 'string') {
			setError(guestsData)
		} else {
			setError(null)
			console.log({ guestsData })
			setPartyData(guestsData)
			handleNext()
		}
	}, [])

	return (
		<div
			className={classNames(s.inputs, {
				[s.active]: activeIndex === 0,
			})}
		>
			<label htmlFor="#search" className="body">
				If you're responding for you and a guest (or your family), you'll be
				able to RSVP for your entire group.
			</label>
			<input
				type="text"
				placeholder="Search for your name"
				className={s.textInput}
				{...register('search', { required: true })}
			/>
			{error && <p className={s.error}>{error}</p>}
			<Button
				text="Find your invite!"
				fullWidth
				onClick={handleClick}
				disabled={!searchValue?.length}
			/>
		</div>
	)
}

const StepTwo = () => {
	const { partyData, activeIndex } = useWidget()
	console.log({ activeIndex })

	return (
		<div
			className={classNames(s.inputs, {
				[s.active]: activeIndex === 1,
			})}
		>
			{JSON.stringify(partyData)}
		</div>
	)
}

interface WidgetProps extends GetFormData {
	eventId: string
}

// const Widget = (props: WidgetProps) => {
// 	return (
// 		<WidgetProvider eventId={props.eventId}>
// 			<Inner {...props} />
// 		</WidgetProvider>
// 	)
// }

const Widget = ({ eventId, eventName, eventDate }: WidgetProps) => {
	// const { handleSubmit, formState } = useForm()

	// const onSubmit = (data: unknown) => console.log(data)

	return (
		<WidgetProvider eventId={eventId}>
			<div className="container">
				<div className={s.formContainer}>
					{/* <form className={s.form} onSubmit={handleSubmit(onSubmit)}> */}
					<form className={s.form}>
						<div className={s.formInner}>
							<h2 className="centered-text">{eventName}</h2>
							<h3 className="centered-text">{eventDate}</h3>
							<StepOne />
							<StepTwo />
						</div>
					</form>
				</div>
			</div>
		</WidgetProvider>
	)
}

// const Inner = ({ eventName, eventDate }: WidgetProps) => {
// 	const { handleSubmit, formState } = useForm()

// 	const onSubmit = (data: unknown) => console.log(data)

// 	return (
// 		<div className="container">
// 			<div className={s.formContainer}>
// 				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
// 					<div className={s.formInner}>
// 						<h2 className="centered-text">{eventName}</h2>
// 						<h3 className="centered-text">{eventDate}</h3>
// 						<StepOne />
// 						<StepTwo />
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	)
// }

export default Widget
