import '../style.css'
import '../style.mobile.css'

import img1 from '/images/images (24).webp'
import img2 from '/images/images (25).webp'
import img3 from '/images/images (26).webp'
import img4 from '/images/images (27).webp'
import img5 from '/images/images (28).webp'

export function Explore () {
	return (
		<div className='explore'>
			<div className='explore-hdr'>
				<div>Explore our Proudly Collection</div>

				<div>
					<button>View more</button>

					<div>Hutt will showcase its vision of contemporary architecture, interior design trends and innovative living.</div>
				</div>
			</div>

			<div className='explore-cnt'>
				<div>
					<img src={img1} />
					<div>
						<span>Mondarin</span>
						<div className='explore-cnt-btn'> ↗ </div>
					</div>
				</div>

				<div>
					<img src={img2} />
					<div>
						<span>Narnia</span>
						<div className='explore-cnt-btn'> ↗ </div>
					</div>
				</div>
				
				<div>
					<img src={img3} />
					<div>
						<span>Artex</span>
						<div className='explore-cnt-btn'> ↗ </div>
					</div>
				</div>
				
				<div>
					<img src={img4} />
					<div>
						<span>Brera</span>
						<div className='explore-cnt-btn'> ↗ </div>
					</div>
				</div>
				
				<div>
					<img src={img5} />
					<div>
						<span>Alea Pro</span>
						<div className='explore-cnt-btn'> ↗ </div>
					</div>
				</div>
				
				<div>
					<img src={img3} />
					<div>
						<span>Mondarin</span>
						<div className='explore-cnt-btn'> ↗ </div>
					</div>
				</div>
			</div>

		</div>
	)
}