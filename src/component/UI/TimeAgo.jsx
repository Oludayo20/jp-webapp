import React, { useEffect, useState } from 'react';

const TimeAgo = ({ date }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentDate = new Date();
      const postDate = new Date(date);
      const timeDifference = currentDate - postDate;
      const seconds = Math.floor(timeDifference / 1000);

      let interval = Math.floor(seconds / 31536000);

      if (interval >= 1) {
        setTimeAgo(`${interval} year${interval === 1 ? '' : 's'} ago`);
        return;
      }
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        setTimeAgo(`${interval} month${interval === 1 ? '' : 's'} ago`);
        return;
      }
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        setTimeAgo(`${interval} day${interval === 1 ? '' : 's'} ago`);
        return;
      }
      interval = Math.floor(seconds / 3600);
      if (interval >= 1) {
        setTimeAgo(`${interval} hour${interval === 1 ? '' : 's'} ago`);
        return;
      }
      interval = Math.floor(seconds / 60);
      if (interval >= 1) {
        setTimeAgo(`${interval} minute${interval === 1 ? '' : 's'} ago`);
        return;
      }
      setTimeAgo(
        `${Math.floor(seconds)} second${
          Math.floor(seconds) === 1 ? '' : 's'
        } ago`
      );
    };

    calculateTimeAgo();
  }, [date]);

  return <span>{`Posted ${timeAgo}`}</span>;
};

export default TimeAgo;
