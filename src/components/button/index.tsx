import type { HTMLProps } from 'react'
import s from './button.module.css'

interface ButtonProps extends HTMLProps<HTMLAnchorElement> {
	text: string
}

export default function ButtonContainer(props: ButtonProps) {
	return (
		<div className={s.buttonContainer}>
			<Button {...props} />
		</div>
	)
}

export function Button({ text, ...rest }: ButtonProps) {
	return (
		<a className={s.button} {...rest}>
			{text}
		</a>
	)
}
