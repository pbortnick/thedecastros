import Image from 'next/image'
import homeBg from '@/images/home-bg.png'
import accentImageLeft from '@/images/accent-image-1.png'
import accentImageRight from '@/images/accent-image-2.png'
import s from './page.module.css'

export default function Home() {
	return (
		<main className={s.main}>
			<div className={s.content}>
				<Image
					src={homeBg}
					className={s.bgImage}
					height={612}
					width={1091}
					alt=""
				/>
				<Image
					src={accentImageLeft}
					className={s.accentImageLeft}
					height={1080}
					width={1920}
					alt=""
				/>
				<Image
					src={accentImageRight}
					className={s.accentImageRight}
					height={611}
					width={262}
					alt=""
				/>
				<h1 className={s.heading}>
					Jason
					<br />&<br />
					Pamela
				</h1>
			</div>
		</main>
	)
}
