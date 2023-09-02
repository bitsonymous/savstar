import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Home from "./components/Home"
import Features from "./components/Features";


import React from 'react'

const App = () => {
  return (
  
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Features" element={<Features />} />

      
      </Routes>
    </BrowserRouter>
    
  )
}

export default App