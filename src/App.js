import React from 'react';
import {  Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Board from './component/Board';
import About from './component/About';

function App() {
  return (
  
      <div className="App">
       <div>
       <Link to='/about'>회사소개</Link>
        <Link to='/board'>공지사항</Link>
       </div>
       <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/board' element={<Board />}></Route>
       </Routes>
      </div>

  );
}

export default App;