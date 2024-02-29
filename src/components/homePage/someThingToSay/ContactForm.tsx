import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="md:w-full">
      <div className="w-full px-3">
        <label
          className="block text-lg tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </div>

      <div
        id="phone-email-input"
        className="flex flex-col md:flex-row md:justify-between"
      >
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block text-lg tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone"
            required
          />
        </div>

        <div className="w-full md:w-1/2 px-3">
          <label
            className="block text-lg tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          style={{ backgroundColor: "#F1900E", width: "93%" }}
          className=" hover:opacity-80 font-bold w-[95%] text-white bg-[#F1900E] py-4 rounded-full"
          type="submit"
        >
          CONTACT US
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
