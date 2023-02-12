import React, {
  useState,
  useEffect
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

/*  Navigation */
import {  NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*  Components */
import First from './src/Components/First/First';
import AppRoutes from './src/Components/App/AppRoutes';
import Load from './src/Components/Load/Load';






const App = () => {

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({  route  }) => ({
          headerShown: false,
        })}
        initialRouteName="Load"
      >




        <Stack.Screen 
          name="Load"
          component={  Load  }
        />

        <Stack.Screen
          name="AppRoutes"
          component={  AppRoutes  }
        />

        <Stack.Screen
          name="First"
          component={  First  }
        />






      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

/*if (isFirstTime) {
    return (
      <First />
    )
  }
  else if (!isFirstTime) {
    return (
      <AppRoutes />
    )
  }
  else {
    return (
      <Load />
    )
  }*/