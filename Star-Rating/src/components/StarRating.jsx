import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../App.css";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="StarRating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        function handleClick(getIndex) {
          setRating(getIndex);
        }

        function handleMove(getIndex) {
          setHover(getIndex);
        }

        function handleLeave(getIndex) {
          setHover(rating);
        }

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inActive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMove(index)}
            onMouseLeave={() => handleLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
