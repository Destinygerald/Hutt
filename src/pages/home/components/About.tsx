import '../style.css'
import '../style.mobile.css'
import img1 from '/images/images (25).webp'

export function About () {
	return (
		<div className='home-about'>
			<div className='home-about-img'>
				<img src={img1} />
			</div>

			<div className='home-about-cnt'>
				<span>Elegance . Timeless</span>

				<div>Modern Style Timeless Charm</div>

				<div>
					Discover Hutt's 2024 preview, featuring sofas, chairs, armchair and other furniture embodying diverse lifestyle concept, alongside strinking tables, coffee tables, sideboard etc
				</div>

				<button> About us </button>
			</div>
		</div>
	)
}