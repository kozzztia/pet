import * as React from 'react';
import RouterContainer from './router';
import {ThemeProvider} from './providers/ThemeProvider';
import {AsyncStorageProvider} from './providers/AsyncStoragProvider';

const App = () => (
  <AsyncStorageProvider>
    <ThemeProvider>
      <RouterContainer />
    </ThemeProvider>
  </AsyncStorageProvider>
);

export default App;
