import React, { useEffect, useState } from 'react';
import { useFetchDepartmentQuery } from '../redux/slice/departmentApi';
import { toast } from 'react-toastify';
import Helmet from '../component/Helmet';

const TheMinistry = () => {
  const {
    data: departments,
    isLoading,
    isSuccess,
    isError,
    error
  } = useFetchDepartmentQuery('departmentList', {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

  const [selectedDepartment, setSelectedDepartment] = useState(
    departments?.[0]
  );

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

  useEffect(() => {
    setSelectedDepartment(departments?.[0]);
  }, [departments]);

  if (isError) {
    toast.error(error?.data?.message);
  }

  if (isSuccess) {
    content = (
      <div className="container md:flex py-16">
        {/* Department list on the left */}
        <div className="md:w-1/4 p-4">
          <ul>
            {departments?.map((department) => (
              <li
                key={department?.id}
                className={`cursor-pointer p-2 ${
                  selectedDepartment?.id === department?.id
                    ? 'bg-gray-300'
                    : 'hover:bg-gray-200'
                }`}
                onClick={() => setSelectedDepartment(department)}
              >
                {department?.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Department details on the right */}
        <div className="md:w-3/4 p-4">
          <h2 className="text-2xl font-bold mb-4">
            {selectedDepartment?.name}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: selectedDepartment?.description
            }}
          ></p>
          <h2 className="text-lg mt-4">TEAM LEAD:</h2>
          <div className="md:flex">
            {selectedDepartment?.profilePicUrl && (
              <img
                src={selectedDepartment?.profilePicUrl}
                alt=""
                className="w-100 h-100"
              />
            )}

            <div className="">
              <h5 className="inline-block mr-1 font-semibold">
                {selectedDepartment?.teamLead}
              </h5>
              <p
                className="inline"
                dangerouslySetInnerHTML={{
                  __html: selectedDepartment?.bio
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Helmet title="The-Ministry">
      <div className="text-primary container md:flex md:justify-between py-16">
        {content}
      </div>
    </Helmet>
  );
};

export default TheMinistry;
