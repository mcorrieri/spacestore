import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

function ApodCard({ apod }) {
  const [color, setColor] = useState(null);

  function handleClick() {
    setColor(!color);
  }

  return (
    <div className="apod-card">
      <div className="apod-info">
        <h2>{apod.title}: </h2>
        <h2>{apod.date}</h2>
      </div>
      <img className="apod-img" src={apod.url} alt="apod" />
      <p className="apod-desc">{apod.explanation}</p>
      <FaRegHeart className="heart" style={{ color }} onClick={handleClick} />
    </div>
  );
}

export default ApodCard;
