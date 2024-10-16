import './App.css'
import './fonts.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar.tsx'
import { Footer } from './Footer.tsx'
import Homepage from './pages/home/Page.tsx'


function App() {  

  return (
    <div className='app'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
