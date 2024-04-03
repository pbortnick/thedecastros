'use client'

import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import s from './nav.module.css'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

const PAGES = [
	{ name: 'Home', href: '/' },
	{ name: 'Gallery', href: '/gallery' },
	{ name: 'Schedule', href: '/schedule' },
	{ name: 'FAQs', href: '/faqs' },
	{ name: 'Registry', href: '/registry' },
]

const MenubarDemo = () => {
	const currentPath = usePathname()
	return (
		<div className={s.nav}>
			<NavigationMenu.Root>
				<NavigationMenu.List className={s.navList}>
					{PAGES.map((page) => (
						<Link
							href={page.href}
							key={page.name}
							className={classNames(
								s.link,
								page.href === currentPath && s.isActive,
							)}
						>
							{page.name}
						</Link>
					))}
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</div>
	)
}

export default MenubarDemo
