import './App.css'
import './App.mobile.css'
import { CiMenuBurger } from 'react-icons/ci'

export function Navbar () {

	return (
		<div className='navbar'>
			<div className='nav-logo'>HuTT</div>

			<div className='nav-items'>
				<span>Home</span>
				<span>Sevices</span>
				<span>About</span>
				<span>Projects</span>
			</div>

			<div className='nav-menu'>
				<CiMenuBurger />
			</div>
		</div>
	)
}
