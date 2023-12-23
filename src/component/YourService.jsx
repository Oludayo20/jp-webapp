import React from 'react';
import { Link } from 'react-router-dom';
import yourServiceData from '../assets/data/yourService';

const YourService = () => {
  return (
    <div className="container py-16 px-8 grid lg:grid-cols-4 gap-3">
      {yourServiceData.map(({ img, des, title }, index) => (
        <div className="px-8" key={index}>
          <Link to={`/`}>
            <div className="relative">
              <div className="flex items-center justify-center ">
                <img
                  src={img}
                  alt="product Image"
                  className="h-[30vh] w-full rounded-full"
                />
              </div>
            </div>
            <div className="pt-4 pb-1 px-4 items-center justify-center text-center">
              <h4 className="line-clamp-2 text-primary font-bold text-xl hover:text-gray-900 transition">
                {title}
              </h4>
            </div>
          </Link>
          <p className="text-sm text-primary">
            {des} <a className="text-primary underline">Know more</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default YourService;
