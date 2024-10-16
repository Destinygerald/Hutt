import '../style.css'
import '../style.mobile.css'
import img1 from '/images/interior2.webp'


function HeroSectionExtras () {
	return (
		<div className='hero-sect-cnt-btm'>
			<div>
				<div className='glass-card'>
					<span>Crafting spaces that harmonize modern anesthetics with timeless elegance, our contemporary interior designs breathe life into every room, redefining the essence of chic living.</span>
					<button>View More</button>
				</div>

				<div className='glass-card'>
					<img src={img1} />
				</div>
			</div>

			<div className='svg-div'>
				<svg viewBox='0 0 100 100'>
					<path id='curve' d='M 50, 50 m 40, 0 a 40, 40 0 1, 0 -80, 0 a 40, 40 0 1, 0 80, 0'/>

					<text width='0'>
						<textPath alignmentBaseline='before-edge' xlinkHref='#curve'>Modern . Modern . Minimalist . Modern. Minimalist . </textPath>
					</text>
				</svg>
			</div>
		</div>
	)
}

export function HeroSection () {
	return (
		<div className='hero-sect'>
			<img className='hero-sect-bg' src={img1} />

			<div className='hero-sect-cnt'>
				<div>Contemporary</div>
				<HeroSectionExtras />
			</div>
		</div>
	)
}