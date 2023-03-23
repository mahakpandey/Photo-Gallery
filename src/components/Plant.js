import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'


const Plant = () => {
  return (
    <>
      <div className='internal-header'>
       <Link to="/" className='link-text'><button className="btn  btn-primary" > Home</button></Link>
       
       </div>
      <h1>PLANT</h1>
      
    </>
  )
}

export default Plant
