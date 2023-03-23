import React, { useState } from 'react'
import Menu from './Menu';
import Navbar from './Header';

const Card = () => {
  const [items, setItems] = useState(Menu);

  return (
    <>
      <Navbar/>

      {/* ITEM SECTION */}
<div className="row" >
  
      <div className="card-container container-fluid">
        <div className="">
          <div className=" mx-auto">
            <div className="">
              {items.map((element) => {
                const { id, image, name, category } = element;

                return (<>
                <div className="item1">
                <div className=" item-inside ">
                  {/* FOR IMAGES */}

                  <div className=" img-container ">
                    <img
                      src={image}
                      alt="menuPic"
                      className="img-fluid"
                    />
                  </div>
                  {/* menu item description */}

                  <div className=" card-content ">
                    <div className="card-title ">
                      <h1>{name}</h1>
                      <p>{category}</p>
                    </div>

                    <div className="menu-btn">
                      <a href="#">
                        <button className="btn btn-primary">View</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
                </>);
                
              })}

              
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card