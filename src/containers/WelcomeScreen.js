import * as React from 'react';

import {View, Text} from 'react-native';
import Config from 'react-native-config';

const {URL} = Config;

export default function WelcomeScreen() {
  React.useEffect(() => {
    alert(URL);
  }, []);
  return (
    <View>
      <Text>Hi there</Text>
    </View>
  );
}
