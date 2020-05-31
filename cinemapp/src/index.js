import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, SafeAreaView} from 'react-native';

import {ThemeProvider} from 'styled-components';
import {Provider as StoreProvider} from 'react-redux';
import Routes from './routes/routes';
import {theme} from './assets/theme';
import store from './redux/store';

console.disableYellowBox = true;

const App = () => (
  <>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <SafeAreaView style={{backgroundColor: theme.primaryBlue}} />
        <Routes />
      </ThemeProvider>
    </StoreProvider>
  </>
);

export default App;
