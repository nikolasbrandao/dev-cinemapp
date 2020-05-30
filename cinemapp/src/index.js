import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StatusBar} from 'react-native';

import Routes from './routes/routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#000" />
    <Routes />
  </>
);

export default App;
