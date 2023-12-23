import React from 'react';
import {
  serviceExperience,
  fellowship,
  mediaTeam,
  worshipTeam
} from '../assets/data/volunteer';
import cp from '../assets/images/cmp.jpg';
import Helmet from '../component/Helmet';
import BreadCrumb from '../component/UI/BreadCrumb';

const Volunteer = () => {
  return (
    <Helmet title="Volunteer">
      <div className="">
        <div className="relative h-[40vh] mb-8">
          <img
            src={cp}
            alt="Banner Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
            <p className="lg:text-4xl text-2xl font-bold text-center">
              Every member is a ministers.
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              eveniet aliquam reiciendis, quae laud.
            </p>
          </div>
        </div>

        <BreadCrumb pageName="Volunteer" />
        <div className="container py-16">
          <h1 className="text-xl font-bold capitalize">Service Experience</h1>
          <div className="w-6/8 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center py-4">
            {serviceExperience.map((se, index) => (
              <div
                className="border border-primary rounded-sm px-3 py-3 justify-center items-center gap-5 bg-yellow-200"
                key={index}
              >
                <h1 className="text-xl font-bold capitalize">{se.name}</h1>
                <h1 className="text-md font-medium mb-4 capitalize">
                  {se.hod}
                </h1>
                <p>{se.description}</p>
                <div
                  className="mt-8 bg-primary border border-white text-white px-8 py-3 font-medium 
                    rounded-md text-center"
                >
                  <a href={se.formLink}>Volunteer</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container py-16">
          <h1 className="text-xl font-bold capitalize">Fellowship</h1>
          <div className="w-6/8 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center py-4">
            {fellowship.map((fl, index) => (
              <div
                className="border border-primary rounded-sm px-3 py-3 justify-center items-center gap-5 bg-red-200"
                key={index}
              >
                <h1 className="text-xl font-bold capitalize">{fl.name}</h1>
                <h1 className="text-md font-medium mb-4 capitalize">
                  {fl.hod}
                </h1>
                <p>{fl.description}</p>
                <div
                  className="mt-8 bg-primary border border-white text-white px-8 py-3 font-medium 
                    rounded-md text-center"
                >
                  <a href={fl.formLink}>Volunteer</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container py-16">
          <h1 className="text-xl font-bold capitalize">Worship Team</h1>
          <div className="w-6/8 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center py-4">
            {worshipTeam.map((ws, index) => (
              <div
                className="border border-primary rounded-sm px-3 py-3 justify-center items-center gap-5 bg-blue-200"
                key={index}
              >
                <h1 className="text-xl font-bold capitalize">{ws.name}</h1>
                <h1 className="text-md font-medium mb-4 capitalize">
                  {ws.hod}
                </h1>
                <p>{ws.description}</p>
                <div
                  className="mt-8 bg-primary border border-white text-white px-8 py-3 font-medium 
                    rounded-md text-center"
                >
                  <a href={ws.formLink}>Volunteer</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container py-16">
          <h1 className="text-xl font-bold capitalize">Media Team</h1>
          <div className="w-6/8 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center py-4">
            {mediaTeam.map((mt, index) => (
              <div
                className="border border-primary rounded-sm px-3 py-3 justify-center items-center gap-5 bg-gray-200"
                key={index}
              >
                <h1 className="text-xl font-bold capitalize">{mt.name}</h1>
                <h1 className="text-md font-medium mb-4 capitalize">
                  {mt.hod}
                </h1>
                <p>{mt.description}</p>
                <div
                  className="mt-8 bg-primary border border-white text-white px-8 py-3 font-medium 
                    rounded-md text-center"
                >
                  <a href={mt.formLink}>Volunteer</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Volunteer;
