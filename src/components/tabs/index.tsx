'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'

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
		<div>
			<ul>
				{tabs.map((tab) => (
					<li key={tab.id}>
						<button onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
					</li>
				))}
			</ul>
			<div id={activeTab}>
				{tabs.find((tab) => tab.id === activeTab)?.content}
			</div>
		</div>
	)
}
