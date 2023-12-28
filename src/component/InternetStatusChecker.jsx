import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InternetStatusChecker = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOnlineStatusChange = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  useEffect(() => {
    if (!isOnline) {
      toast.error('You are offline. Please check your internet connection.');
    }
  }, [isOnline]);

  return <Outlet />;
};

export default InternetStatusChecker;
