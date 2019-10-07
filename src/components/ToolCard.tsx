import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Body, Button, Card, CardItem, Icon, Text } from 'native-base';
import custom from '../../native-base-theme/variables/commonColor';
import { MortgageCalculatorIcon } from '../components';
import { padTowards } from '../utils';

export function ToolCard({ onToolCardBtnClick }) {
  return (
    <Card style={styles.toolCard}>
      <CardItem style={styles.toolCardItem}>
        <MortgageCalculatorIcon width={64} fill={custom.gray} />

        <Text style={styles.toolCardTitle}>Lead Activity Value Calculator</Text>

        <Text style={styles.toolCardText}>
          Track the value of your activities down to the dollar.
        </Text>
        <Button light onPress={onToolCardBtnClick}>
          <Text>Get started</Text>
        </Button>
      </CardItem>
    </Card>
  );
}

const styles = StyleSheet.create({
  toolCard: {
    ...padTowards({ direction: 'all', size: 32 })
  },

  toolCardItem: { flexDirection: 'column', alignItems: 'center' },

  toolCardTitle: {
    fontFamily: 'Lato_bold',
    marginBottom: 8,
    color: '#5B5B5B',
    fontSize: 16
  },

  toolCardText: {
    textAlign: 'center',
    color: custom.gray,
    marginBottom: 16
  }
});
