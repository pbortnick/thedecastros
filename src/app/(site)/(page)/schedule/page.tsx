import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import parse from 'html-react-parser'
import PageBody from 'components/page-body'
import PhotoHero from 'components/photo-hero'
import { formatImageKitFile } from 'lib/format-imagekit-file'
import { scheduleData } from './schedule-data'
import type { ImageKitFile } from 'lib/format-imagekit-file'
import type { Metadata } from 'next'
import s from './schedule.module.css'
import classNames from 'classnames'

const montserrat = Montserrat({
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	openGraph: {
		url: 'https://thedecastro.com/things-to-do',
	},
}

async function getData() {
	const res = await fetch('https://api.imagekit.io/v1/files', {
		headers: {
			Authorization: `Basic ${Buffer.from(
				`${process.env.IMAGEKIT_PRIVATE_KEY}:`,
			).toString('base64')}`,
		},
	})

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	const imageData: Array<ImageKitFile> = await res.json()

	const hero = imageData.find((file) => file.filePath.includes('hero'))

	if (!hero) {
		throw new Error('Failed to fetch data')
	}

	const scheduleImages = imageData
		.filter((file) => file.filePath.startsWith('/schedule'))
		.map((file) => formatImageKitFile(file))

	return scheduleData.map(({ day, items }) => ({
		day,
		items: items.map((item) => ({
			...item,
			image: scheduleImages.find(
				({ src }) => typeof src === 'string' && src.includes(item.id),
			),
		})),
	}))
}

const SchedulePage = async () => {
	const data = await getData()

	return (
		<>
			<PhotoHero
				image={{
					src: 'https://ik.imagekit.io/1m3aqn3vb/schedule-hero.jpeg?updatedAt=1714687196127',
					width: 649,
					height: 433,
					alt: 'The Barn at Fallingwater',
				}}
				title="Schedule"
			/>
			<PageBody>
				<div className={s.body}>
					{data.map(({ day, items }) => (
						<div className={s.scheduleDataItem}>
							<div className={s.dayHeading}>
								<h2 className={s.dayHeadingText}>{day}</h2>
							</div>
							<div className={s.items}>
								{items.map(
									({ title, titleLink, time, details, address, image }) => (
										<div className={s.item}>
											<h3 className={s.title}>
												{title}
												<>
													{titleLink && (
														<a href={titleLink.link} className={s.titleLink}>
															<span>{titleLink.text}</span>
														</a>
													)}
												</>
											</h3>
											<div
												className={classNames(montserrat.className, s.content)}
											>
												{time && (
													<p className={s.time}>
														<i className="pi pi-clock" />
														<span>{time}</span>
													</p>
												)}
												{address && (
													<p className={s.address}>
														<i className="pi pi-map" />
														<a className={s.addressLink} href={address.link}>
															<span className={s.addressText}>
																{address.text}
															</span>
														</a>
													</p>
												)}
												{details && (
													<p className={s.details}>{parse(details)}</p>
												)}
											</div>
											{image && <Image {...image} className={s.image} />}
										</div>
									),
								)}
							</div>
						</div>
					))}
				</div>
			</PageBody>
		</>
	)
}

export default SchedulePage
