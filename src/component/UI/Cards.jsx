import { useFetchDepartmentQuery } from '../../redux/slice/departmentApi';
import { useFetchJobQuery } from '../../redux/slice/jobApi';
import { useFetchMediaQuery } from '../../redux/slice/mediaApi';
import { useFetchMinisterQuery } from '../../redux/slice/ministerApi';

const Cards = () => {
  const { data: videos } = useFetchMediaQuery('mediaList', {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

  const { data: jobs } = useFetchJobQuery('ministerList', {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

  const { data: departments } = useFetchDepartmentQuery('departmentList', {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

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

  return (
    <div className="grid gap-6 mb-8 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
      <div
        className="block max-w-sm rounded-lg bg-primary text-white p-6 shadow-lg dark:bg-primary"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <div className="flex items-center">
          <div className="p-3 rounded-full text-primary bg-white mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="m164.44 105.34l-48-32A8 8 0 0 0 104 80v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 129.05V95l25.58 17ZM216 40H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 128H40V56h176zm16 40a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8"
              />
            </svg>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-slate-800 dark:text-slate-600">
              Videos:
            </p>
            <p className="text-lg font-semibold text-slate-700 dark:text-slate-500">
              {videos?.length}
            </p>
          </div>
        </div>
      </div>

      <div
        className="block max-w-sm rounded-lg bg-primary text-white p-6 shadow-lg dark:bg-primary"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <div className="flex items-center">
          <div className="p-3 rounded-full text-primary bg-white mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.912 18.088v7.368c0 1.356-1.1 2.456-2.456 2.456h0A2.456 2.456 0 0 1 11 25.456v-.816"
              />
              <rect
                width="4.912"
                height="6.508"
                x="18.299"
                y="21.404"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                rx="2.456"
                ry="2.456"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M32.806 27.363c.448.377.932.549 2.02.549h.55c.897 0 1.624-.728 1.624-1.627h0c0-.899-.727-1.627-1.624-1.627h-1.102a1.625 1.625 0 0 1-1.623-1.627h0c0-.899.727-1.627 1.623-1.627h.551c1.088 0 1.572.172 2.02.549M25.541 23.86c0-1.357 1.1-2.456 2.456-2.456h0c1.356 0 2.456 1.1 2.456 2.456v1.596c0 1.356-1.1 2.456-2.456 2.456h0a2.456 2.456 0 0 1-2.456-2.456m0 2.456v-9.824"
              />
            </svg>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-slate-800 dark:text-slate-600">
              Jobs:
            </p>
            <p className="text-lg font-semibold text-slate-700 dark:text-slate-500">
              {jobs?.length}
            </p>
          </div>
        </div>
      </div>

      <div
        className="block max-w-sm rounded-lg bg-primary text-white p-6 shadow-lg dark:bg-primary"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <div className="flex items-center">
          <div className="p-3 rounded-full text-primary bg-white mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M12 3a3 3 0 0 0-1 5.83V11H8a3 3 0 0 0-3 3v1.17a3.001 3.001 0 1 0 2 0V14a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1.17a3.001 3.001 0 1 0 2 0V14a3 3 0 0 0-3-3h-3V8.83A3.001 3.001 0 0 0 12 3"
                />
              </g>
            </svg>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-slate-800 dark:text-slate-600">
              Department:
            </p>
            <p className="text-lg font-semibold text-slate-700 dark:text-slate-500">
              {departments?.length}
            </p>
          </div>
        </div>
      </div>

      <div
        className="block max-w-sm rounded-lg bg-primary text-white p-6 shadow-lg dark:bg-primary"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <div className="flex items-center">
          <div className="p-3 rounded-full text-primary bg-white mr-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-slate-800 dark:text-slate-600">
              Ministers:
            </p>
            <p className="text-lg font-semibold text-slate-700 dark:text-slate-500">
              {ministers?.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
