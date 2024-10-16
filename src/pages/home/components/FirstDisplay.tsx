import '../style.css'
import '../style.mobile.css'
import img1 from '/images/interior1.webp'
import img2 from '/images/images (24).webp'

export function FirstDisplay () {
	return (
		<div className='first-display'>
			<div className='first-display-top'>		
				<div className='first-display-left'>
					<div />
					<div />
					<div />
					<div />
					<img src={img1} />

					<div className='first-display-txt'>

						<div> 
							<button>View More</button>
						</div>

						<div>Modern</div>
						<div>Minimalist</div>
					</div>
				</div>

				<div className='first-display-right'>
					<div>
						<button>Aesthetics</button>

						<div>Aesthetic Furniture where every piece tells a story of style</div>

						<div>Into a gallery of elegance</div>
					</div>


					<div>
						<img src={img2} />

						<div>
							<button>Best Furniture</button>
							<span>Indulge in the artistry of everyday living.</span>
						</div>

						{/* This div is to give the cutaway effect */}
						<div />
						<div> ↗ </div>
					</div>
				</div>
			</div>

			<div className='first-display-btm'>
				<div>
					<span>500+</span>
					<span>Products</span>
				</div>

				<div>
					<span>20+</span>
					<span>Projects</span>
				</div>

				<div>
					<span>50+</span>
					<span>Satisfied Customers</span>
				</div>

				<div>
					<span>No.1</span>
					<span>Top 1 in Paris</span>
				</div>
			</div>
		</div>
	)
}