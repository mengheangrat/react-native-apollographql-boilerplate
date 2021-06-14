import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import RootNavigation from './navigations/RootNavigation';

// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
});
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.appContainer}>
        <StatusBar barStyle="light-content" />
        <RootNavigation />
      </View>
    </ApolloProvider>
  );
};

export default App;
