import React from "react";
import "./Card.css";
const Card = () => {
  return <div>
      <div className="root">
          <div className="before-element">
          <img src = {img} alt="" srcset=""/>
          </div>
          
          <div className="headDesc">
            <h1>{title}</h1>
            <p className="desc">
              {text}
              <span><a href={link}>&nbsp;&nbsp;Read more...</a></span>
            </p>
          </div>
        </div>
  </div>;
};

export default Card;
