import React from 'react';
import { toast } from 'react-toastify';
import { selectUserData } from '../redux/slice/userSlice';
import { useSelector } from 'react-redux';

const UseAuth = () => {
  // const userData = useSelector(selectUserData);

  // if (userData) {
  //   const { fullName, profileURL, isAdmin } = userData;

  //   // isAdmin = roles.includes('Admin');

  //   return { fullName, profileURL, isAdmin };
  // }

  return { fullName: '', profileURL: '', isAdmin: false };
};

export default UseAuth;
