/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {Gallery} from './pages/Gallery';

const App = () => {
  return (
    <View>
      <Provider store={store}>
        <Gallery />
      </Provider>
    </View>
  );
};

export default App;
