import type { HTMLProps } from 'react'
import s from './button.module.css'
import classNames from 'classnames'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
	type?: 'button' | 'submit' | 'reset'
	text: string
	fullWidth?: boolean
}

export default function ButtonContainer({ fullWidth, ...props }: ButtonProps) {
	return (
		<div
			className={classNames(s.buttonContainer, {
				[s.fullWidth]: fullWidth,
			})}
		>
			<Button {...props} />
		</div>
	)
}

export function Button({ text, type = 'button', ...props }: ButtonProps) {
	return (
		<button
			className={classNames(s.button, { [s.disabled]: props.disabled })}
			type={type}
			{...props}
		>
			{text}
		</button>
	)
}
