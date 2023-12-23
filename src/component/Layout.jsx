import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Router from '../router/Router';

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="">
        <Router />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
