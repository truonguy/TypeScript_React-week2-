import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { membershipOptions } from "./membershipOptions";
import MembershipOptionItemRenderer from "./MembershipOptionRenderer";

function MembershipOptions() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="MembershipOptions" className="">
      <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        style={{ fontFamily: "Oswald, sans-serif" }}
        className="font-bold text-3xl sm:text-5xl lg:text-7xl text-center mt-20 mb-20"
      >
        Membership Options
      </h1>

      <div className="container mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-4/5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-2 md:gap-8"
        >
          {membershipOptions.map((option, index) => (
            <MembershipOptionItemRenderer
              key={index}
              title={option.title}
              features={option.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MembershipOptions;
