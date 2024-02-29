import React from "react";

interface SliderContentProps {
  title: string;
  description: string;
  buttonText: string;
}

function SliderContent({ title, description, buttonText }: SliderContentProps) {
  return (
    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full lg:pl-40 sm:pl-auto">
      <div className="px-4 lg:px-10 w-full lg:w-2/3">
        <h2 className="text-white w-4/6 text-3xl sm:text-5xl sm:leading-tight font-bold mb-8">
          {title}
        </h2>
        <p
          style={{ fontFamily: "Open Sans, sans-serif" }}
          className="mb-10 w-4/6 text-white text-base sm:text-lg lg:text-base break-words text-left font-open-sans"
        >
          {description}
        </p>
        <button
          style={{ backgroundColor: "#F1900E" }}
          className="flex items-center mt-4 px-6 py-4 bg-[#F1900E] hover:opacity-80 hover:scale-105 text-white text-sm uppercase focus:outline-none rounded-full font-open-sans"
        >
          <span className="font-bold">{buttonText}</span>
        </button>
      </div>
    </div>
  );
}

export default SliderContent;
