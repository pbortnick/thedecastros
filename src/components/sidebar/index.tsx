'use client'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import s from './sidebar.module.css'

interface SidebarProps {
	anchorLinks: { link: string; text: string }[]
}

export default function Sidebar({ anchorLinks }: SidebarProps) {
	const [activeLink, setActiveLink] = useState<string | null>(null)

	useEffect(() => {
		if (typeof window === 'undefined') return

		setActiveLink(window.location.hash)
	}, [])

	return (
		<div className={s.sidebar}>
			{anchorLinks.map(({ link, text }) => (
				<a
					href={link}
					key={link}
					className={classNames(s.anchorLink, {
						[s.active]: activeLink === link,
					})}
					onClick={() => setActiveLink(link)}
				>
					<i className="pi pi-arrow-right" />
					<span>{text}</span>
				</a>
			))}
		</div>
	)
}
