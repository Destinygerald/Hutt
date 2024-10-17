import { createContext, useContext, useState, ReactNode } from 'react'

type tSidebarContext = {
	open: boolean;
	closeSidebar: () => void;
	openSidebar: () => void;
}

type tSidebarChildren = {
	children: ReactNode
}

const SidebarContext = createContext({} as tSidebarContext)


export function SidebarContextFunction () {
	return (
		useContext(SidebarContext)
	)
}

export function SidebarContextProvider ({ children }: tSidebarChildren) {
	
	const [ open, setOpen ] = useState<boolean>(false)

	function closeSidebar() {
		setOpen(false)
	}

	function openSidebar() {
		setOpen(true)
	}

	return (
		<SidebarContext.Provider value={{ open, closeSidebar, openSidebar }}>
			{children}
		</SidebarContext.Provider>
	)
}