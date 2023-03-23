import React from "react";
import { Link } from "react-router-dom";
import Data from "./Data";
import Card from "./Card";


const All = () => {
  return (
    <>
        <div className="internal-header">
          <Link to="/" className="link-text">
            <button className="btn-header"> Home</button>
          </Link>
        </div>
        
          <div className="cards-container ">

            {Data.map((val)=>{
              return(<>
              
              <Card 
              id={val.id}
              img={val.image}
              cat={val.category}
              name={val.name}
              />
              
              </>)
            })}

          </div>
    </>
  );
};

export default All;
