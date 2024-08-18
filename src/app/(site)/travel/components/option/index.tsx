import Image, { type ImageProps } from 'next/image'
import Button from 'components/button'
import type { ReactNode } from 'react'
import s from './travel-option.module.css'
import Tag from 'components/tag'

interface TravelOptionProps {
	heading: string
	image?: ImageProps
	link: {
		text: string
		href: string
	}
	contact?: {
		name: string
		phone: string
	}
	tags?: string[]
	children?: ReactNode
}

export default function TravelOption({
	heading,
	tags,
	image,
	link,
	contact,
	children,
}: TravelOptionProps) {
	return (
		<div className={s.root}>
			<div>
				<h3 className="heading-3">{heading}</h3>
				{tags && (
					<div className={s.tags}>
						{tags.map((tag) => (
							<Tag text={tag} />
						))}
					</div>
				)}
			</div>
			{image && (
				<Image
					className={s.image}
					{...image}
					width={image.width ?? 500}
					height={image.height ?? 400}
					alt={image.alt ?? ''}
				/>
			)}
			{children && <div className={s.content}>{children}</div>}
			{contact && (
				<p>
					<strong>Contact info</strong>
					<br />
					{contact.name}
					<br />
					{contact.phone}
				</p>
			)}
			<Button text={link.text} href={link.href} target="_blank" />
		</div>
	)
}
