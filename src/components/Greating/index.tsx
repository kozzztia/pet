import React, {useEffect, useState} from 'react';
import {
  clearNameFromStorage,
  getNameFromStorage,
  setNameToStorage,
} from '../../utils/storageUtils';

import {useDispatch, useSelector} from 'react-redux';
import {setName} from '../../store/userSlice';
import {RootState} from '../../store';
import UserContainer from './UserContainer';
import NoUserContainer from './NoUserContainer';

const GreatingContainer = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();
  const userName = useSelector((state: RootState) => state.user.name);

  const greatingHandler = (value: string) => {
    const name = value.trim();
    setNameToStorage(name);
    dispatch(setName(name));
    setInputValue('');
  };

  const clearHandler = () => {
    clearNameFromStorage().then(() => dispatch(setName(null)));
  };

  useEffect(() => {
    getNameFromStorage().then(name => dispatch(setName(name)));
  }, [dispatch]);

  return userName ? (
    <UserContainer handler={() => clearHandler()} name={userName} />
  ) : (
    <NoUserContainer
      value={inputValue}
      setValue={setInputValue}
      handler={() => greatingHandler(inputValue)}
    />
  );
};

export default GreatingContainer;
