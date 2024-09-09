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
			<div>
				<h4 className="heading-3">{heading}</h4>
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
				<p className={s.contactInfo}>
					<strong>Contact info</strong>
					<br />
					{contact.name}
					<br />
					<a href={`tel:${contact.phone}`}>
						{formatPhoneNumber(contact.phone)}
					</a>
					{contact.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
				</p>
			)}
			{link && <Button text={link.text} href={link.href} target="_blank" />}
		</div>
	)
}
