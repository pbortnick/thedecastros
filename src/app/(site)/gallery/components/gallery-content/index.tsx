'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import * as Dialog from '@radix-ui/react-dialog'
import * as ProposalGallery from '../../images/proposal'
import * as RelationshipGallery from '../../images/relationship'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { useMediumUp } from 'hooks/use-media-query'
import s from './style.module.css'

const images = {
	proposal: Object.values(ProposalGallery),
	relationship: Object.values(RelationshipGallery),
}

type GalleryName = 'proposal' | 'relationship'

const GalleryContent = () => {
	const [open, setOpen] = useState<boolean>(false)
	const [activeGallery, setActiveGallery] = useState<
		'relationship' | 'proposal' | null
	>(null)
	const [activeIndex, setActiveIndex] = useState(0)
	const isMediumUp = useMediumUp()

	useEffect(() => {
		if (!isMediumUp && !!open) {
			setOpen(false)
		}
	}, [isMediumUp])

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (!!activeGallery) {
				if (event.key === 'ArrowRight') {
					setActiveIndex(
						activeIndex === images[activeGallery].length - 1
							? 0
							: activeIndex + 1,
					)
				}

				if (event.key === 'ArrowLeft') {
					setActiveIndex(
						activeIndex === 0
							? images[activeGallery].length - 1
							: activeIndex - 1,
					)
				}
			}
		},
		[open, activeIndex],
	)

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [open, activeIndex])

	const handleTrigger = useCallback(
		(galleryName: 'proposal' | 'relationship', index: number) => {
			if (isMediumUp) {
				setActiveGallery(galleryName)
				setActiveIndex(index)
			}
		},
		[isMediumUp],
	)

	return (
		<Dialog.Root
			open={open}
			onOpenChange={() => {
				if (isMediumUp) {
					if (open) {
						setActiveGallery(null)
						setActiveIndex(0)
					}

					setOpen(!open)
				}
			}}
		>
			<GallerySection
				title="The Proposal"
				onClick={handleTrigger}
				galleryName="proposal"
			/>
			<GallerySection
				title="The Relationship"
				onClick={handleTrigger}
				galleryName="relationship"
			/>
			{open && activeGallery && isMediumUp && (
				<Dialog.Portal>
					<Dialog.Overlay className={s.dialogOverlay} />
					<Dialog.Content className={s.dialogContent}>
						<Image
							{...images[activeGallery][activeIndex]}
							alt=""
							className={s.dialogImage}
						/>
						<Dialog.Close asChild>
							<button className={s.iconButton} aria-label="Close">
								<Cross2Icon />
							</button>
						</Dialog.Close>
					</Dialog.Content>
				</Dialog.Portal>
			)}
		</Dialog.Root>
	)
}

interface GallerySectionProps {
	title: string
	galleryName: GalleryName
	onClick: (galleryName: GalleryName, index: number) => void
}

const GallerySection = ({
	title,
	galleryName,
	onClick,
}: GallerySectionProps) => (
	<>
		<div className={s.sectionHeadingWrapper}>
			<h2 className={s.sectionHeading}>{title}</h2>
		</div>
		<div className={s.gallery}>
			<div className={s.galleryGridContainer}>
				<div className={s.galleryGridSection}>
					{images[galleryName].map((image, index) => (
						<Dialog.Trigger className={s.galleryGridItem} key={index} asChild>
							<div
								role="button"
								onClick={() => onClick(galleryName, index)}
								className={s.galleryGridItem}
								title="Click to view image in full screen mode"
							>
								<Image
									{...image}
									alt=""
									className={s.galleryImage}
									placeholder="blur"
								/>
							</div>
						</Dialog.Trigger>
					))}
				</div>
			</div>
		</div>
	</>
)

export default GalleryContent
