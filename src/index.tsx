import * as React from 'react';
import RouterContainer from './router';
import {ThemeProvider} from './providers/ThemeProvider';

const App = () => (
  <ThemeProvider>
    <RouterContainer />
  </ThemeProvider>
);

export default App;
