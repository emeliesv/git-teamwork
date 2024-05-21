import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<></>} />
        <Route path="/contact" element={<></>} />
        <Route path="/booking" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
