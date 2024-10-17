import './App.css'
import './App.mobile.css'
import { SidebarContextFunction } from './context/SidebarContext.tsx'
import { BsX } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'

export function Sidebar () {

	const { open, closeSidebar } = SidebarContextFunction()

	const { pathname } = useLocation()
	const navigate = useNavigate()

	function changePage (nav: string) {
		navigate(nav)
		closeSidebar()
	}

	return (
		<div className={open ? 'sidebar' : 'sidebar-hide'}>
			<span className='exit' onClick={closeSidebar}> <BsX /> </span>

			<div className='sidebar-cnt'>
				<div className={pathname == '/' ? 'active' : ''} onClick={() => changePage('/')}>Home</div>
				<div className={pathname.includes('services') ? 'active' : ''}  onClick={() => changePage('/services')}>Services</div>
				<div>About</div>
				<div className={pathname.includes('projects') ? 'active' : ''}  onClick={() => changePage('/projects')}>Projects</div>
			</div>
		</div>
	) 
}