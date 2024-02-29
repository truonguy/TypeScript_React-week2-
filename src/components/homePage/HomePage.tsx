import React from "react";
import BgImage from "./bgImage/BgImage";
import Discover from "./discovers/Discover";
import MembershipOptions from "./membershipOption/MembershipOption";
import SomethingToSay from "./someThingToSay/SomeThingToSay";

function HomePage() {
  return (
    <div>
      <div className="bg-gray-200 ">
        <BgImage />
        <Discover />
        <MembershipOptions />
      </div>
      <SomethingToSay />
    </div>
  );
}

export default HomePage;
