'use client'
import 'photoswipe/dist/photoswipe.css'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import * as GalleryImages from './images'
import { useEffect } from 'react'
import s from './gallery.module.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import Image, { StaticImageData } from 'next/image'
const GALLERY_ID = 'pj-gallery'

const chunkedGallery = Object.values(GalleryImages).reduce(
	(resultArray, item) => {
		if (!resultArray[0] || resultArray[0].length < 4) {
			if (!resultArray[0]) {
				resultArray[0] = []
			}
			resultArray[0].push(item)
		} else if (!resultArray[1] || resultArray[1].length < 5) {
			if (!resultArray[1]) {
				resultArray[1] = []
			}
			resultArray[1].push(item)
		} else if (!resultArray[2] || resultArray[2].length < 4) {
			if (!resultArray[2]) {
				resultArray[2] = []
			}
			resultArray[2].push(item)
		}

		return resultArray
	},
	[] as StaticImageData[][],
)

const GalleryPage = () => {
	return (
		<main className={s.galleryPage}>
			<div className={s.content}>
				<h1>Gallery</h1>
				<div className={s.gallery}>
					<div className={s.galleryGridContainer}>
						{chunkedGallery.map((chunk, index) => (
							<div className={s.galleryGridSection}>
								{chunk.map((image, index) => (
									<div className={s.galleryGridItem} key={index}>
										<Image {...image} alt="" className={s.galleryImage} />
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	)
}

export default GalleryPage
