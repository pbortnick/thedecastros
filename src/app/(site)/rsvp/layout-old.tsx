import RsvpWidget from './components/rsvp-widget'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<RsvpWidget />
			{children}
		</>
	)
}

export default HomeLayout
