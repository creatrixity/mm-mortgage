import React, { Fragment } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Form, Text } from 'native-base';

import { padTowards } from '../utils';
import { BreadcrumbBar, WizardBar } from '../components';

const steps = [
  {
    title: 'Step 1',
    isActive: true
  },
  {
    title: 'Step 2',
    isActive: false
  },
  {
    title: 'Step 3',
    isActive: false
  }
];

export const WizardForm = ({
  title = 'Find the value of activities for a loan.',
  children,
  breadcrumbs,
  hasSubmit = true,
  submitLabel = 'Proceed to Step 2',
  wizardSteps = steps,
  handleBreadcrumbPress = (location: string) => {},
  onProceed = () => {}
}) => {
  return (
    <Fragment>
      <BreadcrumbBar
        breadcrumbs={breadcrumbs}
        onBreadcrumbPress={handleBreadcrumbPress}
      />
      <WizardBar steps={wizardSteps} />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20, height: '100%' }}
      >
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

  formSubmitContainer: {
    position: 'absolute',
    bottom: 20,
    left: '2%',
    width: '96%',
    alignItems: 'center'
  }
});
