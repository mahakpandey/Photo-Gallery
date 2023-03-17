import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";

import Menu from "./Menu";

const Gallery = () => {
  const [items, setItems] = useState(Menu);

  return (
    <>


      <div>
        <h1 className="main-heading">Photo Gallery</h1>
        <hr />
        <div className="menu-tab container">
          <button className="btn btn-primary">Plant</button>
          <button className="btn btn-primary">Animal</button>
          <button className="btn  btn-primary">Mountain</button>
          <button className="btn  btn-primary">Nature</button>
          <button className="btn  btn-primary">All</button>
        </div>
      </div>


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
};

export default Gallery;
