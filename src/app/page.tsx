import Image from 'next/image'
import bgImage from '@/images/home-bg.png'
import s from './page.module.css'

export default function Home() {
	return (
		<main className={s.main}>
			<div className={s.content}>
				<Image
					src={bgImage}
					className={s.bgImage}
					height={612}
					width={1091}
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
