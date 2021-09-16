import React, { useState } from "react";
import Heart from "react-heart";

function ApodCard({ apod }) {
  const { title, date, url, explanation } = apod;
  const [click, setClick] = useState(false);

  return (
    <div className="apod-card">
      <div className="apod-info">
        <h2>
          {title}: {date}{" "}
        </h2>
      </div>
      <img className="apod-img" src={url} alt="apod" />
      <p className="apod-desc">{explanation}</p>
      <Heart
        click={click}
        onClick={() => setClick(!click)}
        className="heart"
        // animationTrigger="both"
        // inactiveColor="rgba(255,125,125,.75)"
        // activeColor="#e019ae"
        // animationDuration={0.1}
      />
    </div>
  );
}

export default ApodCard;
