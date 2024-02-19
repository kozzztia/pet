import React, {useEffect, useState} from 'react';
import {Title} from '../ui/Text';

interface TimerProps {
  timeLeftCount: number;
  timeLeftHandler: () => void;
}

const Timer: React.FC<TimerProps> = ({timeLeftHandler, timeLeftCount}) => {
  useEffect(() => {
    const timer = setInterval(() => {
      timeLeftHandler();
    }, 1000);
    if (timeLeftCount === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timeLeftCount, timeLeftHandler]);
  return <Title title={timeLeftCount.toString()} />;
};

export default Timer;
