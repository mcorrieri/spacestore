import React, { useState, useEffect } from "react";

function RoverList() {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=B3rfNGaxhBNkjTOXPWUzjmqDc8fkoYtINs8i7gBQ"
    )
      .then((res) => res.json())
      .then((data) => {
        setApod(data);
      });
  }, []);
  console.log(apod);

  //   const apoddata = apod.map((apod) => {
  //     return (
  //       <div>
  //         <h3 key={apod.date}>{apod.url}</h3>
  //       </div>
  //     );
  //   });

  return (
    <div>
      <h2>List of Rover Images</h2>
      <div>{apod.explanation}</div>
    </div>
  );
}

export default RoverList;
