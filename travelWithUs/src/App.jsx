import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'

const App = () => {

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
