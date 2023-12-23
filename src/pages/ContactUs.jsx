import React from 'react';
import Helmet from '../component/Helmet';
import cp from '../assets/images/cmp.jpg';
import BreadCrumb from '../component/UI/BreadCrumb';

const ContactUs = () => {
  return (
    <Helmet title="Contact Us">
      <div>
        <div className="relative h-[40vh] mb-8">
          <img
            src={cp}
            alt="Banner Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
            <p className="lg:text-4xl text-2xl font-bold text-center">
              Reach out to us.
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              eveniet aliquam reiciendis, quae laud.
            </p>
          </div>
        </div>

        <BreadCrumb pageName="Contact Us" />

        <div className="text-primary container md:flex md:justify-around py-16">
          <div className="md:w-1/2 md:mr-4">
            <form action="" className="container form bg-gray-200 p-6 relative">
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

              <p className="text-primary"> Send us a message</p>
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
                  I consent to having this website store my submitted
                  information so they can respond to my inquiry.
                </p>
              </div>
              <input
                type="submit"
                value="Submit"
                className="w-full mt-6 bg-primary/90 hover:bg-primary text-white font-semibold p-3"
              />
            </form>
          </div>

          <div className="md:w-[30vw] h-full md:mt-0 mb-12">
            <div className="w-full h">
              <h1 className="text-lg font-bold mb-2 capitalize">
                CONTACT US TODAY
              </h1>
              <p className="text-xl font-normal capitalize mb-2">
                30, Rafiu Babatunde Tinubu Way <br /> Apple Junction, Amuwo
                Odofin, <br /> Lagos. <br /> Tel: +2348028326725 <br /> E-mail:
                info@josephspalace.org <br /> Website: www.josephspalace.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default ContactUs;
