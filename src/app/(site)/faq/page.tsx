import Hero from 'components/hero'

export default function FAQPage() {
	return (
		<>
			<Hero
				title="FAQ"
				image={{
					src: require('./accent.png'),
					width: 402.75,
					height: 435,
					alt: '',
				}}
			/>
			<div>
				<p style={{ textAlign: 'center', paddingTop: 100 }}>Coming soon!</p>
			</div>
		</>
	)
}
