import React from 'react'
import Data from './Data'


const Card = (props) => {

  return (
    <>

      <div className="card" key={props.id} >
        <img className="card-img" src={props.img} alt="img" />
        <div className="card-info">
          <h6 className="card-title"> {props.name}</h6>
          <span className="card-text">{props.cat} </span>
          <a href={Data.image} rel="noreferrer" target="_blank">
            <button className="btn-card"> View</button>
          </a>
        </div>
      </div>


    </>
  )

  
}

export default Card