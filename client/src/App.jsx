// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Singup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import SelectLine from './createReport/SelectLine'
import Report from './viewReport/Report'
import Depal from './createReport/canLine/depal'




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/selectLine' element={<SelectLine/>}></Route>
        <Route path='/report' element={<Report/>}></Route>
        <Route path='/canline/depal/:id' element={<Depal/>}></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App
