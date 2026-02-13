import React from 'react'
import One from './one.jsx'
import Two from './two.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Copy1 from './copy1.jsx'
import Four from './four.jsx';
import './first.css'
import Copy2 from './copy2.jsx';
import Copy3 from './copy3.jsx';
import Copy4 from './copy4.jsx';
import Copy5 from './copy5.jsx';
import Copy6 from './copy6.jsx';






function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<One/>} />
        <Route  path="/two" element={<Two/>} />
        <Route  path="/copy1" element={<Copy1/>} />
        <Route  path="/four" element={<Four/>} />
        <Route  path="/copy2" element={<Copy2/>} />
        <Route  path="/copy3" element={<Copy3/>} />
        <Route  path="/copy4" element={<Copy4/>} />
        <Route  path="/copy5" element={<Copy5/>} />
        <Route  path="/copy6" element={<Copy6/>} />

      </Routes>
    </BrowserRouter>
  )
} 

export default App;





