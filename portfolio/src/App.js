import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./components/Routes";

import "./App.scss";

function App() {
  return (
    <div className="App">
    <div className="body-background"></div>
      <header className="App-header">
        <h1>Caleb Redd Portfolio</h1>
        <Navbar />
      </header>
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
