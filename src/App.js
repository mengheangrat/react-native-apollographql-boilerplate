import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import RootNavigation from './navigators/RootNavigation';

// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  Authorization:
    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjM4MjgyNzIsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2twejVmOG1pY2czZjAxejY4MHJrNjMybC9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiJjOGM2NjlhOS1hOWUwLTQ0NmQtYjljOC01MjdjNDVjYzhlZTAiLCJqdGkiOiJja2c4MzVvYXByNGZpMDF3ZTk4amw3ODB0In0.KfovcT3MIm5DPAHRy0Uy56iBCutzreR6acaeHr1v5FfGJwqbROqQcEcrDnKv3hRsEfapDSaZbA2u0V_lrecB6X3GA7L_JtdKKJYy4dLMHdP0cm2UP31SsmtVHr_T5bNZKUUvopiFmb7QLhyWPEbz2DelrDNdadbHffYCAj8eATtInWw4dhJVKJfF0iVSZGgg-fyzz1InQvilFWo2TNcPdUCJn7el05A3lNdfBEGtezYNIjW1o6duFZouLJxIK8vRDS_HWddOJkH3vvoFxhOc-qMeNAa8uzTTjexIXijL3iL_2HOHeNljsJ-Bd9jvThpCncQkCptCRgx7thVGEReuRzKX9DZUkgp2kyqxZlKrAt9wJgMyeyXq1FQ1kc-AtWI5X_UN0QccLawQMEhRGgbAbTPEUecBbh27SRrjmryM3tI0RTttrm_MOjY4pXIfFZ0GEqefJ0ARfeQMfgEw4BJ4tUj2hw5T6n-lUYJJZOf6Hqjcf_u7-DP7AB0Jj3YUkcdWRErMGabx6-yTG7H4MARj2qDwIqX17_4gYu0NQFSkYdhN544xjLn3X4zrAEtG9RnAtM6bb5LhfOhlitbT7iJnU1hIX5MPCqFqS62bJ3II1Iw2zwi-2S3b3kVpli5YCxi_Eyf5sC7cTk1DiwiwG-jXNVcprRb4oTXa6KULl3dY7vw',
  uri: 'https://api-ap-northeast-1.graphcms.com/v2/ckpz5f8micg3f01z680rk632l/master',
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

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
