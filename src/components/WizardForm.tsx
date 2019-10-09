import React, { Fragment } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Form, Text } from 'native-base';

import { padTowards } from '../utils';
import { WizardBar } from '../components';

const steps = [
  {
    id: 1,
    title: 'Step 1',
    isActive: false
  },
  {
    id: 2,
    title: 'Step 2',
    isActive: false
  },
  {
    id: 3,
    title: 'Step 3',
    isActive: false
  }
];

export const WizardForm = ({
  title = 'Find the value of activities for a loan.',
  children,
  hasSubmit = true,
  activeStep = 1,
  submitLabel = 'Proceed to Step 2',
  wizardSteps = steps,
  handleWizardStepPress = (location: string) => {},
  onProceed = () => {}
}) => {
  return (
    <Fragment>
      <WizardBar
        activeStep={activeStep}
        steps={wizardSteps}
        onWizardStepPress={handleWizardStepPress}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wizardFormContainer}>
          <Text style={styles.wizardFormTitle}>{title}</Text>

          <Form>{children}</Form>

          {hasSubmit && (
            <View style={styles.formSubmitContainer}>
              <Button full onPress={onProceed}>
                <Text>{submitLabel}</Text>
              </Button>
            </View>
          )}
        </View>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  wizardFormContainer: {
    flexGrow: 1,
    marginTop: 24,
    ...padTowards({ direction: 'horizontal' })
  },

  wizardFormTitle: {
    fontFamily: 'Lato_bold'
  },

  scrollContainer: { paddingVertical: 20, height: '100%' },

  formSubmitContainer: {
    position: 'absolute',
    bottom: 20,
    left: '2%',
    width: '96%',
    alignItems: 'center'
  }
});
