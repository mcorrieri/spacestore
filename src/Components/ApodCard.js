import React from "react";

function ApodCard({ apod }) {
  return (
    <div className="apod-card">
      <div className="apod-info">
        <h2>{apod.title}: </h2>
        <h2>{apod.date}</h2>
      </div>
      <img className="apod-img" src={apod.url} alt="apod" />
      <p className="apod-desc">{apod.explanation}</p>
      {/* <button className="heart">♡</button> */}
      <icon id="heart"></icon>
    </div>
  );
}

export default ApodCard;
