'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
	HamburgerMenuIcon,
	DotFilledIcon,
	CheckIcon,
	ChevronRightIcon,
} from '@radix-ui/react-icons'
import s from './nav.module.css'

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
			<NavigationMenu.Root className={s.desktopNav}>
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

			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild className={s.mobileNav}>
					<button className="IconButton" aria-label="Toggle nav">
						<HamburgerMenuIcon />
					</button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content className={s.dropdownContent} sideOffset={5}>
						{PAGES.map((page) => (
							<DropdownMenu.Item key={page.name}>
								<Link href={page.href} className={s.link}>
									{page.name}
								</Link>
							</DropdownMenu.Item>
						))}
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</div>
	)
}

export default MenubarDemo
