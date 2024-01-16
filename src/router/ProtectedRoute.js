import { Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserById, setCurrentUser } from '../redux/slice/userSlice';
import { useFetchUserMutation } from '../redux/slice/authApi';

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(getUserById(user.uid));
      } else {
        dispatch(setCurrentUser(null));
        navigate('/sign-in');
      }
    });
  }, []);
  return <Outlet />;
};

export default ProtectedRoute;
