import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../App.css";

function StarRating({ noOfStars = 6 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getIndex) {
    console.log("click " + getIndex);
    setRating(getIndex);
  }

  function handleMove(getIndex) {
    console.log("hover " + getIndex);

    setHover(getIndex);
  }
  function handleLeave() {
    setHover(rating);
  }

  return (
    <div className="starRating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inActive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMove(index)}
            onMouseLeave={() => handleLeave()}
            size={50}
          />
        );
      })}
    </div>
  );
}
export default StarRating;
