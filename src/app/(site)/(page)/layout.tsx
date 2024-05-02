import s from './page-layout.module.css'

export default function PageLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className={s.main}>
			<div className={s.content}>{children}</div>
		</main>
	)
}
