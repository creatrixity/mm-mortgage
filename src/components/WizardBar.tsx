import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import custom from '../../native-base-theme/variables/commonColor';

export const WizardBar = ({ steps }) => {
  return (
    <View style={styles.wizardBarContainer}>
      {steps.map(({ title, isActive }, i) => {
        const stepStyle = {
          width: `${100 / steps.length}%`,
          backgroundColor: isActive ? custom.brandPrimary : custom.grayLighter,
          borderColor: isActive ? custom.brandPrimary : custom.grayLight
        };

        const textColor = isActive ? custom.brandLight : custom.gray;

        return (
          <View key={i} style={[stepStyle, styles.wizardBarItem]}>
            <Text style={{ color: textColor }}>{title}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wizardBarContainer: {
    backgroundColor: custom.grayLighter,
    flexDirection: 'row'
  },

  wizardBarItem: {
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: 'center',
    borderRightWidth: 1
  }
});
