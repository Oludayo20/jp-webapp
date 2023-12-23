import React from 'react';
import MinisterCard from '../component/MinisterCard';
import cmp from '../assets/images/cmp.jpg';
import { useFetchMinisterQuery } from '../redux/slice/ministerApi';
import { toast } from 'react-toastify';
import BreadCrumb from '../component/UI/BreadCrumb';

const Ministers = () => {
  const {
    data: ministers,
    isLoading,
    isSuccess,
    isError,
    error
  } = useFetchMinisterQuery('ministerList', {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

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
    content = ministers.map((minister) => (
      <MinisterCard key={minister.id} minister={minister} />
    ));
  }
  return (
    <div>
      <div className="relative h-[40vh] mb-8">
        <img
          src={cmp}
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
          <p className="lg:text-4xl text-2xl font-bold text-center">
            Get to meet our Pastors and ministers.
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            eveniet aliquam reiciendis, quae laud.
          </p>
        </div>
      </div>

      <BreadCrumb pageName="Ministers" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col">{content}</div>
      </div>
    </div>
  );
};

export default Ministers;
