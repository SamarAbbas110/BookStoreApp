import React from "react";

function Contact() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mt-8">Contact Us</h1>
        <div className="mt-4 space-y-2">
          <span>Name</span>
          <br />
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-96 md:w-[600px] px-3 py-2 border rounded-md outline-none"
          />
        </div>
        <div className="mt-4 space-y-2">
          <span>Email</span>
          <br />
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-96 md:w-[600px] px-3 py-2 border rounded-md outline-none"
          />
        </div>
        <div className="mt-4 space-y-2">
          <span>Phone Number</span>
          <br />
          <input
            type="number"
            placeholder="Enter your Phone Number"
            className="w-96 md:w-[600px] px-3 py-2 border rounded-md outline-none"
          />
        </div>
        <div className="mt-4 space-y-2">
          <span>Message</span>
          <br />
          <textarea
            id="txtArea"
            rows="5"
            cols="70"
            placeholder="Type your Message"
            className="w-96 md:w-[600px] px-3 py-2 border rounded-md outline-none"
          />
        </div>
        <div className="mt-5 ">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-pink-600">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
