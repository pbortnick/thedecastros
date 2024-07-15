import Nav from 'components/nav'
import s from './site-layout.module.css'

export default function SiteLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className={s.siteLayout}>
			<Nav />
			<main className={s.main}>{children}</main>
		</div>
	)
}
