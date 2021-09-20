import React, { useState, useEffect } from "react";
import ApodCard from "../Components/ApodCard";

function ApodList() {
  const [apodList, setApodList] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=B3rfNGaxhBNkjTOXPWUzjmqDc8fkoYtINs8i7gBQ&start_date=2021-09-08&end_date=2021-09-15"
    )
      .then((res) => res.json())
      .then((data) => {
        setApodList(data);
      });
  }, []);

  const apoddata = apodList.map((apod) => {
    return (
      <div>
        <ApodCard key={apod.date} apod={apod} />
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
