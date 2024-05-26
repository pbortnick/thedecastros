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

type ScheduleItemType =
	ScheduleQuery['scheduleDays'][number]['schedules'][number] & {
		image?: ImageProps
	}

async function getData() {
	const { data } = await getClientQuery({
		query: ScheduleDocument,
	})

	if (!data || !data.scheduleDays || !data.hero || !data.hero[0]) {
		throw new Error('Failed to fetch data')
	}

	const { scheduleDays, hero } = data

	const imageData = await fetchImages()

	const scheduleData = scheduleDays.map(({ day, schedules }) => ({
		day,
		items: schedules.map(({ imageId, ...rest }) => {
			const scheduleItem: ScheduleItemType = rest

			if (imageId) {
				const image = imageData.find(({ fileId }) => fileId === imageId)
				if (image) {
					scheduleItem.image = formatImageKitFile(image)
				}
			}

			return scheduleItem
		}),
	}))

	const heroData = {
		image: {
			src: hero[0].src,
			alt: hero[0].alt,
			width: hero[0].width,
			height: hero[0].height,
		},
		title: hero[0].title,
	}

	return {
		schedule: scheduleData,
		hero: heroData,
	}
}

const SchedulePage = async () => {
	const { hero, schedule } = await getData()

	return (
		<>
			<PhotoHero {...hero} />
			<PageBody>
				<div className={s.body}>
					{schedule.map(({ day, items }) => (
						<div className={s.scheduleDataItem}>
							<div className={s.dayHeading}>
								<h2 className={s.dayHeadingText}>{day}</h2>
							</div>
							<div className={s.items}>
								{items.map((item) => (
									<ScheduleItem {...item} />
								))}
							</div>
						</div>
					))}
				</div>
			</PageBody>
		</>
	)
}

function ScheduleItem({
	title,
	titleLinkText,
	titleLinkUrl,
	time,
	details,
	addressText,
	addressLink,
	image,
}: ScheduleItemType) {
	return (
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
			<div className={classNames(montserrat.className, s.content)}>
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
							<span className={s.addressText}>{addressText}</span>
						</a>
					</p>
				)}
				{details && <p className={s.details}>{parse(details)}</p>}
			</div>
			{image && <Image {...image} className={s.image} />}
		</div>
	)
}

export default SchedulePage
