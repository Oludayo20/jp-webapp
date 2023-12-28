import React, { useEffect, useState } from 'react';
import { useAddMinisterMutation } from '../redux/slice/ministerApi';
import { toast } from 'react-toastify';

const MinisterData = {
  fullName: '',
  title: '',
  position: '',
  bio: '',
  img: '',
  socialLinks: [],
  socialApp: '',
  link: ''
};

const AddMinister = () => {
  const [ministerData, setMinisterData] = useState(MinisterData);

  const [addMinister, { data, isLoading, isSuccess, isError, error }] =
    useAddMinisterMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Minister added successfully');
    }

    if (isError) {
      toast.success(error);
    }
  }, [isSuccess, isError]);

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    // Handle file input
    if (type === 'file') {
      const selectedFile = files[0];
      setMinisterData((prevMediaData) => ({
        ...prevMediaData,
        [name]: selectedFile
      }));
    } else {
      setMinisterData((prevMediaData) => ({
        ...prevMediaData,
        [name]: value
      }));
    }
  };

  const handleAddSocialLink = () => {
    // Validate that both fields are filled
    if (!ministerData.socialApp || !ministerData.link) {
      alert('Please fill in both fields for social media.');
      return;
    }
    // Add the new social media object to the array
    setMinisterData((prevData) => ({
      ...prevData,
      socialLinks: [
        ...prevData.socialLinks,
        { socialApp: prevData.socialApp, link: prevData.link }
      ],
      socialApp: '',
      link: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ministerData.img == '' || ministerData.fullName == '') {
      toast.error('all fields required');
    } else {
      console.log(ministerData);
      await addMinister(ministerData);
    }
  };

  return (
    <div className="bg-primary mx-auto py-9 md:py-12 px-4 md:px-6">
      <form
        onSubmit={handleSubmit}
        className="container form bg-white p-6 my-10 relative"
      >
        <div className="text-primary items-center justify-center inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <path d="M22 12A10.002 10.002 0 0 0 12 2v2a8.003 8.003 0 0 1 7.391 4.938A8 8 0 0 1 20 12h2ZM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10Z" />
              <path d="M17.543 9.704A5.99 5.99 0 0 1 18 12h-1.8A4.199 4.199 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704Z" />
            </g>
          </svg>
          <h3 className="ml-2 text-2xl text-gray-900 font-semibold">
            Minister Form!
          </h3>
        </div>

        <p className="text-primary"> Add a minister</p>
        <div className="flex space-x-5 mt-3">
          <div className="w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Full Name
            </label>
            <input
              name="fullName"
              value={ministerData.fullName}
              onChange={handleChange}
              className="bg-gray-50 border border-primary text-primary text-sm focus:ring-primary focus:border-primary block p-2.5 w-full"
              placeholder="full name"
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Position
            </label>
            <input
              name="position"
              value={ministerData.position}
              onChange={handleChange}
              className="bg-gray-50 border border-primary text-primary text-sm focus:ring-primary focus:border-primary block p-2.5 w-full"
              placeholder="position"
            />
          </div>
        </div>

        <div className="flex space-x-5 mt-3">
          <div className="w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              name="title"
              value={ministerData.title}
              onChange={handleChange}
              className="bg-gray-50 border border-primary text-primary text-sm focus:ring-primary focus:border-primary block p-2.5 w-full"
              placeholder="title"
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Profile Picture
            </label>
            <input
              name="img"
              type="file"
              onChange={handleChange}
              className="block border border-primary p-1.5 w-full"
            />
          </div>
        </div>

        <div className="flex space-x-5 mt-3">
          <div className="w-full h-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Biography
            </label>
            <textarea
              name="bio"
              value={ministerData.bio}
              onChange={handleChange}
              className="block border border-primary p-1.5 w-full"
              placeholder="your bio use <br> to insert new line.."
            />
          </div>
        </div>

        <div className="flex space-x-5 mt-3">
          <div className="w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <select
              name="socialApp"
              value={ministerData.socialApp}
              onChange={handleChange}
              className="block border border-primary p-1.5 w-full"
            >
              <option value="">Select...</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Twitter">Twitter</option>
              <option value="Youtube">Youtube</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Profile Picture
            </label>
            <input
              type="text"
              name="link"
              value={ministerData.link}
              onChange={handleChange}
              className="block border border-primary p-1.5 w-full"
            />
          </div>
          <div className="w-12 mt-8">
            <button
              type="button"
              className="block w-full h-full bg-primary text-white p-1 items-center"
              onClick={handleAddSocialLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.345 4.017a42.253 42.253 0 0 1 9.31 0c1.713.192 3.095 1.541 3.296 3.26a40.66 40.66 0 0 1 0 9.446c-.201 1.719-1.583 3.068-3.296 3.26a42.245 42.245 0 0 1-9.31 0c-1.713-.192-3.095-1.541-3.296-3.26a40.652 40.652 0 0 1 0-9.445a3.734 3.734 0 0 1 3.295-3.26M12 7.007a.75.75 0 0 1 .75.75v3.493h3.493a.75.75 0 1 1 0 1.5H12.75v3.493a.75.75 0 0 1-1.5 0V12.75H7.757a.75.75 0 0 1 0-1.5h3.493V7.757a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-primary/90 hover:bg-primary text-white font-semibold p-3"
        >
          {isLoading ? (
            <>
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-6 h-6 mr-3 text-primary animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Saving...
            </>
          ) : (
            'Add Minister'
          )}
        </button>
      </form>
    </div>
  );
};

export default AddMinister;
