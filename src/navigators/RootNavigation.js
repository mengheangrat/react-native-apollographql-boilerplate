import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../containers/WelcomeScreen';

const RootStack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
