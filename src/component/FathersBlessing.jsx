import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchMediaQuery } from '../redux/slice/mediaApi';
import ReactPlayer from 'react-player';
import { toast } from 'react-toastify';

const FathersBlessing = () => {
  const {
    data: videos,
    isLoading,
    isSuccess,
    isError,
    error
  } = useFetchMediaQuery('mediaList', {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

  let content;
  let contentDetails;

  if (isLoading)
    content = (
      <div className="items-center">
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
    );

  if (isError) {
    toast.error(error?.data?.message);
  }

  if (isSuccess) {
    const fathersBlessingVideos = videos
      .filter((video) => video.category === "Father's Blessing")
      .sort((a, b) => a.timestamp - b.timestamp)
      .slice(0, 1);

    contentDetails = fathersBlessingVideos.map((video) => (
      <div className="md:w-1/2 md:mr-4 mt-16" key={video.id}>
        <h1 className="text-3xl md:text-6xl font-medium mb-4 capitalize">
          {video.title}
        </h1>
        {video.description ? (
          <p
            dangerouslySetInnerHTML={{
              __html: video?.description
            }}
          ></p>
        ) : (
          <>
            <p>Short prayer for you today.</p>
          </>
        )}
        Click on play!!
        <div className="mt-12">
          <Link
            to="/videos/fathers-blessing"
            className="bg-white border border-white text-primary px-8 py-3 font-medium 
                    rounded-md"
          >
            Watch More of this Here
          </Link>
        </div>
      </div>
    ));

    content = fathersBlessingVideos.map((video) => (
      <ReactPlayer
        key={video.id}
        // playing={true}
        url={video.videoUrl}
        width="100%"
        height="100%"
        controls
      />
    ));
  }

  return (
    <section className="bg-primary bg-cover bg-no-repeat bg-center py-16 lg:py-36">
      <div className="text-white container md:flex md:justify-between ">
        {contentDetails}

        <div className="md:w-[30vw] h-full mt-4">
          <div className="fb-video w-full h">{content}</div>
        </div>
      </div>
    </section>
  );
};

export default FathersBlessing;
