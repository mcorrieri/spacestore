import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import RoverList from "./RoverList";

function App() {
  const [spaceArr, setSpaceArr] = useState([]);
  return (
    <div className="App">
      <Header />
      <RoverList />
    </div>
  );
}

export default App;
