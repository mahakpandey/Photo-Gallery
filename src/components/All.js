import React from "react";
import { Link } from "react-router-dom";
import Data from "./Data";

const All = () => {
  return (
    <>
        <div className="internal-header">
          <Link to="/" className="link-text">
            <button className="btn  btn-primary"> Home</button>
          </Link>
        </div>
        
          <div className="cards-container ">
            {Data.map((val)=>{
              return (
                <>
                    <div className="card" key={val.id} >
                      <img className="card-img" src={val.image} alt="img" />
                      <div className="card-info">
                        <h6 className="card-title"> {val.name}</h6>
                        <span className="card-text">{val.category} </span>
                        <a href={val.image} rel="noreferrer" target="_blank">
                          <button className="btn"> View</button>
                        </a>
                      </div>
                    </div>
                  
                </>
              );
            })}
          </div>
    </>
  );
};

export default All;
