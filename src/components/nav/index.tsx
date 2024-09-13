'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import s from './nav.module.css'

const PAGES = [
	{ name: 'Home', href: '/' },
	{ name: 'Gallery', href: '/gallery' },
	{ name: 'Schedule', href: '/schedule' },
	{ name: 'Travel', href: '/travel' },
	{ name: 'FAQ', href: '/faq' },
]

const MenubarDemo = () => {
	const currentPath = usePathname()

	return (
		<div className={s.root}>
			<NavigationMenu.Root className={s.nav}>
				<NavigationMenu.List className={s.navList}>
					{PAGES.map((page) => (
						<NavigationMenu.Item key={page.name}>
							<Link
								href={page.href}
								className={classNames(
									s.link,
									page.href === currentPath && s.isActive,
								)}
							>
								{page.name}
							</Link>
						</NavigationMenu.Item>
					))}
					<NavigationMenu.Item>
						<Link
							className={s.link}
							href="https://www.zola.com/registry/jasonandpamela2025"
							target="_blank"
							rel="noopener noreferrer"
						>
							Registry
						</Link>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</div>
	)
}

export default MenubarDemo
