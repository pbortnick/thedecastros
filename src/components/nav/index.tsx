'use client'

import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import s from './nav.module.css'

const PAGES = [
	{ name: 'Home', href: '/' },
	{ name: 'Schedule', href: '/schedule' },
	{ name: 'FAQs', href: '/faqs' },
	{ name: 'Registry', href: '/registry' },
]

const MenubarDemo = () => {
	return (
		<div className={s.nav}>
			<NavigationMenu.Root>
				<NavigationMenu.List className={s.navList}>
					{PAGES.map((page) => (
						<Link href={page.href} key={page.name}>
							{page.name}
						</Link>
					))}
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</div>
	)
}

export default MenubarDemo
