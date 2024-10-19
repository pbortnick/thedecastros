import type { HTMLProps } from 'react'
import s from './button.module.css'
import classNames from 'classnames'

interface ButtonProps extends HTMLProps<HTMLAnchorElement> {
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

export function Button({ text, ...rest }: ButtonProps) {
	return (
		<a className={s.buttonLink} {...rest}>
			{text}
		</a>
	)
}
