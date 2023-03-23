import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All from './All'
import Animal from './Animal'
import Home from './Home'
import Mountain from './Mountain'
import Nature from './Nature'
import Plant from './Plant'

const App = () => {
  return (
    <>
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Plant' element={<Plant/>}/> 
        <Route path='/Animal' element={<Animal/>}/>
        <Route path='/Mountain' element={<Mountain/>}/>
        <Route path='/Nature' element={<Nature/>}/>
        <Route path='/All' element={<All/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
