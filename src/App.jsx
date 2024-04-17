import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './components/Index'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  let [auth, setAuth] = useState(false)
  let getData = function(isAuth){
    setAuth(isAuth)
  }
  return (
    <>
      <Navbar  myClick = {getData} />
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Index/>}/> 
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         
        </Routes>
      </BrowserRouter>;

    </>
  )
}

export default App
