import './App.css'
import './App.mobile.css'
import { CiMenuBurger } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { SidebarContextFunction } from './context/SidebarContext.tsx'

export function Navbar () {

	const { openSidebar } = SidebarContextFunction()

	const navigate = useNavigate()

	return (
		<div className='navbar'>
			<div className='nav-logo'>HuTT</div>

			<div className='nav-items'>
				<span onClick={() => navigate('/')}>Home</span>
				<span onClick={() => navigate('/services')}>Sevices</span>
				<span>About</span>
				<span onClick={() => navigate('/projects')}>Projects</span>
			</div>

			<div className='nav-menu' onClick={openSidebar}>
				<CiMenuBurger />
			</div>
		</div>
	)
}
