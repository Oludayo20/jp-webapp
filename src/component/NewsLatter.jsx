import React, { useState } from 'react';
import newsL from '../assets/images/newsL.jpg';
import { toast } from 'react-toastify';
import { saveSubscribers } from '../redux/interactions/newsLetter';

const UserData = {
  name: '',
  email: ''
};

const NewsLatter = () => {
  const [userData, setUserData] = useState(UserData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.name)
      return toast.error('Name and email required');
    await saveSubscribers(userData);
  };

  return (
    <div className="2xl:mx-auto mx-4 py-2 z-1">
      <div className="w-full relative flex items-center justify-center">
        <img src={newsL} alt="dining" className="w-full h-full absolute z-0" />
        <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative">
          <h1 className="text-4xl font-semibold leading-9 text-white text-center">
            Don’t miss out!
          </h1>
          <p className="text-base leading-normal text-center text-white mt-6">
            Subscribe to your newsletter to stay in the loop. Our newsletter is
            sent once in <br />a week on every friday so subscribe to get latest
            news and updates.
          </p>
          <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
            <input
              className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
              placeholder="Name"
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
            <input
              className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
              placeholder="Email Address"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <button
              onClick={onSubmit}
              className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
