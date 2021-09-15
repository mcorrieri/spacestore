import React from "react";

function ApodCard({ apod }) {
  return (
    <div>
      <h2>{apod.title}</h2>
      <h3>{apod.date}</h3>
      <img src={apod.url} alt="apod" />
      <p>{apod.explanation}</p>
    </div>
  );
}

export default ApodCard;
