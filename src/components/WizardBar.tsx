import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import custom from '../../native-base-theme/variables/commonColor';
import { TouchableHighlight } from 'react-native-gesture-handler';

export const WizardBar = ({
  activeStep = 2,
  steps = [],
  onWizardStepPress
}) => {
  return (
    <View style={styles.wizardBarContainer}>
      {steps.map(({ id, title }, i) => {
        const isActive = activeStep === id;

        const stepStyle = {
          width: `${100 / steps.length}%`,
          backgroundColor: isActive ? custom.brandPrimary : custom.grayLighter,
          borderColor: isActive ? custom.brandPrimary : custom.grayLight
        };

        const textColor = isActive ? custom.brandLight : custom.gray;

        return (
          <View key={i} style={[stepStyle, styles.wizardBarItem]}>
            <TouchableHighlight onPress={() => onWizardStepPress}>
              <Text style={{ color: textColor }}>{title}</Text>
            </TouchableHighlight>
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
    display: 'flex',
    borderRightWidth: 1
  }
});
