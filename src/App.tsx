import { useState } from "react";
import "../src/css/main.css";
import Header from "./layouts/header/Header";
import BgImage from "./layouts/main/bgImage/BgImage";
import Discover from "./layouts/main/discovers/Discover";
import MembershipOption from "./layouts/main/membershipOption/MembershipOption";
import SomethingToSay from "./layouts/main/someThingToSay/SomeThingToSay";
import Footer from "./layouts/footer/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="bg-gray-200 ">
        <Header />
        <BgImage />
        <Discover />
        <MembershipOption />
      </div>
      <SomethingToSay />
      <Footer />
    </div>
  );
}

export default App;
