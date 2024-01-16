import React from 'react';
import { Outlet } from 'react-router-dom';
import BreadCrumb from './UI/BreadCrumb';
import Helmet from './Helmet';
import WelcomeBanner from './UI/Welcome';
import Cards from './UI/Cards';
import AdminFloatingActionButton from './AdminFloatingActionButton';

const AdminLayout = () => {
  return (
    <Helmet title="Admin">
      <AdminFloatingActionButton />

      <div className="py-16 lg:pb-36">
        <BreadCrumb pageName="Admin Dashboard" />

        <WelcomeBanner />

        <div className="container">
          <Cards />
        </div>

        <section className="bg-cover bg-no-repeat bg-center">
          <Outlet />
        </section>
      </div>
    </Helmet>
  );
};

export default AdminLayout;
