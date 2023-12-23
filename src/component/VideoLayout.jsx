import React from 'react';
import handsBanner from '../assets/images/hands_banner1.jpg';
import MediaNavbar from './MediaNavbar';
import { Outlet } from 'react-router-dom';

const VideoLayout = () => {
  return (
    <div>
      <div className="relative h-[40vh] mb-8">
        <img
          src={handsBanner}
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
          <p className="lg:text-4xl text-2xl font-bold text-center">
            Watch amazing videos, some captured moment from sermons.
            <br />
            Young adults and families rediscover their place in God and destiny.
          </p>
        </div>
      </div>
      <MediaNavbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default VideoLayout;
