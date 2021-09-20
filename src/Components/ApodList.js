import React, { useState, useEffect } from "react";
import ApodCard from "../Components/ApodCard";

function ApodList() {
  const [apodList, setApodList] = useState([]);
  const [loading, setLoading] = useState(true);
  //   https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-10

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=B3rfNGaxhBNkjTOXPWUzjmqDc8fkoYtINs8i7gBQ&start_date=2021-09-08&end_date=2021-09-15"
    )
      .then((res) => res.json())
      .then((data) => {
        setApodList(data);
      });
  }, []);
  console.log(apodList);

  const apoddata = apodList.map((apod) => {
    return (
      <div>
        <ApodCard key={apod.date} apod={apod} />
      </div>
    );
  });

  return (
    <div className="apod-list">
      <div>{apoddata}</div>
    </div>
  );
}

export default ApodList;
