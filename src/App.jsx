
import React from 'react'

import './App.css'

import {BrowserRouter , Routes, Route} from 'react-router-dom'

import Nav from './Nav'
import Signup from './signup'
import PrivatComponent from '../src/Components/PrivateComponent'
import Login from '../src/Components/Login'
import AddProduct from '../src/Components/Product'
// import  from '../src/Components/'
import AllProducts from './Components/Home'

function App() {


  return (
    <>
    <BrowserRouter>
    <Nav/>
    
    <Routes>
      <Route element={<PrivatComponent/>}>
      <Route path='/' element={<AllProducts/>} />
      <Route path='/add' element={<AddProduct/>} />
      <Route path='/update' element={<h1>landed on update Page</h1>} />
      {/* <Route path='/logout' element={<h1>landed on Logout Page</h1>} /> */}
      </Route>


      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  
    </BrowserRouter>
    
     
    </>
  )
}

export default App
