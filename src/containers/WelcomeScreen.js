import * as React from 'react';

import {View, Text} from 'react-native';
import Config from 'react-native-config';

const {URL, ENV} = Config;

export default function WelcomeScreen() {
  return (
    <View>
      <Text>{ENV}</Text>
      <Text>{URL}</Text>
    </View>
  );
}
