import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'


const Nature = () => {
  return (
    <>
    <div className='internal-header'>
      <Link to="/" className='link-text'><button className="btn-header" > Home</button></Link>
      
      </div>
      <h1>NATURE</h1>
    </>
  )
}

export default Nature
