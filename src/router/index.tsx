import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import UserRoutes from './UserRoutes';
import DefaultRoutes from './DefaultRoutes';

const RouterContainer = () => {
  const userName = useSelector((state: RootState) => state.user.name);
  return (
    <NavigationContainer>
      {userName ? <UserRoutes /> : <DefaultRoutes />}
    </NavigationContainer>
  );
};

export default RouterContainer;
