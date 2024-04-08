'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import * as Dialog from '@radix-ui/react-dialog'
import * as GalleryImages from './images'
import { useCallback, useEffect, useState } from 'react'
import s from './gallery.module.css'
import hero from './images/hero.jpeg'
import Image, { StaticImageData } from 'next/image'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

const images = Object.values(GalleryImages)

// const chunkedGallery = images.reduce((resultArray, item) => {
// 	if (!resultArray[0] || resultArray[0].length < 4) {
// 		if (!resultArray[0]) {
// 			resultArray[0] = []
// 		}
// 		resultArray[0].push(item)
// 	} else if (!resultArray[1] || resultArray[1].length < 5) {
// 		if (!resultArray[1]) {
// 			resultArray[1] = []
// 		}
// 		resultArray[1].push(item)
// 	} else if (!resultArray[2] || resultArray[2].length < 4) {
// 		if (!resultArray[2]) {
// 			resultArray[2] = []
// 		}
// 		resultArray[2].push(item)
// 	}

// 	return resultArray
// }, [] as StaticImageData[][])

const GalleryPage = () => {
	const [lightBoxIsOpen, setLightBoxIsOpen] = useState(false)
	const [activeIndex, setActiveIndex] = useState(0)

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (lightBoxIsOpen) {
				if (event.key === 'ArrowRight') {
					setActiveIndex(
						activeIndex === images.length - 1 ? 0 : activeIndex + 1,
					)
				}

				if (event.key === 'ArrowLeft') {
					setActiveIndex(
						activeIndex === 0 ? images.length - 1 : activeIndex - 1,
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
					/>
					<div className={s.heroText}>
						<h1 className={s.heroTitle}>Gallery</h1>
					</div>
				</div>
				<Dialog.Root onOpenChange={(isOpen) => setLightBoxIsOpen(isOpen)}>
					<div className={s.gallery}>
						<div className={s.galleryGridContainer}>
							<div className={s.galleryGridSection}>
								{/* {chunkedGallery.map((chunk, chunkIndex) => (
								<div className={s.galleryGridSection}>
									{chunk.map((image, index) => (
										<Dialog.Trigger
											asChild
											onClick={() => {
												const prevChunkLength =
													chunkIndex === 0
														? 0
														: chunkedGallery[chunkIndex - 1].length
												setActiveIndex(prevChunkLength + index)
											}}
										>
											<div className={s.galleryGridItem} key={index}>
												<Image {...image} alt="" className={s.galleryImage} />
											</div>
										</Dialog.Trigger>
									))}
								</div>
							))} */}
								{images.map((image, index) => (
									<Dialog.Trigger asChild onClick={() => setActiveIndex(index)}>
										<div className={s.galleryGridItem} key={index}>
											<Image {...image} alt="" className={s.galleryImage} />
										</div>
									</Dialog.Trigger>
								))}
							</div>
						</div>
					</div>
					<Dialog.Portal>
						<Dialog.Overlay className={s.dialogOverlay} />
						<Dialog.Content className={s.dialogContent}>
							<Image
								{...images[activeIndex]}
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
				</Dialog.Root>
			</div>
		</main>
	)
}

export default GalleryPage
