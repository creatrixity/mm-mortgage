import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Text } from 'native-base';

import { BreadcrumbBar, ToolCard } from '../components';
import { padTowards } from '../utils';

const breadcrumbs = [
  {
    title: 'Mortgage Tools',
    isActive: true,
    location: 'Home'
  }
];

export const Home = ({ navigation }) => {
  return (
    <React.Fragment>
      <BreadcrumbBar
        breadcrumbs={breadcrumbs}
        onBreadcrumbPress={location => navigation.push(location)}
      />

      <View style={styles.toolListContainer}>
        <Text style={styles.toolListTitle}>Amp your productivity.</Text>
        <ToolCard
          onToolCardBtnClick={e => navigation.push('MortgageCalculatorWizard')}
        />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  toolListContainer: {
    ...padTowards({ direction: 'horizontal' })
  },
  toolListTitle: {
    ...padTowards({ direction: 'vertical', size: 24 }),
    fontFamily: 'Lato_bold'
  }
});
