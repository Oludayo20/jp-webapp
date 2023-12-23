import React, { useEffect, useState } from 'react';
import Helmet from '../component/Helmet';
import { useDispatch, useSelector } from 'react-redux';
import Features from '../component/Features';
import { Link } from 'react-router-dom';
import leaderShip from '../assets/images/leadership5.jpg';
import handsBanner from '../assets/images/hands_banner1.jpg';
import handsBanner2 from '../assets/images/hand_banner2.jpeg';
import Programs from '../component/Programs';
import Resource from '../component/Resource';
import YourService from '../component/YourService';
import ContactForm from '../component/ContactForm';
import NewsLatter from '../component/NewsLatter';
import FathersBlessing from '../component/FathersBlessing';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <Helmet title="Home">
      {/* Banner */}
      <FathersBlessing />
      {/* Banner */}
      {/* <!-- features --> */}
      <Features />
      {/* <!-- ./features --> */}
      <div className="relative h-[300px]">
        <img
          src={handsBanner}
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white  px-6">
          <p className="lg:text-4xl text-2xl font-bold mb-4 text-center">
            We are redefining youth ministry <br /> by helping young Christians,{' '}
            <br />
            young adults and families rediscover <br /> their place in God and
            destiny.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
        <h1 className="text-2xl font-bold">Upcoming Programs:</h1>
        <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <Programs />
        </div>
      </div>

      <Resource />

      <div className="relative h-[50vh]">
        <img
          src={handsBanner2}
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
          <p className="lg:text-3xl font-bold mb-4 text-center">
            Joseph’s Palace is a royal family of God where the honourable are
            <br />
            prepared to fulfill destiny in the best possible way, while they
            <br />
            change the world positively by establishing God’s kingdom
            <br />
            everywhere. We are not just a church. We are a movement triggered by
            <br />
            the Lord to rescue failing destiny, enforce kingdom standards,
            <br />
            empowering the body of Christ to fulfill in reality kingdom purpose.
            <br />
            Join us for any of our Sunday[7am, 9am and 11am], Tuesday and
            <br />
            Wednesday services in Church or Online.
            <div className="mt-4 lg:mt-12">
              <Link
                to="/shop"
                className="bg-white border border-primary text-primary px-8 py-3 font-medium lg:text-2xl rounded-md hover:bg-primary hover:text-white"
              >
                Watch Online Services
              </Link>
            </div>
          </p>
        </div>
      </div>

      <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
        <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div className="flex flex-col md:flex-row items-strech justify-between bg-primary py-6 pl-6 md:py-12 lg:pl-12 lg:py-0 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
            <div className="flex flex-col justify-center md:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-semibold text-white">
                Christ Like Leadership
              </h1>
              <p className="text-base lg:text-xl text-white mt-2">
                Be a leader with a
                <span className="font-bold"> DIFFERENCE!!!</span>
              </p>
            </div>
            <div className="w-[80vw] md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
              <img src={leaderShip} alt="" className="h-[300px]" />
            </div>
          </div>
          <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-primary dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
            <div className="flex flex-col justify-center">
              <div className="">
                <Link
                  to="/"
                  className="bg-white border border-primary text-primary px-8 py-3 font-medium text-xl rounded-md hover:bg-primary hover:text-white"
                >
                  Register Now
                </Link>
              </div>
              <p className="mt-2 text-base lg:text-xl text-white">
                Be a part of the <span className="font-bold">MOVEMENT</span>
              </p>
            </div>
            <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
              {/* <img
                src={move}
                alt=""
                className="md:w-20 md:h-20 lg:w-full lg:h-full"
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 32 32"
              >
                <g fill="none">
                  <path
                    fill="#636363"
                    d="m14.42 12.88l.95.07c1.52.05 2.53.86 2.75 2.32l1.26 5.3c.02.1.07.19.13.27l4.03 5.45l-1.37.87l-4.13-4.07c-.72-.69-1.33-1.26-1.58-1.81l-1.18-4.29l-.86-4.11Z"
                  />
                  <path
                    fill="#9B9B9B"
                    d="m13.6 16.2l-1.27 3.9c-.23.65-.36 1.36-.47 2.35l-.56 5.19l1.29 1.16l2.03-6.81l3.17-3.6c.52-.6.71-1.4.57-2.18l-2.332-.493l-2.428.493v-.01Z"
                  />
                  <path
                    fill="#533566"
                    d="m24.25 26.85l-.97-.91l-1.59.73l-.66 3.05c-.05.34.37.54.61.29l2.62-2.81c.09-.1.09-.26-.01-.35Zm-12.06 3.12l.43-1.26l-1.31-1.15l-3.05.65c-.34.09-.35.56-.02.67l3.64 1.24c.13.05.27-.02.31-.15Z"
                  />
                  <path
                    fill="#FFD7C2"
                    d="M20.242 16.654a10.47 10.47 0 0 1-.084-.277a4.34 4.34 0 0 0-.068-.227c-1.265-3.672-3.87-5.236-4.138-5.396a.946.946 0 0 1-.422-1.284c.24-.46.81-.64 1.26-.4c.14.07 3.49 1.86 5.07 6.46l.058.163c.044.12.085.233.112.337l.3.75l.007.018c.081.225.232.638.193.862c-.05.27-.5.57-.88.69c0 0-.48.15-.89.05c-.31-.07-.26-.43-.26-.43s-.11-.09-.39-.29c-.363-.264-.004-.836.133-1.026Zm-5.2-5.717a.927.927 0 0 0-1.844-.196l-.001.011a4.457 4.457 0 0 1-.083.405c-.075.294-.21.724-.448 1.235c-.457.98-1.3 2.266-2.845 3.462c-.206-.053-.892-.193-1.011.256c-.09.33-.13.46-.13.46s-.35.08-.3.4c.06.41.37.8.37.8c.25.31.69.61.95.56c.202-.044.482-.281.668-.44l.072-.06l.57-.552c1.772-1.386 2.775-2.899 3.336-4.102c.293-.629.466-1.17.565-1.563a6.277 6.277 0 0 0 .129-.654l.001-.015v-.005l.001-.002Z"
                  />
                  <path
                    fill="#F4C6AD"
                    d="m15.89 6.78l.32 1.97l-2.02.35l-.31-2.01l2.01-.31Z"
                  />
                  <path
                    fill="#0092E7"
                    d="M14.25 13.63c.61-1.16.91-2.21 1.05-2.97c.12-.63-.36-1.22-1-1.25h-.04c-.48 0-.74.24-.83.72c-.05.28-.28.76-.41 1.16c-.15.47-.35.93-.59 1.38c-.04.08-.01.17.07.21l1.54.81c.08.05.17.02.21-.06Z"
                  />
                  <path
                    fill="#00A6ED"
                    d="M15.32 8.63c-1.18.29-1.89.7-2.2 2.39c-.37 2.02.47 5.19.47 5.19h4.77l-.6-5.64c-.13-1.2-1.13-2.26-2.44-1.94Z"
                  />
                  <path
                    fill="#3BC6F6"
                    d="M19.35 11.09c-.9-.99-1.79-1.63-2.47-2.03c-.56-.34-1.29-.09-1.54.51l-.02.04c-.15.47.04.98.47 1.23c.26.15.57.35.9.62c.4.31.77.66 1.11 1.04c.06.07.16.07.23.01l1.31-1.19c.07-.06.07-.16.01-.23Z"
                  />
                  <path
                    fill="#FFD7C2"
                    d="m14.77 3.16l-1.11-.02c-.95-.02-1.73.74-1.75 1.68v.48c0 .15-.04.3-.12.43c-.24.38-.35.42-.36.61c-.02.3.26.38.39.4c.04.01.07.04.07.08c.01 1.06.19 1.82 1.46 1.84c.77.01 2-.35 2.37-1.26l.35-1.22l.4-1.28c0-.94-.76-1.72-1.7-1.74Z"
                  />
                  <path
                    fill="#fff"
                    d="M12.33 5.81c-.06 0-.12-.06-.12-.14v-.01c.01-.31.28-.49.54-.48c.26 0 .53.19.52.5v.01c0 .08-.06.14-.12.14l-.82-.02Z"
                  />
                  <path
                    fill="#7D4533"
                    d="M12.23 5.82a.772.772 0 0 1-.02-.15c0-.23.15-.41.33-.41c.18 0 .32.19.32.42c0 .05-.01.1-.02.15l-.61-.01Z"
                  />
                  <path
                    fill="#000"
                    d="M12.337 5.82a.282.282 0 0 1-.04-.15c0-.13.09-.23.19-.23s.18.11.18.24c0 .06-.018.1-.038.14h-.292Z"
                  />
                  <path
                    fill="#fff"
                    d="M12.454 5.522c.012-.043-.008-.086-.045-.097c-.037-.01-.077.015-.09.058c-.012.042.008.085.046.096c.037.01.077-.015.09-.057Z"
                  />
                  <path
                    fill="#990838"
                    d="M12.958 6.822c.06.02.091.086.07.146a.62.62 0 0 1-.785.38a.115.115 0 0 1 .075-.216c.2.07.425-.04.494-.24a.115.115 0 0 1 .146-.07Z"
                  />
                  <path
                    fill="#212121"
                    d="M13.209 5.142a.211.211 0 0 1-.136-.047a.83.83 0 0 0-.58-.144a.22.22 0 0 1-.235-.277a.217.217 0 0 1 .186-.156c.318-.036.64.049.9.237a.217.217 0 0 1-.135.387Z"
                  />
                  <path
                    fill="#212121"
                    d="M16.17 2.44c.7.17 1.06.81 1.06 1.48c0 0 0 .54-.09 1c-.05.26-.11.53-.17.75c-.06.25-.2.59-.35.8c-.14.19-.44.37-.72.4c-.246.025-.65-.143-.755-.452a.684.684 0 0 0 .285-.523a.69.69 0 0 0-.432-.691a.328.328 0 0 0-.148-.044l-.11-.01a.385.385 0 0 1-.36-.42c.02-.27-.18-.5-.45-.5l-1.84-.12c-.01-.01-.03-.01-.04-.01a.827.827 0 0 1-.68-.82c.01-.47.4-.83.86-.8c.14.01.27-.06.35-.16a.848.848 0 0 1 1.05-.23c.27.13.58.15.86.05c.11-.03.22-.05.34-.04c.15.01.29.05.41.13c.17.1.37.16.57.16c.12 0 .23.02.36.05Z"
                  />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 32 32"
              >
                <g fill="none">
                  <path
                    fill="#636363"
                    d="m14.42 12.88l.95.07c1.52.05 2.53.86 2.75 2.32l1.26 5.3c.02.1.07.19.13.27l4.03 5.45l-1.37.87l-4.13-4.07c-.72-.69-1.33-1.26-1.58-1.81l-1.18-4.29l-.86-4.11Z"
                  />
                  <path
                    fill="#9B9B9B"
                    d="m13.6 16.2l-1.27 3.9c-.23.65-.36 1.36-.47 2.35l-.56 5.19l1.29 1.16l2.03-6.81l3.17-3.6c.52-.6.71-1.4.57-2.18l-2.332-.493l-2.428.493v-.01Z"
                  />
                  <path
                    fill="#533566"
                    d="m24.25 26.85l-.97-.91l-1.59.73l-.66 3.05c-.05.34.37.54.61.29l2.62-2.81c.09-.1.09-.26-.01-.35Zm-12.06 3.12l.43-1.26l-1.31-1.15l-3.05.65c-.34.09-.35.56-.02.67l3.64 1.24c.13.05.27-.02.31-.15Z"
                  />
                  <path
                    fill="#FFD7C2"
                    d="M20.242 16.654a10.47 10.47 0 0 1-.084-.277a4.34 4.34 0 0 0-.068-.227c-1.265-3.672-3.87-5.236-4.138-5.396a.946.946 0 0 1-.422-1.284c.24-.46.81-.64 1.26-.4c.14.07 3.49 1.86 5.07 6.46l.058.163c.044.12.085.233.112.337l.3.75l.007.018c.081.225.232.638.193.862c-.05.27-.5.57-.88.69c0 0-.48.15-.89.05c-.31-.07-.26-.43-.26-.43s-.11-.09-.39-.29c-.363-.264-.004-.836.133-1.026Zm-5.2-5.717a.927.927 0 0 0-1.844-.196l-.001.011a4.457 4.457 0 0 1-.083.405c-.075.294-.21.724-.448 1.235c-.457.98-1.3 2.266-2.845 3.462c-.206-.053-.892-.193-1.011.256c-.09.33-.13.46-.13.46s-.35.08-.3.4c.06.41.37.8.37.8c.25.31.69.61.95.56c.202-.044.482-.281.668-.44l.072-.06l.57-.552c1.772-1.386 2.775-2.899 3.336-4.102c.293-.629.466-1.17.565-1.563a6.277 6.277 0 0 0 .129-.654l.001-.015v-.005l.001-.002Z"
                  />
                  <path
                    fill="#F4C6AD"
                    d="m15.89 6.78l.32 1.97l-2.02.35l-.31-2.01l2.01-.31Z"
                  />
                  <path
                    fill="#0092E7"
                    d="M14.25 13.63c.61-1.16.91-2.21 1.05-2.97c.12-.63-.36-1.22-1-1.25h-.04c-.48 0-.74.24-.83.72c-.05.28-.28.76-.41 1.16c-.15.47-.35.93-.59 1.38c-.04.08-.01.17.07.21l1.54.81c.08.05.17.02.21-.06Z"
                  />
                  <path
                    fill="#00A6ED"
                    d="M15.32 8.63c-1.18.29-1.89.7-2.2 2.39c-.37 2.02.47 5.19.47 5.19h4.77l-.6-5.64c-.13-1.2-1.13-2.26-2.44-1.94Z"
                  />
                  <path
                    fill="#3BC6F6"
                    d="M19.35 11.09c-.9-.99-1.79-1.63-2.47-2.03c-.56-.34-1.29-.09-1.54.51l-.02.04c-.15.47.04.98.47 1.23c.26.15.57.35.9.62c.4.31.77.66 1.11 1.04c.06.07.16.07.23.01l1.31-1.19c.07-.06.07-.16.01-.23Z"
                  />
                  <path
                    fill="#FFD7C2"
                    d="m14.77 3.16l-1.11-.02c-.95-.02-1.73.74-1.75 1.68v.48c0 .15-.04.3-.12.43c-.24.38-.35.42-.36.61c-.02.3.26.38.39.4c.04.01.07.04.07.08c.01 1.06.19 1.82 1.46 1.84c.77.01 2-.35 2.37-1.26l.35-1.22l.4-1.28c0-.94-.76-1.72-1.7-1.74Z"
                  />
                  <path
                    fill="#fff"
                    d="M12.33 5.81c-.06 0-.12-.06-.12-.14v-.01c.01-.31.28-.49.54-.48c.26 0 .53.19.52.5v.01c0 .08-.06.14-.12.14l-.82-.02Z"
                  />
                  <path
                    fill="#7D4533"
                    d="M12.23 5.82a.772.772 0 0 1-.02-.15c0-.23.15-.41.33-.41c.18 0 .32.19.32.42c0 .05-.01.1-.02.15l-.61-.01Z"
                  />
                  <path
                    fill="#000"
                    d="M12.337 5.82a.282.282 0 0 1-.04-.15c0-.13.09-.23.19-.23s.18.11.18.24c0 .06-.018.1-.038.14h-.292Z"
                  />
                  <path
                    fill="#fff"
                    d="M12.454 5.522c.012-.043-.008-.086-.045-.097c-.037-.01-.077.015-.09.058c-.012.042.008.085.046.096c.037.01.077-.015.09-.057Z"
                  />
                  <path
                    fill="#990838"
                    d="M12.958 6.822c.06.02.091.086.07.146a.62.62 0 0 1-.785.38a.115.115 0 0 1 .075-.216c.2.07.425-.04.494-.24a.115.115 0 0 1 .146-.07Z"
                  />
                  <path
                    fill="#212121"
                    d="M13.209 5.142a.211.211 0 0 1-.136-.047a.83.83 0 0 0-.58-.144a.22.22 0 0 1-.235-.277a.217.217 0 0 1 .186-.156c.318-.036.64.049.9.237a.217.217 0 0 1-.135.387Z"
                  />
                  <path
                    fill="#212121"
                    d="M16.17 2.44c.7.17 1.06.81 1.06 1.48c0 0 0 .54-.09 1c-.05.26-.11.53-.17.75c-.06.25-.2.59-.35.8c-.14.19-.44.37-.72.4c-.246.025-.65-.143-.755-.452a.684.684 0 0 0 .285-.523a.69.69 0 0 0-.432-.691a.328.328 0 0 0-.148-.044l-.11-.01a.385.385 0 0 1-.36-.42c.02-.27-.18-.5-.45-.5l-1.84-.12c-.01-.01-.03-.01-.04-.01a.827.827 0 0 1-.68-.82c.01-.47.4-.83.86-.8c.14.01.27-.06.35-.16a.848.848 0 0 1 1.05-.23c.27.13.58.15.86.05c.11-.03.22-.05.34-.04c.15.01.29.05.41.13c.17.1.37.16.57.16c.12 0 .23.02.36.05Z"
                  />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 32 32"
              >
                <g fill="none">
                  <path
                    fill="#636363"
                    d="m14.42 12.88l.95.07c1.52.05 2.53.86 2.75 2.32l1.26 5.3c.02.1.07.19.13.27l4.03 5.45l-1.37.87l-4.13-4.07c-.72-.69-1.33-1.26-1.58-1.81l-1.18-4.29l-.86-4.11Z"
                  />
                  <path
                    fill="#9B9B9B"
                    d="m13.6 16.2l-1.27 3.9c-.23.65-.36 1.36-.47 2.35l-.56 5.19l1.29 1.16l2.03-6.81l3.17-3.6c.52-.6.71-1.4.57-2.18l-2.242-.561l-2.518.56v-.01Z"
                  />
                  <path
                    fill="#533566"
                    d="m24.25 26.85l-.97-.91l-1.59.73l-.66 3.05c-.05.34.37.54.61.29l2.62-2.81c.09-.1.09-.26-.01-.35Zm-12.06 3.12l.43-1.26l-1.31-1.15l-3.05.65c-.34.09-.35.56-.02.67l3.64 1.24c.13.05.27-.02.31-.15Z"
                  />
                  <path
                    fill="#FFD7C2"
                    d="M20.242 16.654a10.47 10.47 0 0 1-.084-.277a4.34 4.34 0 0 0-.068-.227c-1.265-3.672-3.87-5.236-4.138-5.396a.946.946 0 0 1-.422-1.284c.24-.46.81-.64 1.26-.4c.14.07 3.49 1.86 5.07 6.46l.058.163c.044.12.085.233.112.337l.3.75l.007.018c.081.225.232.638.193.862c-.05.27-.5.57-.88.69c0 0-.48.15-.89.05c-.31-.07-.26-.43-.26-.43s-.11-.09-.39-.29c-.363-.264-.004-.836.133-1.026Zm-5.2-5.717a.927.927 0 0 0-1.844-.196l-.001.011a4.457 4.457 0 0 1-.083.405c-.075.294-.21.724-.448 1.235c-.457.98-1.3 2.266-2.845 3.462c-.206-.053-.892-.193-1.011.256c-.09.33-.13.46-.13.46s-.35.08-.3.4c.06.41.37.8.37.8c.25.31.69.61.95.56c.202-.044.482-.281.668-.44l.072-.06l.57-.552c1.772-1.386 2.775-2.899 3.336-4.102c.293-.629.466-1.17.565-1.563a6.277 6.277 0 0 0 .129-.654l.001-.015v-.005l.001-.002Z"
                  />
                  <path
                    fill="#F4C6AD"
                    d="m15.89 6.78l.32 1.97l-2.02.35l-.31-2.01l2.01-.31Z"
                  />
                  <path
                    fill="#774AA6"
                    d="M14.25 13.63c.61-1.16.91-2.21 1.05-2.97c.12-.63-.36-1.22-1-1.25h-.04c-.48 0-.74.24-.83.72c-.05.28-.28.76-.41 1.16c-.15.47-.35.93-.59 1.38c-.04.08-.01.17.07.21l1.54.81c.08.05.17.02.21-.06Z"
                  />
                  <path
                    fill="#8B62BF"
                    d="M15.32 8.63c-1.18.29-1.89.7-2.2 2.39c-.37 2.02.47 5.19.47 5.19h4.77l-.6-5.64c-.13-1.2-1.13-2.26-2.44-1.94Z"
                  />
                  <path
                    fill="#A17FD5"
                    d="M19.35 11.09c-.9-.99-1.79-1.63-2.47-2.03c-.56-.34-1.29-.09-1.54.51l-.02.04c-.15.47.04.98.47 1.23c.26.15.57.35.9.62c.4.31.77.66 1.11 1.04c.06.07.16.07.23.01l1.31-1.19c.07-.06.07-.16.01-.23Z"
                  />
                  <path
                    fill="#FFD7C2"
                    d="m14.86 3.18l-1.11-.01c-.94-.01-1.71.75-1.72 1.69v.47c0 .15-.04.3-.12.43c-.23.38-.34.42-.35.61c-.02.3.26.38.39.39c.04.01.07.04.07.08c.02 1.05.21 1.81 1.47 1.82c.77.01 1.99-.37 2.34-1.27l.33-1.22l.38-1.28a1.69 1.69 0 0 0-1.68-1.71Z"
                  />
                  <path
                    fill="#990838"
                    d="M13.087 6.832c.06.02.091.086.07.145a.62.62 0 0 1-.784.38a.114.114 0 0 1 .074-.215a.391.391 0 0 0 .495-.24a.114.114 0 0 1 .145-.07Z"
                  />
                  <path
                    fill="#212121"
                    d="M13.323 4.985a.13.13 0 0 1-.074-.025a.975.975 0 0 0-.662-.156a.119.119 0 0 1-.136-.109a.123.123 0 0 1 .109-.136a1.22 1.22 0 0 1 .838.205a.123.123 0 0 1-.075.221Z"
                  />
                  <path
                    fill="#000"
                    d="M12.42 5.39s.21-.35.64-.27c.17.03.29.13.37.21c.08.07.06.18-.02.24l-.31.21l-.68-.39Z"
                  />
                  <path
                    fill="#fff"
                    d="M12.45 5.83c-.06 0-.12-.06-.12-.14v-.01c0-.31.27-.49.53-.48c.26.01.53.18.52.49v.01c0 .08-.06.14-.12.14l-.81-.01Z"
                  />
                  <path
                    fill="#7D4533"
                    d="M12.35 5.83a.772.772 0 0 1-.02-.15c0-.23.15-.41.33-.41c.18 0 .32.19.32.41c0 .05-.01.1-.02.15h-.61Z"
                  />
                  <path
                    fill="#000"
                    d="M12.46 5.83a.241.241 0 0 1-.04-.15c0-.13.08-.23.19-.23c.1 0 .18.11.18.24c0 .06-.03.1-.05.14h-.28Z"
                  />
                  <path
                    fill="#fff"
                    d="M12.552 5.524c0-.044-.026-.08-.06-.08c-.032 0-.06.035-.06.08c0 .044.027.08.06.08s.06-.035.06-.08Z"
                  />
                  <path
                    fill="#212121"
                    d="M13.13 2.04c-.57-.21-1.17.34-1.33.92c-.12.41.01.84.31 1.11c.09.09.21.16.36.23c.12.05.25.09.39.1c.27.04.54-.01.77-.11c.15-.07.3-.09.45-.06h.01c.18.03.35.13.47.28c.1.129.165.278.193.44c.376.016.67.32.67.7a.695.695 0 0 1-.674.7l-.009.48c-.02.87.51 1.66 1.35 1.93c.04.01.07.02.11.04l.065.015l.065.015c.77.17 1.61-.29 1.79-1.2c.08-.42-.03-.85-.31-1.18c-.05-.06-.11-.12-.16-.17a.842.842 0 0 1-.26-.85c.09-.37.15-.85.14-1.5c-.02-1.86-1.72-2.05-2.87-1.72c-.622.178-.82.1-1.211-.051c-.093-.036-.196-.077-.319-.119Z"
                  />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 32 32"
              >
                <g fill="none">
                  <path
                    fill="#636363"
                    d="m14.42 12.88l.95.07c1.52.05 2.53.86 2.75 2.32l1.26 5.3c.02.1.07.19.13.27l4.03 5.45l-1.37.87l-4.13-4.07c-.72-.69-1.33-1.26-1.58-1.81l-1.18-4.29l-.86-4.11Z"
                  />
                  <path
                    fill="#9B9B9B"
                    d="m13.6 16.2l-1.27 3.9c-.23.65-.36 1.36-.47 2.35l-.56 5.19l1.29 1.16l2.03-6.81l3.17-3.6c.52-.6.71-1.4.57-2.18l-2.242-.561l-2.518.56v-.01Z"
                  />
                  <path
                    fill="#533566"
                    d="m24.25 26.85l-.97-.91l-1.59.73l-.66 3.05c-.05.34.37.54.61.29l2.62-2.81c.09-.1.09-.26-.01-.35Zm-12.06 3.12l.43-1.26l-1.31-1.15l-3.05.65c-.34.09-.35.56-.02.67l3.64 1.24c.13.05.27-.02.31-.15Z"
                  />
                  <path
                    fill="#FFD7C2"
                    d="M20.242 16.654a10.47 10.47 0 0 1-.084-.277a4.34 4.34 0 0 0-.068-.227c-1.265-3.672-3.87-5.236-4.138-5.396a.946.946 0 0 1-.422-1.284c.24-.46.81-.64 1.26-.4c.14.07 3.49 1.86 5.07 6.46l.058.163c.044.12.085.233.112.337l.3.75l.007.018c.081.225.232.638.193.862c-.05.27-.5.57-.88.69c0 0-.48.15-.89.05c-.31-.07-.26-.43-.26-.43s-.11-.09-.39-.29c-.363-.264-.004-.836.133-1.026Zm-5.2-5.717a.927.927 0 0 0-1.844-.196l-.001.011a4.457 4.457 0 0 1-.083.405c-.075.294-.21.724-.448 1.235c-.457.98-1.3 2.266-2.845 3.462c-.206-.053-.892-.193-1.011.256c-.09.33-.13.46-.13.46s-.35.08-.3.4c.06.41.37.8.37.8c.25.31.69.61.95.56c.202-.044.482-.281.668-.44l.072-.06l.57-.552c1.772-1.386 2.775-2.899 3.336-4.102c.293-.629.466-1.17.565-1.563a6.277 6.277 0 0 0 .129-.654l.001-.015v-.005l.001-.002Z"
                  />
                  <path
                    fill="#F4C6AD"
                    d="m15.89 6.78l.32 1.97l-2.02.35l-.31-2.01l2.01-.31Z"
                  />
                  <path
                    fill="#774AA6"
                    d="M14.25 13.63c.61-1.16.91-2.21 1.05-2.97c.12-.63-.36-1.22-1-1.25h-.04c-.48 0-.74.24-.83.72c-.05.28-.28.76-.41 1.16c-.15.47-.35.93-.59 1.38c-.04.08-.01.17.07.21l1.54.81c.08.05.17.02.21-.06Z"
                  />
                  <path
                    fill="#8B62BF"
                    d="M15.32 8.63c-1.18.29-1.89.7-2.2 2.39c-.37 2.02.47 5.19.47 5.19h4.77l-.6-5.64c-.13-1.2-1.13-2.26-2.44-1.94Z"
                  />
                  <path
                    fill="#A17FD5"
                    d="M19.35 11.09c-.9-.99-1.79-1.63-2.47-2.03c-.56-.34-1.29-.09-1.54.51l-.02.04c-.15.47.04.98.47 1.23c.26.15.57.35.9.62c.4.31.77.66 1.11 1.04c.06.07.16.07.23.01l1.31-1.19c.07-.06.07-.16.01-.23Z"
                  />
                  <path
                    fill="#FFD7C2"
                    d="m14.86 3.18l-1.11-.01c-.94-.01-1.71.75-1.72 1.69v.47c0 .15-.04.3-.12.43c-.23.38-.34.42-.35.61c-.02.3.26.38.39.39c.04.01.07.04.07.08c.02 1.05.21 1.81 1.47 1.82c.77.01 1.99-.37 2.34-1.27l.33-1.22l.38-1.28a1.69 1.69 0 0 0-1.68-1.71Z"
                  />
                  <path
                    fill="#990838"
                    d="M13.087 6.832c.06.02.091.086.07.145a.62.62 0 0 1-.784.38a.114.114 0 0 1 .074-.215a.391.391 0 0 0 .495-.24a.114.114 0 0 1 .145-.07Z"
                  />
                  <path
                    fill="#212121"
                    d="M13.323 4.985a.13.13 0 0 1-.074-.025a.975.975 0 0 0-.662-.156a.119.119 0 0 1-.136-.109a.123.123 0 0 1 .109-.136a1.22 1.22 0 0 1 .838.205a.123.123 0 0 1-.075.221Z"
                  />
                  <path
                    fill="#000"
                    d="M12.42 5.39s.21-.35.64-.27c.17.03.29.13.37.21c.08.07.06.18-.02.24l-.31.21l-.68-.39Z"
                  />
                  <path
                    fill="#fff"
                    d="M12.45 5.83c-.06 0-.12-.06-.12-.14v-.01c0-.31.27-.49.53-.48c.26.01.53.18.52.49v.01c0 .08-.06.14-.12.14l-.81-.01Z"
                  />
                  <path
                    fill="#7D4533"
                    d="M12.35 5.83a.772.772 0 0 1-.02-.15c0-.23.15-.41.33-.41c.18 0 .32.19.32.41c0 .05-.01.1-.02.15h-.61Z"
                  />
                  <path
                    fill="#000"
                    d="M12.46 5.83a.241.241 0 0 1-.04-.15c0-.13.08-.23.19-.23c.1 0 .18.11.18.24c0 .06-.03.1-.05.14h-.28Z"
                  />
                  <path
                    fill="#fff"
                    d="M12.552 5.524c0-.044-.026-.08-.06-.08c-.032 0-.06.035-.06.08c0 .044.027.08.06.08s.06-.035.06-.08Z"
                  />
                  <path
                    fill="#212121"
                    d="M13.13 2.04c-.57-.21-1.17.34-1.33.92c-.12.41.01.84.31 1.11c.09.09.21.16.36.23c.12.05.25.09.39.1c.27.04.54-.01.77-.11c.15-.07.3-.09.45-.06h.01c.18.03.35.13.47.28c.1.129.165.278.193.44c.376.016.67.32.67.7a.695.695 0 0 1-.674.7l-.009.48c-.02.87.51 1.66 1.35 1.93c.04.01.07.02.11.04l.065.015l.065.015c.77.17 1.61-.29 1.79-1.2c.08-.42-.03-.85-.31-1.18c-.05-.06-.11-.12-.16-.17a.842.842 0 0 1-.26-.85c.09-.37.15-.85.14-1.5c-.02-1.86-1.72-2.05-2.87-1.72c-.622.178-.82.1-1.211-.051c-.093-.036-.196-.077-.319-.119Z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <YourService />

      <ContactForm />

      <NewsLatter />
    </Helmet>
  );
};

export default Home;