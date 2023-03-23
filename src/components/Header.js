import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Data from './Data'

const Header = () => {

const [category, setCategory] = useState(Data)

const filterItem = (val)=>{
  const updatedLitst = Data.filter((element)=>{
    return element.category===val
  })
  setCategory(updatedLitst)
}


  return (<>
 
    <nav className="nav1">
    
        <h1 className="main-heading swing">Photo Gallery</h1>
        <hr />
        <div className="menu-tab ">
        <Link to="/" className='link-text'><button className=" btn-header" > Home</button></Link>
        <Link to="Plant" className='link-text'><button className=" btn-header" > Plant</button></Link>
        <Link to="Animal" className='link-text'><button className="btn-header " > Animal</button></Link>
        <Link to="Mountain" className='link-text'><button className="btn-header " onClick={()=>filterItem("Mountain")} > Mountain</button></Link>
        <Link to="Nature" className='link-text'><button className="btn-header " > Nature</button></Link>
        <Link to="All" className='link-text'><button className="btn-header " > All</button></Link>
        </div>
      
    </nav>
    </>
  )
}

export default Header
