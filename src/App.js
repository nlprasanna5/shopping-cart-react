// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='register' element={<Register/>}></Route>
    </Routes>
    {/* <Home/> */}
    </>
  )

}

export default App;
