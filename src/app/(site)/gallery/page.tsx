'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import * as Dialog from '@radix-ui/react-dialog'
import * as ProposalGallery from './images/proposal'
import * as RelationshipGallery from './images/relationship'
import { useCallback, useEffect, useState } from 'react'
import s from './gallery.module.css'
import hero from '~images/gallery/hero.jpg'
import Image from 'next/image'
import { useMediumUp } from 'hooks/use-media-query'
const images = {
	proposal: Object.values(ProposalGallery),
	relationship: Object.values(RelationshipGallery),
}

const GalleryPage = () => {
	const [lightBoxIsOpen, setLightBoxIsOpen] = useState<
		'relationship' | 'proposal' | null
	>(null)
	const [activeIndex, setActiveIndex] = useState(0)
	const isMediumUp = useMediumUp()

	useEffect(() => {
		if (!isMediumUp && !!lightBoxIsOpen) {
			setLightBoxIsOpen(null)
		}
	}, [isMediumUp])

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (!!lightBoxIsOpen) {
				if (event.key === 'ArrowRight') {
					setActiveIndex(
						activeIndex === images[lightBoxIsOpen].length - 1
							? 0
							: activeIndex + 1,
					)
				}

				if (event.key === 'ArrowLeft') {
					setActiveIndex(
						activeIndex === 0
							? images[lightBoxIsOpen].length - 1
							: activeIndex - 1,
					)
				}
			}
		},
		[lightBoxIsOpen, activeIndex],
	)

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [lightBoxIsOpen, activeIndex])

	return (
		<main className={s.main}>
			<div className={s.content}>
				<div className={s.hero}>
					<Image
						{...hero}
						alt="Jason proposing to Pam on beach"
						className={s.heroImage}
						priority
						placeholder="blur"
					/>
					<div className={s.heroText}>
						<h1 className={s.heroTitle}>Gallery</h1>
					</div>
				</div>
				<Dialog.Root>
					<div className={s.sectionHeadingWrapper}>
						<h2 className={s.sectionHeading}>The Proposal</h2>
					</div>
					<div className={s.gallery}>
						<div className={s.galleryGridContainer}>
							<div className={s.galleryGridSection}>
								{images.proposal.map((image, index) => (
									<Dialog.Trigger
										asChild
										onClick={() => {
											if (isMediumUp) {
												setLightBoxIsOpen('proposal')
												setActiveIndex(index)
											}
										}}
									>
										<div className={s.galleryGridItem} key={index}>
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
					<div className={s.sectionHeadingWrapper}>
						<h2 className={s.sectionHeading}>The Relationship</h2>
					</div>
					<div className={s.gallery}>
						<div className={s.galleryGridContainer}>
							<div className={s.galleryGridSection}>
								{images.relationship.map((image, index) => (
									<Dialog.Trigger
										asChild
										onClick={() => {
											if (isMediumUp) {
												setLightBoxIsOpen('relationship')
												setActiveIndex(index)
											}
										}}
									>
										<div className={s.galleryGridItem} key={index}>
											<Image {...image} alt="" className={s.galleryImage} />
										</div>
									</Dialog.Trigger>
								))}
							</div>
						</div>
					</div>
					{lightBoxIsOpen && isMediumUp && (
						<Dialog.Portal>
							<Dialog.Overlay className={s.dialogOverlay} />
							<Dialog.Content className={s.dialogContent}>
								<Image
									{...images[lightBoxIsOpen][activeIndex]}
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
			</div>
		</main>
	)
}

export default GalleryPage
