import './style.css'
import './style.mobile.css'

// import { IconType } from 'react-icons'
import { FaWrench } from 'react-icons/fa6'
import { GiArtificialHive } from 'react-icons/gi'
import { MdChair } from 'react-icons/md'

import { ReactNode } from 'react'

import img1 from '/images/interior2.webp'

type tService = {
	title: string;
	description?: string|null;
	icon: ReactNode|null;
}

function ServicesCard ({ title, icon }: tService) {
	return (
		<div className='services-card'>	
			<span>{icon}</span>
			<span>{title}</span>

			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Sed velit lectus, porttitor eu convallis sit amet, semper eget mauris. Integer in pulvinar mauris.
			</div>
		</div>
	)
}

function Page () {
	return (
		<div className='services'>
			<div className='services-banner'>
				<span>Services we Offer?</span>

				<img src={img1} />
			</div>

			<div className='services-cnt'>
				<div>We have your best interest in mind</div>

				<div className='services-cnt-inner'>
					<ServicesCard title='Renovation' icon={<FaWrench/>}/>
					<ServicesCard title='Furniture supply' icon={<MdChair/>}/>
					<ServicesCard title='Interior design' icon={<GiArtificialHive/>}/>
				</div>
			</div>
		</div>
	)
}

export default Page