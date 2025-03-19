'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode, KeyboardEvent } from 'react'
import s from './tabs.module.css'
import classNames from 'classnames'
import { useSearchParams } from 'next/navigation'

interface TabsProps {
	tabs: {
		label: string
		id: string
		content: ReactNode
	}[]
	initialActiveTab?: number
}

export default function Tabs({ tabs }: TabsProps) {
	const [activeTabIndex, setActiveTabIndex] = useState<number|null>(null)
	const tabNodes = useRef<Array<HTMLButtonElement>>([])

	const searchParams = useSearchParams()
	const [tabsInitialized, setTabsInitialized] = useState(false)

	useEffect(() => {
		const activeTab = searchParams.get('tab') ?? tabs[0].id
		const initialActiveTabIndex = tabs.findIndex(
			({ id }) => (id) === activeTab
		)
		if (!tabsInitialized && initialActiveTabIndex >= 0) {
			setActiveTabIndex(initialActiveTabIndex)
			setTabsInitialized(true)
		}
	}, [searchParams])


	const focusTab = useCallback(
		(tabIndex: number, e: KeyboardEvent<HTMLButtonElement>) => {
			e.preventDefault()
			tabNodes.current[tabIndex].focus()
		},
		[],
	)

	const onKeyUp = useCallback(
		(tabIndex: number, e: KeyboardEvent<HTMLButtonElement>) => {
			const leftArrow = 'ArrowLeft'
			const rightArrow = 'ArrowRight'
			const enterKey = 'Enter'
			const spaceKey = ' '

			if (e.key === rightArrow) {
				const nextTabIndex = (tabIndex + 1) % tabs.length
				focusTab(nextTabIndex, e)
			} else if (e.key === leftArrow) {
				const prevTabIndex = (tabIndex + tabs.length - 1) % tabs.length
				focusTab(prevTabIndex, e)
			} else if (e.key === enterKey || e.key === spaceKey) {
				setActiveTabIndex(tabIndex)
			}
		},
		[tabs.length],
	)

	const activeTab = useMemo(() => tabs[activeTabIndex], [activeTabIndex, tabs])

	return (
		<div className={s.root}>
			<ul className={s.list} role="tablist">
				{tabs.map((tab, index) => {
					const isActive = activeTabIndex === index
					return (
						<li key={tab.id} className={s.tab} role="presentation">
							<button
								role="tab"
								type="button"
								onClick={() => setActiveTabIndex(index)}
								className={classNames(s.button, {
									[s.active]: activeTabIndex === index,
								})}
								onKeyUp={(e) => onKeyUp(index, e)}
								ref={(el: HTMLButtonElement | null) => {
									if (el) {
										tabNodes.current.push(el)
									}
								}}
								tabIndex={!isActive ? -1 : undefined}
							>
								{tab.label}
							</button>
						</li>
					)
				})}
			</ul>
			<div id={activeTab.id} className={s.content}>
				{activeTab.content}
			</div>
		</div>
	)
}
