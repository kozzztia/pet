import React, {useEffect} from 'react';
import {Title} from '../ui/Text';
import {dictionary} from '../../consts/dictionary';

interface TimerProps {
  timeLeftCount: number;
  timeLeftHandler: () => void;
}

const Timer: React.FC<TimerProps> = ({timeLeftHandler, timeLeftCount}) => {
  const {timeTitle} = dictionary.game;
  useEffect(() => {
    const timer = setInterval(() => {
      timeLeftHandler();
    }, 1000);
    if (timeLeftCount === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timeLeftCount, timeLeftHandler]);
  return <Title title={`${timeTitle} : ${timeLeftCount.toString()}`} />;
};

export default Timer;
