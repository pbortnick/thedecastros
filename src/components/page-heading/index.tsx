import s from './page-heading.module.css'

interface PageHeadingProps {
	title: string
	subtitle?: string
}

const PageHeading = ({
	title,
	subtitle = 'Coming soon!',
}: PageHeadingProps) => (
	<div className={s.content}>
		<h1 className={s.pageHeading}>{title}</h1>
		<p className="typography-body-large">{subtitle}</p>
	</div>
)

export default PageHeading
