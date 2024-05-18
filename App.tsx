/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import store from './src/stores';
import DetailScreen from './src/screens/Detail/DetailScreen';
import EditScreen from './src/screens/EditScreen/EditScreen';
import AddScreen from './src/screens/AddScreen/AddScreen';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Edit"
              component={EditScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Add"
              component={AddScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <Toast />
    </>
  );
}

export default App;
