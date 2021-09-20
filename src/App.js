import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ApodList from "./Components/ApodList";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ApodList />
      <Footer />
    </div>
  );
}

export default App;
