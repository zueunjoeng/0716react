import React from 'react';
import {  Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Board from './component/Board';
import About from './component/About';
import Entery from './component/Entery';

function App() {
  return (
  
      <div className="App">
       <div>
        <a href='/'>로고</a> 
       <Link to='/about'>회사소개</Link>
        <Link to='/board'>공지사항</Link>
        
       </div>
       <Routes>
       <Route path='/' element={<Entery />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/board' element={<Board />}></Route>
       </Routes>
       
       <aside>
        저는 퀵입니다.
       </aside>

       <footer>
        저는 하단입니다.
       </footer>
      </div>

  );
}

export default App;