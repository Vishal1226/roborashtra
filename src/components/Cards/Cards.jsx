import React from "react";
// Page containg all the 4 cards

// importing card instance
import Card from "./Card/Card";
// importing csss
import "./Cards.css";

// content for each cards
const content = [
  { title: "Robowar", text: "this is s....", link: "", img: "" },
  { title: "", text: "", link: "", img: "" },
];

const Cards = () => {
  return (
    <div>
      {content.map((event) => {
        // create multiple Card
        return (
          <>
          <div className="row">
          <div>{event.title}</div>
          <div>{event.title}</div>
          </div>
          <div className="row">
          <div>{event.title}</div>
          <div>{event.title}</div>
          </div>

          </>

        );

      })}
    </div>
  );
};

export default Cards;
