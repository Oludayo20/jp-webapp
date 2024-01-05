import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import VideoLayout from '../component/VideoLayout';
import FathersBlessingList from '../pages/FathersBlessingList';
import AddMedias from '../pages/AddMedias';
import ShortMessageList from '../pages/ShortMessageList';
import ConstructionPage from '../pages/ConstructionPage';
import Ministers from '../pages/Ministers';
import AddMinister from '../pages/AddMinister';
import Minister from '../pages/Minister';
import Jobs from '../pages/Jobs';
import AddJob from '../pages/AddJob';
import Job from '../pages/Job';
import StreamService from '../pages/StreamService';
import Calender from '../pages/Calender';
import Volunteer from '../pages/Volunteer';
import ContactUs from '../pages/ContactUs';
import TheMinistry from '../pages/TheMinistry';
import AddMinistry from '../pages/AddMinistry';
import AboutUs from '../pages/AboutUs';
import YouthProvince from '../pages/YouthProvince';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<ConstructionPage />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="videos" element={<VideoLayout />}>
        <Route path="fathers-blessing" element={<FathersBlessingList />} />
        <Route path="short-messages" element={<ShortMessageList />} />
        <Route path="stream-service" element={<StreamService />} />
        <Route path="add-videos" element={<AddMedias />} />
      </Route>
      <Route path="ministers" element={<Ministers />} />
      <Route path="add-ministers" element={<AddMinister />} />
      <Route path="ministers/:id" element={<Minister />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="add-jobs" element={<AddJob />} />
      <Route path="job/:id" element={<Job />} />
      <Route path="calender" element={<Calender />} />
      <Route path="volunteer" element={<Volunteer />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="the-ministry" element={<TheMinistry />} />
      <Route path="add-department" element={<AddMinistry />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="youth-province" element={<YouthProvince />} />
    </Routes>
  );
};

export default Router;
