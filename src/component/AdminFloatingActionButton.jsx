import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const navLinks = [
  {
    name: 'Add Department',
    link: 'add-department'
  },
  {
    id: 2,
    name: 'Add Jobs',
    link: 'add-jobs'
  },
  {
    name: 'Add Minister',
    link: 'add-ministers'
  },
  {
    name: 'Add Videos',
    link: 'add-videos'
  }
];

const AdminFloatingActionButton = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed z-50 bottom-8 right-8">
      <button
        className="bg-primary hover:bg-primary/50 text-white font-bold py-6 px-6 rounded-full"
        onClick={handleButtonClick}
      >
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 bottom-20 text-white bg-primary p-8 shadow-md rounded">
          <ul>
            {navLinks.map(({ name, link }, index) => (
              <li
                onClick={() => setMenuOpen(!isMenuOpen)}
                // ref={triggerNav}
                key={index}
                className="p-6 cool-link"
              >
                <NavLink to={link} duration={500}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminFloatingActionButton;
