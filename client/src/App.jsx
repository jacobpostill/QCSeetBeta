// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Singup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import SelectLine from './createReport/SelectLine'
import Report from './viewReport/Report'
import Depal from './createReport/canLine/depal'
import Primary from './createReport/canLine/Primary'
import BallCage from './createReport/canLine/BallCage'
import RunSheet from './createReport/canLine/RunSheet'
import Paperboard from './createReport/canLine/Paperboard'
import Seam from './createReport/canLine/Seam'
import Shrink from './createReport/canLine/Shrink'
import Rinser from './createReport/canLine/rinser'
import CalibrationForm from './createReport/canLine/Calibration'
import ViewDepal from './viewReport/canLine/depal'
import PrimaryView from './viewReport/canLine/PrimaryView'
import RinserView from './viewReport/canLine/rinserView'
import BallCageView from './viewReport/canLine/BallCageView'


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
        <Route path='/canline/primary/:id' element={<Primary/>}></Route>
        <Route path='/canline/calibration/:id' element={<CalibrationForm/>}></Route>
        <Route path='/canline/BallCage/:id' element={<BallCage/>}></Route>
        <Route path='/canline/RunSheet/:id' element={<RunSheet/>}></Route>
        <Route path='/canline/Paperboard/:id' element={<Paperboard/>}></Route>
        <Route path='/canline/Seam/:id' element={<Seam/>}></Route>
        <Route path='/canline/Shrink/:id' element={<Shrink/>}></Route>
        <Route path='/canline/Rinser/:id' element={<Rinser/>}></Route>
        <Route path='/report/depal/:id' element={<ViewDepal/>}></Route>
        <Route path='/report/primary/:id' element={<PrimaryView/>}></Route>
        <Route path='/report/rinser/:id' element={<RinserView/>}></Route>
        <Route path='/report/BallCage/:id' element={<BallCageView/>}></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App
