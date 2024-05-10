import type { ReactNode } from 'react'
import s from './page-body.module.css'

const PageBody = ({ children }: { children?: ReactNode }) => (
	<div className={s.root}>
		{children ?? <p className={s.pageBodyText}>Coming soon!</p>}
	</div>
)

export default PageBody
