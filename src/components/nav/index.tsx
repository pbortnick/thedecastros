'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'
import s from './nav.module.css'

const PAGES = [
	{ name: 'Home', href: '/' },
	{ name: 'Schedule', href: '/schedule' },
	{ name: 'RSVP', href: '/rsvp' },
]

const TRAVEL_PAGES = [
	{ name: 'Hotels', href: '/travel/hotels' },
	{ name: 'Things to Do', href: '/travel/things-to-do' },
	{ name: 'Dining', href: '/travel/dining' },
	{ name: 'Directions', href: '/travel/directions' },
]

const DROPDOWN_PAGES = [
	{ name: 'Gallery', href: '/gallery' },
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
					<NavigationMenu.Item className={s.travelDropdown}>
						<NavigationMenu.Trigger className={s.dropdownTrigger}>
							Travel
							<CaretDownIcon className={s.caret} aria-hidden />
						</NavigationMenu.Trigger>
						<NavigationMenu.Content className={s.dropdownContent}>
							{TRAVEL_PAGES.map((page) => (
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
						</NavigationMenu.Content>
					</NavigationMenu.Item>
					{DROPDOWN_PAGES.map((page) => (
						<NavigationMenu.Item key={page.name} className={s.dropdownPage}>
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
						<NavigationMenu.Link
							className={s.link}
							href="https://www.zola.com/registry/jasonandpamela2025"
							target="_blank"
							rel="noopener noreferrer"
						>
							Registry
						</NavigationMenu.Link>
					</NavigationMenu.Item>
					<NavigationMenu.Item className={s.dropdown}>
						<NavigationMenu.Trigger className={s.dropdownTrigger}>
							More
							<CaretDownIcon className={s.caret} aria-hidden />
						</NavigationMenu.Trigger>
						<NavigationMenu.Content className={s.dropdownContent}>
							{DROPDOWN_PAGES.map((page) => (
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
						</NavigationMenu.Content>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</div>
	)
}

export default MenubarDemo
