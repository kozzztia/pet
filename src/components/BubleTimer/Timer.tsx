import React, {useEffect, useState} from 'react';
import {Title} from '../ui/Text';
import {dictionary} from '../../consts/dictionary';

const Timer: React.FC = () => {
  const {timeTitle} = dictionary.game;
  const [leftTime, setLeftTime] = useState<number>(60);
  useEffect(() => {
    const timer = setInterval(() => {
      setLeftTime(prev => prev - 1);
    }, 1000);
    if (leftTime === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [leftTime]);
  return <Title title={`${timeTitle} : ${leftTime}`} />;
};

export default Timer;
