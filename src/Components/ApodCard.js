import React, { useState } from "react";

function ApodCard({ apod }) {
  const { title, date, url, explanation } = apod;
  const [liked, setLiked] = useState(false);

  const handleToggle = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className="apod-card">
      <div className="apod-info">
        <h2>
          {title}: {date}{" "}
        </h2>
      </div>
      <img className="apod-img" src={url} alt="apod" />
      <p className="apod-desc">{explanation}</p>
      <button className="like-btn" onClick={handleToggle}>
        {liked ? "❤️" : "♡"}
      </button>
    </div>
  );
}

export default ApodCard;
