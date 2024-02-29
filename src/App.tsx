import { useState } from "react";
import "../src/css/main.css";
import Header from "./layouts/header/Header";
import HomePage from "./layouts/main/pages/Home/HomePage";
import Footer from "./layouts/footer/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className=" ">
        <Header />
        <HomePage></HomePage>
        <Footer />
      </div>
    </div>
  );
}

export default App;
