import React, {useEffect, useState} from 'react';
import {Title} from '../ui/Text';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
    if (timeLeft === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);
  return <Title title={timeLeft.toString()} />;
};

export default Timer;
