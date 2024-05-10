import type { ImageProps } from 'next/image'

export interface ImageKitFile {
	fileId: string
	type: string
	name: string
	filePath: string
	tags: string[]
	AITags: {
		name: string
		confidence: number
		source: string
	}[]
	versionInfo: {
		id: string
		name: string
	}
	isPrivateFile: boolean
	customCoordinates: null
	url: string
	thumbnail: string
	fileType: string
	mime: string
	width: number
	height: number
	size: number
	hasAlpha: boolean
	customMetadata: {
		alt?: string
	}
	createdAt: string
	updatedAt: string
}

export function formatImageKitFile(file: ImageKitFile): ImageProps {
	return {
		src: file.url,
		width: file.width,
		height: file.height,
		alt: file.customMetadata?.alt ?? '',
	}
}
