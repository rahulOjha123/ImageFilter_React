import React, { useState } from "react";
import Filterr from "../FilterImage/Filterr.css"
import data from "../FilterImage/data.json";

function Filter() {
  const [items, setItems] = useState(data);
  const FilterImg = (foods) => {
    const dataall=data.filter((ele)=>{
            return ele.name===foods;
    })
    setItems(dataall)
  };
  return (
    <div className="mainss">
      <div className="container">
        <h2>All Imagess Here Can Filter</h2>
        <div
          className="nav pl-4">
          <button className="btn btn-warning " onClick={() =>setItems(data)}>
            All
          </button>
          <button
            className="btn btn-warning "
            onClick={() => FilterImg("bick")}
          >
            Bick
          </button>
          <button
            className="btn btn-warning "
            onClick={() => FilterImg("foods")}
          >
            Foods
          </button>
          <button className="btn btn-warning " onClick={() => FilterImg("god")}>
            God
          </button>
        </div>
      </div>
      <div className="picture_main">
        {items.map((val,index) => {
          return (
            <div className='imgs'key={index}>
                <div className='content'>
                    <img src={val.img}alt='imgss----'></img>
                </div>
                <div className='biography'>
                    <h3>{val.name}</h3>
                    <p>{val.para}</p>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Filter;
