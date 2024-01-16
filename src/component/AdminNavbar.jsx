import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../redux/slice/userSlice';

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

const profileLinks = [
  {
    id: 1,
    link: 'Sign-In'
  },
  {
    id: 2,
    link: 'Sign-Up'
  },
  {
    id: 3,
    link: 'Customer-Care'
  }
];

const AdminNavbar = () => {
  const user = useSelector(selectUserData);
  const [nav, setNav] = useState(false);
  const [subL, setSubL] = useState(false);
  const [profileNav, setProfileNav] = useState(false);
  const [logoutNav, setLogoutNav] = useState(false);

  const trigger = useRef(null);
  const triggerNav = useRef(null);

  const navigate = useNavigate();

  const onLogout = () => {
    // dispatch(logout());
    navigate('/home');
  };

  return (
    <>
      {/* Navbar */}
      <nav
        ref={triggerNav}
        // className="z-40 fixed top-0 w-full bg-transparent" md:bg-opacity-90
        className={`bg-primary text-white w-full z-40 transition duration-300 ease-in-out`}
      >
        <div className="h-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img
              src={user?.photoURL}
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 mr-2"
              alt="JP Logo"
            />
            <span className="font-bold self-center text-2xl font-signature whitespace-nowrap">
              {user?.fullName}
            </span>
          </div>

          <button
            onClick={() => setNav(!nav)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="uppercase flex flex-col font-bold p-4 md:p-0 mt-4 border border-white rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {navLinks.map(({ name, link, subLink }, index) =>
                subLink ? (
                  <li
                    ref={triggerNav}
                    key={index}
                    className="group inline-block relative"
                    onClick={() => setNav(!nav)}
                  >
                    <p className="cool-link cursor-pointer">{name}</p>

                    <ul className="bg-primary w-[28vw] absolute hidden pt-2 group-hover:block border border-white rounded-lg">
                      <li className="mt-4 grid grid-cols-2">
                        {subLink.map(({ name, link }, index) => (
                          <div className="col-span-1 p-6" key={index}>
                            <NavLink
                              to={link}
                              className="cool-link whitespace-no-wrap"
                            >
                              {name}
                            </NavLink>
                          </div>
                        ))}
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li
                    onClick={() => setNav(!nav)}
                    ref={triggerNav}
                    key={index}
                    className="cool-link"
                  >
                    <NavLink to={link} duration={500}>
                      {name}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>

          {nav && (
            <nav
              className={`md:hidden bg-primary uppercase p-4 fixed top-[11vh] left-0 right-0`}
            >
              <ul className="flex flex-col">
                {navLinks.map(({ name, link, subLink }, index) => (
                  <li
                    key={index}
                    className="block py-2 pl-3 pr-4 rounded hover:bg-white hover:text-primary"
                  >
                    <div duration={500}>
                      {subLink ? (
                        <div
                          className="flex justify-between"
                          onClick={() => setSubL(!subL)}
                        >
                          {name}
                          <span>+</span>
                        </div>
                      ) : (
                        <>
                          <NavLink to={link} onClick={() => setNav(!nav)}>
                            {name}
                          </NavLink>
                        </>
                      )}
                    </div>

                    {subL &&
                      subLink?.map(({ name, link }, index) => (
                        <div
                          onClick={() => setNav(!nav)}
                          key={index}
                          className="block py-2 pl-3 pr-4 rounded hover:bg-white hover:text-primary"
                        >
                          <NavLink
                            to={link}
                            duration={500}
                            className="flex justify-between"
                          >
                            {name}
                          </NavLink>
                        </div>
                      ))}
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
