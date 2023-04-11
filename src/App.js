// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Success from './components/success';
// import HomeContent from './components/HomeContent';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='/success' element={<Success/>}></Route>
      
    </Routes>
    {/* <Home/> */}
    </>
  )

}

export default App;
