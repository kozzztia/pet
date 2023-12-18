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

const GreatingContainer = () => {
  const {greating} = dictionary;
  const [inputValue, setInputValue] = useState<string>('');
  const [userName, setUserName] = useState<string | null>(null);

  const greatingHandler = (value: string) => {
    const name = value.trim();
    setNameToStorage(name);
    setUserName(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    getNameFromStorage().then(name => setUserName(name));
  }, []);

  return userName ? (
    <ViewContainer row>
      <Title title={`${greating.message} ${userName}`} />
      <CustomButton
        title={greating.clear}
        handler={() => clearNameFromStorage().then(() => setUserName(null))}
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
