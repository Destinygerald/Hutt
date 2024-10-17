import './style.css'
import './style.mobile.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
// import { IoIosArrowBack } from 'react-icons/io'

import img1 from '/images/images (24).webp'
import img2 from '/images/images (25).webp'
import img3 from '/images/images (26).webp'
import img4 from '/images/images (27).webp'
import img5 from '/images/images (28).webp'
import img6 from '/images/interior1.webp'
import img7 from '/images/interior2.webp'

type tProjectsContent = {
	img: string;
	name: string;	
}

type tProjectsCard = {
	img: string;
	name: string;
	motionValue?: any;
}

// const ProjectsArray = Array.from(Array(12))
const ProjectsArray: tProjectsContent[] = [
	{
		img: img1,
		name: 'Mondarin'
	},
	{
		img: img2,
		name: 'Narnia'
	},
	{
		img: img3,
		name: 'Artex'
	},
	{
		img: img4,
		name: 'Brera'
	},
	{
		img: img5,
		name: 'Alea Pro'
	},
	{
		img: img6,
		name: 'Gize'
	},
	{
		img: img7,
		name: 'Yret'
	},
	{
		img: img3,
		name: 'Artex'
	},
	{
		img: img5,
		name: 'Alea Pro'
	},
	{
		img: img2,
		name: 'Narnia'
	},
	{
		img: img1,
		name: 'Mondarin'
	},
	{
		img: img4,
		name: 'Brera'
	}
] 


const variants = {
	initial: {
		scale: 1.6
	},
	animate: {
		scale: 1.12,
		transition: {
			duration: 1
		}
	}
}

function ProjectsCard ({img, name, motionValue}: tProjectsCard) {

	const y = useTransform(motionValue, [0, 1], [0, -200])

	return (
		<div className='projects-card'>
			<motion.img style={{ y }} src={img} variants={variants} initial='initial' animate='animate' />

			<div>
				<span>{name}</span>
				<span>↗</span>
			</div>
		</div>
	)
}

function Page () {

	const targetRef = useRef<HTMLDivElement | null>(null)

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['-72px start', 'end end']
	})

	return (
		<div className='projects' ref={targetRef}>
			{
				ProjectsArray.map((itm, i) => (
					<ProjectsCard motionValue={scrollYProgress} img={itm.img} name={itm.name} key={'projects-card-' + i} />
				))
			}
		</div>
	)
}

export default Page