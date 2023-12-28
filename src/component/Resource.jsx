import React from 'react';
import resourceData from '../assets/data/resource';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Resource = () => {
  return (
    <div className="container py-16">
      <h2 className="text-xl font-medium text-primary uppercase mb-6">
        Inspiring resources to become a better you.
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {resourceData.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="h-[30vh] relative rounded-sm overflow-hidden group"
          >
            <img src={item.img} alt={item.title} className="w-full h-full" />
            <div className="text-center p-2 absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center md:text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Resource;
