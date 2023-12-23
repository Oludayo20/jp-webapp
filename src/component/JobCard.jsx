import React from 'react';
import TimeAgo from './UI/TimeAgo';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
  const {
    id,
    company,
    logoUrl,
    isNew,
    isFeatured,
    position,
    role,
    postedAt,
    location
  } = job;

  const navigate = useNavigate();

  const handleClick = () => navigate(`/job/${id}`);

  return (
    <div className="w-full flex flex-col justify-between bg-white shadow-md my-5 p-6 rounded-md border-teal-500 border-solid sm:flex-row">
      {/* company logoUrl */}
      <img
        src={logoUrl}
        alt="logo"
        className="-mt-11mb-4 w-20 h-20 sm:mt-0 sm:h-24 sm:my-0"
      />

      <div className="flex-flex-col-justify-between ml-4">
        {/* company name */}
        <h1 className="py-2 text-primary text-lg flex items-center gap-2">
          {company}
          {!isNew && (
            <span className="bg-primary rounded-full px-3 text-base text-white">
              New!
            </span>
          )}
          {!isFeatured && (
            <span className="bg-gray-700 rounded-xl px-3 text-base text-white">
              Featured
            </span>
          )}
        </h1>

        {/* job position */}
        <h1 className="text-primary text-xl font-bold cursor-pointer">
          {role}
        </h1>

        {/* job info */}
        <p className="flex items-center gap-2 text-primary text-base">
          <TimeAgo date={postedAt} /> • {position} • {location}
        </p>
      </div>
      {/* Job tags */}
      <div
        onClick={handleClick}
        className="cursor-pointer text-primary flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0"
      >
        Reed more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6-4.6Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default JobCard;
