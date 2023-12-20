import * as React from 'react';
import {ViewContainer} from '../ui/Containers';
import {CustomButton} from '../ui/Buttons';
import {Title} from '../ui/Text';
import {dictionary} from '../../consts/dictionary';

type UserContainerProps = {
  name: string;
  handler: () => void;
};

const UserContainer: React.FC<UserContainerProps> = ({name, handler}) => {
  const {greating} = dictionary;
  return (
    <ViewContainer row>
      <Title title={`${greating.message} ${name}`} />
      <CustomButton title={greating.clear} handler={handler} />
    </ViewContainer>
  );
};

export default UserContainer;
