'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'
import s from './tabs.module.css'
import classNames from 'classnames'

interface TabsProps {
	tabs: {
		label: string
		id: string
		content: ReactNode
	}[]
}

export default function Tabs({ tabs }: TabsProps) {
	const [activeTab, setActiveTab] = useState(tabs[0].id)

	return (
		<div className={s.root}>
			<ul className={s.list}>
				{tabs.map((tab) => (
					<li key={tab.id} className={s.tab}>
						<button
							onClick={() => setActiveTab(tab.id)}
							className={classNames(s.button, {
								[s.active]: activeTab === tab.id,
							})}
						>
							{tab.label}
						</button>
					</li>
				))}
			</ul>
			<div id={activeTab} className={s.content}>
				{tabs.find((tab) => tab.id === activeTab)?.content}
			</div>
		</div>
	)
}
