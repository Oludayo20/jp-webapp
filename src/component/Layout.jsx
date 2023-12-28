import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Router from '../router/Router';
import InternetStatusChecker from './InternetStatusChecker';

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="">
        {/* <InternetStatusChecker> */}
        <Router />
        {/* </InternetStatusChecker> */}
      </div>

      <Footer />
    </>
  );
};

export default Layout;
