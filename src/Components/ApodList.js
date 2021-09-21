import React, { useState, useEffect } from "react";
import ApodCard from "../Components/ApodCard";
import { API_KEY } from "./secrets";

function ApodList() {
  const [apodList, setApodList] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?${API_KEY}&start_date=2021-09-08&end_date=2021-09-15`
    )
      .then((res) => res.json())
      .then((data) => {
        setApodList(data);
      });
  }, []);

  const apoddata = apodList.map((apod) => {
    return (
      <div key={apod.date}>
        <ApodCard apod={apod} />
      </div>
    );
  });
  return (
    <div className="apod-list">
      {apoddata.length > 0 ? (
        <div>{apoddata}</div>
      ) : (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default ApodList;
