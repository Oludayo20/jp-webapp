import React from 'react';
import puc from '../assets/images/puc.png';
import BreadCrumb from '../component/UI/BreadCrumb';

const ConstructionPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <BreadCrumb pageName="Page under Construction" />
      <div className="w-[66vw] h-[66vh] p-3 ">
        <img src={puc} alt="page not found" className="w-full h-full" />
      </div>
    </div>
  );
};

export default ConstructionPage;
