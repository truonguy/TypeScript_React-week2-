import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ContactForm from "./ContactForm";
import SuccessToast from "./SuccessToast";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa";

export default function SomethingToSay() {
  const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const closeToast = async () => {
    setShowSuccessToast(false);
  };

  return (
    <div id="somethingToSay" className="mt-10">
      <SuccessToast show={showSuccessToast} onClose={closeToast} />
      <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        className="font-bold text-3xl sm:text-3xl lg:text-5xl text-center mb-10 "
      >
        Have Something To Say?
      </h1>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="container w-3/5 mx-auto bg-gray-200 mb-10"
      >
        <div id="form" className="flex flex-col md:flex-row md:-mx-4 p-10 ">
          <div
            id="textt"
            className="w-full md:w-3/6 text-wrap container-fluid flex flex-col justify-center items-center mx-2 md:order-2"
          >
            <p>
              Let us know your questions, suggestions, and concerns by filling
              out the contact form below.
            </p>
            <div className="flex justify-center mt-4">
              <FaFacebook className="mx-2" />
              <FaTwitter className="mx-2" />
              <FaInstagram className="mx-2" />
              <FaGooglePlusG className="mx-2" />
            </div>
          </div>
          <div
            id="input-info"
            className="md:container md:mx-auto flex-1 md:order-2"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
