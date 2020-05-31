import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, SafeAreaView} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

import {ThemeProvider} from 'styled-components';
import {Provider as StoreProvider} from 'react-redux';
import Routes from './routes/routes';
import {theme} from './assets/theme';
// import store from './redux/store';
import {store, persistor} from './redux/configureStore';

console.disableYellowBox = true;

const App = () => (
  <>
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <SafeAreaView style={{backgroundColor: theme.primaryBlue}} />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  </>
);

export default App;
