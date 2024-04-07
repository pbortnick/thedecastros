import Image from 'next/image'
import pageBackgroundBorderLeft from './images/page-border-bottom-left.svg'
import pageBackgroundBorderRight from './images/page-border-bottom-right.svg'
import s from './page.module.css'

export default function Home() {
	return (
		<main className={s.main}>
			<h1 className={s.heading}>Jason & Pamela</h1>
			<div className={s.borderImages}>
				<div className={s.borderLeft}>
					<Image {...pageBackgroundBorderLeft} alt="" />
				</div>
				<div className={s.borderRight}>
					<Image {...pageBackgroundBorderRight} alt="" />
				</div>
			</div>
		</main>
	)
}
