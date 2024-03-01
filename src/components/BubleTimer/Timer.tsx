import React, {useEffect, useState} from 'react';
import {Title} from '../ui/Text';
import {dictionary} from '../../consts/dictionary';
import {CustomButton} from '../ui/Buttons';
import {StyleSheet} from 'react-native';

interface TimerProps {
  timerHandler: (value: boolean) => void;
}

const Timer: React.FC<TimerProps> = ({timerHandler}) => {
  const {timeTitle, startTitle} = dictionary.game;
  const [leftTime, setLeftTime] = useState<number>(0);

  const handleReset = async () => {
    timerHandler(false);
    setLeftTime(10);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setLeftTime(prev => prev - 1);
    }, 1000);
    if (leftTime === 0) {
      timerHandler(true);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [leftTime]);
  return leftTime === 0 ? (
    <CustomButton
      handler={handleReset}
      title={startTitle}
      style={styles.timerButton}
    />
  ) : (
    <Title title={`${timeTitle} : ${leftTime}`} />
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerButton: {
    marginTop: 'auto',
  },
});
