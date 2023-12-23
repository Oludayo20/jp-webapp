import React from 'react';
import { NavLink } from 'react-router-dom';

const MediaNavbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="text-primary max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.75 18.808V14.23l3.673 2.288zM13 9.615q-1.122 0-1.907-.784q-.785-.783-.785-1.903t.785-1.909q.785-.788 1.907-.788h.942v.884H13q-.753 0-1.28.529q-.528.529-.528 1.284t.528 1.279q.527.524 1.28.524h.942v.884zm3.058 0v-.884H17q.753 0 1.28-.529q.528-.528.528-1.283q0-.756-.528-1.28T17 5.115h-.942v-.884H17q1.122 0 1.907.784q.785.784.785 1.904q0 1.12-.785 1.908q-.785.788-1.907.788zm-2.75-2.25v-.884h3.384v.884zm2.234 5.731v-1h4.843q.269 0 .442-.173t.173-.442V3.71q0-.269-.173-.442t-.442-.173H9.615q-.269 0-.442.173T9 3.712v7.807H8V3.712q0-.667.475-1.141q.474-.475 1.14-.475h10.77q.666 0 1.14.475q.475.474.475 1.14v7.77q0 .666-.475 1.14q-.474.475-1.14.475zM3.615 21.904q-.666 0-1.14-.475Q2 20.955 2 20.29v-7.54q0-.666.475-1.14q.474-.475 1.14-.475h10.77q.666 0 1.14.474q.475.475.475 1.141v7.538q0 .667-.475 1.141q-.474.475-1.14.475zm0-1h10.77q.269 0 .442-.173t.173-.443V12.75q0-.27-.173-.442t-.442-.173H3.615q-.269 0-.442.173T3 12.75v7.538q0 .27.173.443t.442.173M9 16.519"
              />
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              JP Media Page
            </span>
          </a>
          <div className="flex md:order-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm border border-gray-300 bg-gray-50 focus:ring-primary focus:border-primary"
                placeholder="Search..."
              />
            </div>
          </div>
          <div
            className="items-center justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavLink
                to="/videos/fathers-blessing"
                className="block py-2 pl-3 pr-4"
              >
                Father's Blessing
              </NavLink>
              <NavLink
                to="/videos/short-messages"
                className="block py-2 pl-3 pr-4"
              >
                Short Messages
              </NavLink>
              <NavLink
                to="/videos/stream-service"
                className="block py-2 pl-3 pr-4"
              >
                Stream Service
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MediaNavbar;
