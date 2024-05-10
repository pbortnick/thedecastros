import s from './page-layout.module.css'

export default function PageLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <main className={s.main}>{children}</main>
}
