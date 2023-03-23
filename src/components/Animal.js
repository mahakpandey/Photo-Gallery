import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home' 

const Animal = () => {
  return (
    <>
    <div className='internal-header'>
    <Link to="/" className='link-text'><button className="btn-header" > Home</button></Link>
   
    </div>

    <h1>Animal</h1>

      
    </>
  )
}

export default Animal
