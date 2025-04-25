import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import AllHotels from './pages/AllHotels/AllHotels.jsx'
import Hotel from './pages/hotel/Hotel.jsx'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/hotels' element={<AllHotels />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
