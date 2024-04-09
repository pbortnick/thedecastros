'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import s from './nav.module.css'

const PAGES = [
	{ name: 'Home', href: '/' },
	{ name: 'Gallery', href: '/gallery' },
	{ name: 'Schedule', href: '/schedule' },
	{ name: 'Details', href: '/details' },
	// {
	// 	name: 'Registry',
	// 	href: 'https://www.zola.com/registry/jasonandpamela2025',
	// },
]

const MenubarDemo = () => {
	const currentPath = usePathname()
	return (
		<div className={s.nav}>
			<NavigationMenu.Root className={s.desktopNav}>
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
							className={s.externalLink}
							href="https://www.zola.com/registry/jasonandpamela2025"
							target="_blank"
							rel="noopener noreferrer"
						>
							Registry
							<ExternalLinkIcon style={{ height: 12, width: 12 }} />
						</Link>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild className={s.mobileNav}>
					<button className={s.iconButton} aria-label="Toggle nav">
						<HamburgerMenuIcon />
					</button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content className={s.dropdownContent} sideOffset={5}>
						{PAGES.map((page) => (
							<DropdownMenu.Item key={page.name}>
								<Link href={page.href} className={s.mobileLink}>
									{page.name}
								</Link>
							</DropdownMenu.Item>
						))}
						<DropdownMenu.Item>
							<Link
								className={classNames(s.mobileLink, s.externalLink)}
								href="https://www.zola.com/registry/jasonandpamela2025"
								target="_blank"
								rel="noopener noreferrer"
							>
								Registry
								<ExternalLinkIcon />
							</Link>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</div>
	)
}

export default MenubarDemo
