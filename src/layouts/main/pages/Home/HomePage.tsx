import React from "react";
import BgImage from "../../../../components/bgImage/BgImage";
import Discover from "../../../../components/discovers/Discover";
import MembershipOption from "../../../../components/membershipOption/MembershipOption";
import SomethingToSay from "../../../../components/someThingToSay/SomeThingToSay";
export default function HomePage() {
  return (
    <div>
      <div className="bg-gray-200 ">
        <BgImage />
        <Discover />
        <MembershipOption />
      </div>
      <SomethingToSay />
    </div>
  );
}
