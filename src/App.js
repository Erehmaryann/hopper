import React from "react";
import Header from "./components/Header";
import HopperApp from "./components/HopperApp";
import Features from "./components/Features";
import Careers from "./components/Careers";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HopperApp />
      <Features />
      <Careers />
      <Destination />
      <Footer />
    </div>
  );
}

export default App;
