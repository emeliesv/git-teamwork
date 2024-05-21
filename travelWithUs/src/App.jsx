import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/about" element={<></>} /> 
      <Route path="/contact" element={<></>} />
      <Route path="/booking" element={<></>} />      
    </Routes>
    </BrowserRouter>
  );
}

export default App
