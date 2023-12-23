import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BreadCrumb = ({ pageName }) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="container py-4 flex items-center gap-3">
      <div onClick={goBack} className="text-primary text-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
          />
        </svg>
      </div>
      <span className="text-sm text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6-4.6Z"
          />
        </svg>
      </span>
      <p className="text-primary font-medium">{pageName}</p>
    </div>
  );
};

export default BreadCrumb;
