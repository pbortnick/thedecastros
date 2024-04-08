{
	/* {chunkedGallery.map((chunk, chunkIndex) => (
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
							))} */
}

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
