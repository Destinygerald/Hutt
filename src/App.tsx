import './App.css'
import './fonts.css'
import { Routes, Route } from 'react-router-dom'

import { SidebarContextProvider } from './context/SidebarContext.tsx'
//components
import { Navbar } from './Navbar.tsx'
import { Footer } from './Footer.tsx'
import { Sidebar } from './Sidebar.tsx'

//pages
import Homepage from './pages/home/Page.tsx'
import Projects from './pages/projects/Page.tsx'
import Services from './pages/services/Page.tsx'

function App() {  

  return (
    <SidebarContextProvider>
      <div className='app'>
        <Navbar />

        <Routes>
          <Route path='*' element={<Homepage />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
        </Routes>

        <Footer />

        <Sidebar />

      </div>
    </SidebarContextProvider>
  )
}

export default App
