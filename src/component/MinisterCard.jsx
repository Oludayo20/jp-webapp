import React from 'react';
import { useNavigate } from 'react-router-dom';

const MinisterCard = ({ minister }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/ministers/${minister.id}`);

  return (
    <div
      onClick={handleClick}
      className="uppercase flex flex-col justify-between bg-white shadow-md my-5 mx-10 p-6 rounded-md border-teal-500 border-solid sm:flex-row"
    >
      <img
        src={minister.imgUrl}
        alt="logo"
        className="-mt-11mb-4 w-20 h-20 sm:mt-0 sm:h-24 sm:my-0"
      />

      <div className="flex-flex-col-justify-between ml-4">
        <h1 className="text-xl font-bold cursor-pointer">
          {minister.fullName}
        </h1>

        <p className="text-lg flex items-center gap-2 text-dark_gray_cyan text-base">
          {minister.title}
        </p>

        <p className="flex items-center gap-2 text-dark_gray_cyan text-base">
          {minister.position}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0">
        read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="m12.97 4.28l-1.44 1.44L21.814 16L11.53 26.28l1.44 1.44l11-11l.686-.72l-.687-.72l-11-11z"
          />
        </svg>
      </div>
    </div>
  );
};

export default MinisterCard;
