import * as React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from './providers/ThemeProvider';

import RouterContainer from './router';

import store from './store';

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <RouterContainer />
    </ThemeProvider>
  </Provider>
);

export default App;
