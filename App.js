// src/App.js  
import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './pages/Home';  
import Apples from './pages/Apples';  
import Bananas from './pages/Bananas';  
import Oranges from './pages/Oranges';  
import Strawberries from './pages/Strawberries';  

function App() {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/apples" element={<Apples />} />  
        <Route path="/bananas" element={<Bananas />} />  
        <Route path="/oranges" element={<Oranges />} />  
        <Route path="/strawberries" element={<Strawberries />} />  
      </Routes>  
    </Router>  
  );  
}  

export default App;