import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectUser } from '../redux/slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slice/authSlice';
import jpLogo from '../assets/images/joseph_palace_logo.jpg';

const navLinks = [
  {
    name: 'Home',
    link: 'home'
  },
  {
    id: 2,
    name: 'Explore',
    link: 'explore',
    subLink: [
      { name: 'Video Library', link: 'videos/fathers-blessing' },
      { name: 'Career Training', link: 'career training' },
      { name: 'Missionary Statement', link: 'missionary statement' },
      { name: 'Stream Service', link: 'stream Service' },
      { name: 'Youth Province', link: 'youth province' },
      { name: 'Ministers', link: 'ministers' },
      { name: 'Jobs', link: 'jobs' }
    ]
  },
  {
    name: 'The Ministry',
    link: 'the-ministry'
  },
  {
    name: 'Videos',
    link: 'videos/fathers-blessing'
  },
  {
    name: 'Download',
    link: 'downloads'
  },
  {
    name: 'contact us',
    link: 'contact-us'
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

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [profileNav, setProfileNav] = useState(false);
  const [logoutNav, setLogoutNav] = useState(false);

  const dispatch = useDispatch();

  // const user = useSelector(selectUser);

  const trigger = useRef(null);
  const triggerNav = useRef(null);

  const navigate = useNavigate();

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  // close on click outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        (nav || profileNav || logoutNav) &&
        triggerNav.current &&
        !triggerNav.current.contains(event.target)
      ) {
        setNav(false);
        setProfileNav(false);
        setLogoutNav(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [nav, profileNav]);

  const onLogout = () => {
    dispatch(logout());
    navigate('/home');
  };

  return (
    <>
      {/* Navbar */}
      <nav
        ref={triggerNav}
        // className="z-40 fixed top-0 w-full bg-transparent" md:bg-opacity-90
        className={`bg-primary text-white fixed w-full z-40 transition duration-300 ease-in-out ${
          !top && 'bg-primary/60 backdrop-blur-sm shadow-lg top-0'
        }`}
      >
        <div className="h-[7vh] max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="home" className="flex items-center">
            <img src={jpLogo} className="h-8 w-12 mr-3" alt="JP Logo" />
            <span className="font-bold self-center text-2xl font-signature whitespace-nowrap">
              JP - Honorable
            </span>
          </NavLink>

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
                  <li ref={triggerNav} key={index} className="cool-link">
                    <NavLink to={link} duration={500}>
                      {name}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>

          {nav && (
            <nav className="md:hidden bg-primary uppercase p-4 fixed top-[8vh] left-0 right-0">
              <ul className="flex flex-col">
                {navLinks.map(({ name, link }, index) => (
                  <li
                    key={index}
                    className="block py-2 pl-3 pr-4 rounded hover:bg-white hover:text-primary"
                  >
                    <NavLink to={link} duration={500} className="">
                      {name}
                    </NavLink>
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

export default Navbar;
