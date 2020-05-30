import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components';
import Routes from './routes/routes';
import {theme} from './assets/theme';

console.disableYellowBox = true;

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </ThemeProvider>
  </>
);

export default App;
