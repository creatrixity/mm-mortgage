import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Button, Header, Icon, Right, Title } from 'native-base';

import { padTowards } from '../utils';

export const AppBar = () => {
  return (
    <View style={styles.headerWrapper}>
      <Header style={styles.header}>
        <Body>
          <Title style={styles.headerTitle}>MortgaCalc</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
          >
            <Icon name="ios-menu" style={styles.headerIcon} />
          </Button>
        </Right>
      </Header>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    flexDirection: 'column'
  },
  header: {
    ...padTowards({ direction: 'horizontal' })
  },
  headerTitle: { textTransform: 'uppercase' },
  headerIcon: { color: 'rgba(255, 255, 255, 0.4)' }
});
