import './App.css'
import './App.mobile.css'
import img1 from '/images/interior2.webp'

export function Footer () {
	return (
		<div className='footer'>
			<div className='footer-top'>
				<div className='footer-top-left'>
					<div>Engage with us in Conversation</div>

					<div>In a Global world based on Communication, a brand must look beyond its borders, open up new experiences and dare to be different. Meeting the brightest minds of one's time is a great way to nurture creativity. </div>
				</div>

				<div className='footer-top-right'> <img src={img1} /> </div>
			</div>

			<div className='footer-btm'>
				<div className='footer-btm-left'>
					<div className='footer-btm-list'>
						<span>About</span>
						<span>Our story</span>
						<span>Store locator</span>
						<span>Sustainablity</span>
						<span>Careers</span>
						<span>Contacts</span>
					</div>

					<div className='footer-btm-list'>
						<span>Customer Services</span>
						<span>Price and Payment</span>
						<span>Shipping</span>
						<span>Return Policy</span>
						<span>Terms of Servicess</span>
						<span>Private Policy</span>
					</div>

					<div className='footer-btm-list'>
						<span>Social Media</span>
						<span>Instagram</span>
						<span>Facebook</span>
						<span>LinkedIn</span>
					</div>
				</div>

				<div className='footer-btm-right'>
					HuTT
				</div>
			</div>	
		</div>
	)
}