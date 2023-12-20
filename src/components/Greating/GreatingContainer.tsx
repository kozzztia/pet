import React, {useEffect, useState} from 'react';
import {GreatingInput} from '../ui/Inputs';
import {dictionary} from '../../consts/dictionary';
import {CustomButton} from '../ui/Buttons';
import {Title} from '../ui/Text';
import {ViewContainer} from '../ui/Containers';
import {
  clearNameFromStorage,
  getNameFromStorage,
  setNameToStorage,
} from '../../utils/storageUtils';

import {useDispatch, useSelector} from 'react-redux';
import {setName} from '../../store/userSlice';
import {RootState} from '../../store';

const GreatingContainer = () => {
  const {greating} = dictionary;
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();

  const greatingHandler = (value: string) => {
    const name = value.trim();
    setNameToStorage(name);
    dispatch(setName(name));
    setInputValue('');
  };

  const userName = useSelector((state: RootState) => state.user.name);

  useEffect(() => {
    getNameFromStorage().then(name => dispatch(setName(name)));
  }, [dispatch]);

  return userName ? (
    <ViewContainer row>
      <Title title={`${greating.message} ${userName}`} />
      <CustomButton
        title={greating.clear}
        handler={() =>
          clearNameFromStorage().then(() => dispatch(setName(null)))
        }
      />
    </ViewContainer>
  ) : (
    <ViewContainer row>
      <GreatingInput
        value={inputValue}
        setValue={setInputValue}
        title={greating.placeHolder}
      />
      <CustomButton
        title={greating.button}
        handler={() => greatingHandler(inputValue)}
      />
    </ViewContainer>
  );
};

export default GreatingContainer;
