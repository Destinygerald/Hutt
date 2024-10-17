import './style.css'
import './style.mobile.css'
import { HeroSection } from './components/HeroSection.tsx'
import { FirstDisplay } from './components/FirstDisplay.tsx'
import { About } from './components/About.tsx'
import { Explore } from './components/Explore.tsx'


function Page () {
	return (
		<div className='homepage'>
			<HeroSection />
			<FirstDisplay />
			<About />
			<Explore />
		</div>
	)
}

export default Page