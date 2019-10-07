import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';

import { AppBar } from '../components';

export const AppContainer = ({ children }) => {
  return (
    <Container style={styles.container}>
      <AppBar />
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
});
