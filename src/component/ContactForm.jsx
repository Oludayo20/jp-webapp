import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-primary mx-auto py-9 md:py-12 px-4 md:px-6">
      <form action="" className="container form bg-white p-6 my-10 relative">
        <div className="text-primary items-center justify-center inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <path d="M22 12A10.002 10.002 0 0 0 12 2v2a8.003 8.003 0 0 1 7.391 4.938A8 8 0 0 1 20 12h2ZM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10Z" />
              <path d="M17.543 9.704A5.99 5.99 0 0 1 18 12h-1.8A4.199 4.199 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704Z" />
            </g>
          </svg>
          <h3 className="ml-2 text-2xl text-gray-900 font-semibold">
            Contact Form!
          </h3>
        </div>

        <p className="text-primary"> For your complains and suggestions</p>
        <div className="flex space-x-5 mt-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name"
            className="block border border-primary p-2  w-1/2"
          />
          <input
            type="tel"
            name=""
            id=""
            placeholder="Your Number"
            className="block border border-primary p-2 w-1/2"
          />
        </div>
        <input
          type="email"
          name=""
          id=""
          placeholder="Your Email"
          className="block border border-primary p-2 w-full mt-3"
        />
        <textarea
          name=""
          id=""
          cols="10"
          rows="3"
          placeholder="Your Complains and Suggestion here..."
          className="block border border-primary p-2 mt-3 w-full"
        ></textarea>
        <p className="font-bold text-sm mt-3">JP Agreement *</p>
        <div className="flex items-baseline space-x-2 mt-2">
          <input
            type="checkbox"
            name=""
            id=""
            required
            className="block border border-primary inline-block"
          />
          <p className="text-primary text-sm">
            I consent to having this website store my submitted information so
            they can respond to my inquiry.
          </p>
        </div>
        <input
          type="submit"
          value="Submit"
          className="w-full mt-6 bg-primary/90 hover:bg-primary text-white font-semibold p-3"
        />
      </form>
    </div>
  );
};

export default ContactForm;
