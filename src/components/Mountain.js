import React from 'react'
import { Link } from 'react-router-dom'

import Data from './Data'


const Mountain = () => {


  return (
    <>
    <div className='internal-header'>
    <Link to="/" className='link-text'><button className="btn-header" > Home</button></Link>
    
    </div>
      
    <div className="col-lg-12">
          <div className="cards-container ">
            {Data.map((val)=>{
              Data.filterItem((element)=>{
                console.log(element.category===val.category.Mountain)
                return element.category===val.category.Mountain

              })
              return (
                <>
                  <div className="cards">
                    <div className="card">
                      <img className="card-img" src={val.image} alt="img" />
                      <div className="card-info">
                        <h6 className="card-title"> {val.name}</h6>
                        <span className="card-text">{val.category} </span>
                        <a href={val.image} rel="noreferrer" target="_blank">
                          <button className="btn"> View</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      
    </>
  )
}

export default Mountain
