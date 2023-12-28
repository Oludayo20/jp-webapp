import React, { useState } from 'react';
import Helmet from '../component/Helmet';
import adeboye from '../assets/images/adeboye2.webp';
import pf from '../assets/images/pf.jpg';
import BreadCrumb from '../component/UI/BreadCrumb';
import { motion } from 'framer-motion';

const YouthProvince = () => {
  return (
    <Helmet title="Missionary-Statement">
      <section className="bg-cover bg-no-repeat bg-center py-16 lg:py-36">
        <BreadCrumb pageName="About Us" />
        <div className="mt-16 text-primary container md:flex md:justify-between ">
          <div className="md:w-1/2 md:mr-4 mb-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 capitalize">
              THE CHRISTENING
            </h1>

            <p className="mb-4">
              In 2007, following the directives of the General Overseer, Pastor
              E.A Adeboye that youth churches should be established, so as to
              create room for youths in the ministry to explore and express
              their potentials.
            </p>
            <p className="mb-4">
              Pastor Julius Olalekan, the Pastor In-Charge of the Province 11,
              took the first and boldest step by being the first Provincial
              Pastor to act on the mandate.
            </p>
            <p className="mb-4">
              He thereafter gave approval for the commencement of a youth church
              in the first week in December 2007 and the inaugural service was
              officiated by Pastor Peter Ona Amenkhienan representing the
              General Overseer on the 9th of December, 2007.
            </p>
            <p className="mb-4">
              The mantle of leadership of the first Young Adults & Youth Church
              fell on Pastor Reuben and Pastor (Mrs) Roseline Inwe as the
              pioneer pastors (now Pastor in Charge of RCCG Hope Center,
              Yorkshire, United Kingdom). They were ably assisted by Pastor
              Ogbeba Harry & Pastor (Mrs) Elizabeth Ogbeba Harry.
            </p>
          </div>

          <div className="md:w-[30vw] h-full">
            <div className="w-full h-full">
              <img src={adeboye} alt="Adeboye" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="mt-16 text-primary container md:flex md:justify-between ">
          <div className="md:w-[30vw] h-full mb-4">
            <div className="w-full h-full">
              <img src={pf} alt="Adeboye" className="w-full h-full" />
            </div>
          </div>
          <div className="md:w-1/2 md:mr-4 ">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 capitalize">
              THE REVIVAL
            </h1>

            <p className="mb-4">
              Joseph’s Palace started with 20 workers and ministers mentioned
              above in 2007. Barely 2 years on, the church was already a huge
              success getting National attention, leading a template for future
              church in RCCG.
            </p>
            <p className="mb-4">
              In the midst of this revival, in 2009, the church was still in its
              early days, the Mantle of leadership of this God’s Project was
              passed over to Pastor Felix Oni and Pastor (Mrs) Grace Oni. The
              pioneering pastor in charge was then moved to RCCG Hope Center,
              Yorkshire, UK.
            </p>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default YouthProvince;
