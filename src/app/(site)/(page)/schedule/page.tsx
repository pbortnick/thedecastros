import Image, { ImageProps } from 'next/image'
import { Montserrat } from 'next/font/google'
import parse from 'html-react-parser'
import PageBody from 'components/page-body'
import PhotoHero from 'components/photo-hero'
import { formatImageKitFile } from 'lib/format-imagekit-file'
import classNames from 'classnames'
import getClientQuery from 'gql-client'
import { ScheduleDocument, ScheduleQuery } from 'gql/graphql'
import fetchImages from 'lib/fetch-images'
import type { Metadata } from 'next'
import s from './schedule.module.css'

const montserrat = Montserrat({
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	openGraph: {
		url: 'https://thedecastro.com/schedule',
	},
}

async function getData() {
	const { data } = await getClientQuery({
		query: ScheduleDocument,
	})

	if (!data) {
		throw new Error('Failed to fetch data')
	}

	const imageData = await fetchImages()

	return data.scheduleDays.map(({ day, schedules }) => ({
		day,
		items: schedules.map(({ imageId, ...rest }) => {
			const scheduleItem: ScheduleQuery['scheduleDays'][number]['schedules'][number] & {
				image?: ImageProps
			} = rest

			if (imageId) {
				const image = imageData.find(({ fileId }) => fileId === imageId)
				if (image) {
					scheduleItem.image = formatImageKitFile(image)
				}
			}

			return scheduleItem
		}),
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
									({
										title,
										titleLinkText,
										titleLinkUrl,
										time,
										details,
										addressText,
										addressLink,
										image,
									}) => (
										<div className={s.item}>
											<h3 className={s.title}>
												{title}
												<>
													{titleLinkText && titleLinkUrl && (
														<a href={titleLinkUrl} className={s.titleLink}>
															<span>{titleLinkText}</span>
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
												{addressText && addressLink && (
													<p className={s.address}>
														<i className="pi pi-map" />
														<a className={s.addressLink} href={addressLink}>
															<span className={s.addressText}>
																{addressText}
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
