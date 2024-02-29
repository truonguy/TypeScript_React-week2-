import React from "react";
import SliderContent from "./SliderContent";

interface SliderProps {
  backgroundImageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

function Slider({
  backgroundImageUrl,
  title,
  description,
  buttonText,
}: SliderProps) {
  return (
    <div id="slider" className="" style={{ fontFamily: "Oswald, sans-serif" }}>
      <div
        className="relative rounded-md overflow-hidden bg-cover object-fit"
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`,
          height: "80vh",
        }}
      >
        <div className="inset-0 bg-[#F1900E] opacity-5"></div>
        <SliderContent
          title={title}
          description={description}
          buttonText={buttonText}
        />
      </div>
    </div>
  );
}

export default Slider;
