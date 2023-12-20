import * as React from 'react';
import {ViewContainer} from '../ui/Containers';
import {GreatingInput} from '../ui/Inputs';
import {dictionary} from '../../consts/dictionary';
import {CustomButton} from '../ui/Buttons';

type NoUserContainerProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handler: () => void;
};

const NoUserContainer: React.FC<NoUserContainerProps> = ({
  value,
  setValue,
  handler,
}) => {
  const {greating} = dictionary;
  return (
    <ViewContainer row>
      <GreatingInput
        value={value}
        setValue={setValue}
        title={greating.placeHolder}
      />
      <CustomButton title={greating.button} handler={handler} />
    </ViewContainer>
  );
};

export default NoUserContainer;
