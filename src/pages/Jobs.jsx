import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import js from '../assets/images/js.jpg';
import tr from '../assets/images/tr.jpg';
import Helmet from '../component/Helmet';
import { useFetchJobQuery } from '../redux/slice/jobApi';
import { toast } from 'react-toastify';
import JobCard from '../component/JobCard';
import BreadCrumb from '../component/UI/BreadCrumb';

const Jobs = () => {
  const {
    data: jobs,
    isLoading,
    isSuccess,
    isError,
    error
  } = useFetchJobQuery('ministerList', {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

  const [search, setSearch] = useState([]);

  let content;

  if (isLoading)
    content = (
      <div className="flex flex-col justify-center items-center h-[11.5vh]">
        <div className="flex p-3">
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
          Loading...
        </div>
      </div>
    );

  if (isError) {
    toast.error(error?.data?.message);
  }

  if (isSuccess) {
    // console.log(jobs);
    const sJobs = jobs.filter((job) =>
      job?.role?.toLowerCase().includes(search)
    );

    content = sJobs.map((job) => <JobCard key={job.id} job={job} />);
  }
  return (
    <Helmet title="Jobs">
      <div>
        <div className="relative h-[40vh] mb-8">
          <img
            src={js}
            alt="Banner Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
            <p className="lg:text-4xl text-2xl font-bold text-center">
              {/* Get to meet our Pastors and ministers. */}
              <br />
              {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              eveniet aliquam reiciendis, quae laud. */}
            </p>
          </div>
        </div>

        <BreadCrumb pageName="Jobs" />

        <section className="bg-cover bg-no-repeat bg-center py-16 lg:pb-36">
          <div className="text-white container md:flex md:justify-between">
            <div className="md:w-[50vw] md:mr-4">
              {/* // search */}
              <div className="bg-gray-300 mx-auto py-0.5 px-4">
                <form
                  action=""
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
                      Search for jobs!
                    </h3>
                  </div>

                  <p className="text-primary"> look for your preferred job</p>
                  <div className="flex space-x-5 mt-3">
                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-900 dark:text-white">
                        Job:
                      </label>
                      <input
                        type="text"
                        className="text-primary block border border-primary p-1.5 w-full"
                        placeholder="Job"
                        // value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-900 dark:text-white">
                        Location:
                      </label>
                      <input
                        type="text"
                        name="location"
                        className="block border border-primary p-1.5 w-full"
                        placeholder="Location"
                      />
                    </div>
                  </div>

                  <input
                    type="submit"
                    value="Search Job"
                    className="w-full mt-4 bg-primary/90 hover:bg-primary text-white font-semibold p-3"
                  />

                  <ul className="mt-2 bg-gray-300 items-center w-full text-sm font-medium text-primary border-gray-200 rounded-lg sm:flex">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center ps-3">
                        <input
                          type="radio"
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        />
                        <label className="w-full py-3 ms-2 text-sm font-medium text-primary bo">
                          Freelance
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center ps-3">
                        <input
                          type="radio"
                          value=""
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        />
                        <label className="w-full py-3 ms-2 text-sm font-medium text-primary bo">
                          Full Time
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                      <div className="flex items-center ps-3">
                        <input
                          type="radio"
                          value=""
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        />
                        <label className="w-full py-3 ms-2 text-sm font-medium text-primary bo">
                          Internship
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center ps-3">
                        <input
                          type="radio"
                          value=""
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        />
                        <label className="w-full py-3 ms-2 text-sm font-medium text-primary bo">
                          Part Time
                        </label>
                      </div>
                    </li>
                  </ul>
                </form>
              </div>

              <div className="md:w-[50vw] w-full mx-auto">
                <div className="flex flex-col">{content}</div>
              </div>
            </div>

            <div className="md:w-[20vw] h-full md:mt-0">
              <div className="w-full h-full">
                <img src={tr} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Helmet>
  );
};

export default Jobs;
