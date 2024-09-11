import Image, { type ImageProps } from 'next/image'
import Button from 'components/button'
import type { ReactNode } from 'react'
import s from './travel-option.module.css'
import Tag from 'components/tag'
import { formatPhoneNumber } from 'lib/format-phone-number'

interface TravelOptionProps {
	heading: string
	image?: ImageProps
	link?: {
		text: string
		href: string
	}
	contact?: {
		instructions?: string
		name: string
		phone: string
		email?: string
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
			<div className={s.intro}>
				<h4 className="heading-3">{heading}</h4>
				{tags && (
					<div className={s.tags}>
						{tags.map((tag) => (
							<Tag text={tag} />
						))}
					</div>
				)}
			</div>
			<div className={s.content}>
				{children && <div className={s.content}>{children}</div>}
				{link && (
					<div className={s.buttonWrapper}>
						<Button text={link.text} href={link.href} target="_blank" />
					</div>
				)}
				{contact && (
					<div className={s.contactInfo}>
						<span>
							<strong>Contact info:</strong>
						</span>
						{contact.name && <span>{contact.name}</span>}
						<a href={`tel:${contact.phone}`}>
							{formatPhoneNumber(contact.phone)}
						</a>
						{contact.email && (
							<a href={`mailto:${contact.email}`}>{contact.email}</a>
						)}
						{contact.instructions && <p>{contact.instructions}</p>}
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
		</div>
	)
}
