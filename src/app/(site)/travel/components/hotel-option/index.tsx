import Image, { type ImageProps } from 'next/image'
import Button from 'components/button'
import type { ReactNode } from 'react'
import s from './hotel-option.module.css'
import Tag from 'components/tag'
import { formatPhoneNumber } from 'lib/format-phone-number'
import classNames from 'classnames'

interface HotelOptionProps {
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
	isBooked?: boolean
	children?: ReactNode
}

export default function HotelOption({
	heading,
	tags,
	image,
	link,
	contact,
	children,
	isBooked,
}: HotelOptionProps) {
	return (
		<div className={s.root}>
			<div className={s.intro}>
				<h4 className="heading-3">{heading}</h4>
				{tags && !isBooked && (
					<div className={s.tags}>
						{tags.map((tag) => (
							<Tag text={tag} />
						))}
					</div>
				)}
				{isBooked && (
					<div className={s.tags}>
						<Tag text="Booked" color="var(--accent-2)" textColor="white" />
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
				{!isBooked && contact && (
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
				<div className={classNames(s.image, { [s.isBooked]: isBooked })}>
					<Image
						{...image}
						width={image.width ?? 500}
						height={image.height ?? 400}
						alt={image.alt ?? ''}
					/>
				</div>
			)}
		</div>
	)
}
