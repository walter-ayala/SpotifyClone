/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useRef } from 'react'
import RNBootSplash from "react-native-bootsplash"
import { Provider } from 'react-redux'
import { persistor, store } from 'store'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from 'navigation/StackNavigator'

const App = () => {
  const navigationRef = useRef(null)

  const onReady = async () => {
    RNBootSplash.hide()
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer
          ref={navigationRef}
          onReady={onReady}
        >
          <StackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App
