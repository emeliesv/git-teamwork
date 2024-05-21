import { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/about/About'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/about" element={<About />}  /> 
      <Route path="/contact" element={<></>} />
      <Route path="/booking" element={<></>} />      
    </Routes>
    </BrowserRouter>
  );
}

export default App
