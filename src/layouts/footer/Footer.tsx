import React from "react";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#333333" }}
      className="rounded-lg shadow  bg-[#333333]"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <span className="block text-sm text-white sm:text-center  p-10">
          Sample text. Click to select the Text Element.
        </span>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <span className="block text-sm sm:text-center p-10 text-white">
          <a
            style={{ color: "#adcce9" }}
            href="#"
            className="underline text-[#adcce9]"
          >
            Website Design
          </a>{" "}
          Created with{" "}
          <a
            style={{ color: "#adcce9" }}
            href="#"
            className="underline text-[#adcce9]"
          >
            Best Website Builer
          </a>
        </span>
      </div>
    </footer>
  );
}
