import React, { useState, useReducer } from 'react';
import { setConfig } from 'react-hot-loader';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';

import { BreadcrumbBar, WizardForm, FormField } from '../components';
import { MortgageCalculatorWizardResults } from '../screens';

const breadcrumbs = [
  {
    title: 'Mortgage Tools',
    isActive: false,
    location: 'Home'
  },
  {
    title: 'Lead Activity',
    isActive: true,
    location: 'MortgageCalculatorWizard'
  }
];

const createCalcWizardView = ({
  navigation,
  submitLabel,
  activeStep = 1,
  submitAction = 'ResultsView',
  keyboardType = 'default',
  fieldOpts = {
    key: 'avgLoanSize',
    label: 'What is your Average Loan Size?'
  }
}) => {
  return (
    <WizardForm
      activeStep={activeStep}
      handleWizardStepPress={() => {}}
      submitLabel={submitLabel}
      onProceed={() => navigation.push(submitAction)}
    >
      <CalculatorContext.Consumer>
        {([state, dispatch]: any) => {
          return (
            <FormField
              type={keyboardType as any}
              value={state[fieldOpts.key]}
              label={fieldOpts.label}
              handleChange={e =>
                dispatch({
                  type: 'VALUE_UPDATE',
                  key: fieldOpts.key,
                  value: e.target.value
                })
              }
            />
          );
        }}
      </CalculatorContext.Consumer>
    </WizardForm>
  );
};

const WizardNavigator = createStackNavigator(
  {
    IndexView: {
      screen: ({ navigation }) =>
        createCalcWizardView({
          navigation,
          activeStep: 1,
          submitLabel: 'Proceed to Step 2',
          submitAction: 'BPSView',
          fieldOpts: {
            key: 'expectedRevenue',
            label: 'How much money do you want to make?'
          }
        })
    },

    BPSView: {
      screen: ({ navigation }) =>
        createCalcWizardView({
          navigation,
          activeStep: 2,
          submitLabel: 'Proceed to Step 3',
          submitAction: 'LoanSizeView',
          fieldOpts: {
            key: 'BPSRequired',
            label: 'How many BPS do you want to make?'
          }
        })
    },

    LoanSizeView: {
      screen: ({ navigation }) =>
        createCalcWizardView({
          navigation,
          activeStep: 3,
          submitLabel: 'View Results'
        })
    },

    ResultsView: {
      screen: ({ ...props }) => <MortgageCalculatorWizardResults {...props} />
    }
  },
  {
    initialRouteName: 'IndexView',
    headerMode: 'none',
    transitionConfig: () => fromRight()
  }
);

const WizardNavigatorContainer = createAppContainer(WizardNavigator);

export const MortgageCalculatorWizard = ({ navigation }) => {
  return (
    <CalculatorContext.Provider value={useReducer(reducer, initialState)}>
      <BreadcrumbBar
        breadcrumbs={breadcrumbs}
        onBreadcrumbPress={location => navigation.push(location)}
      />

      <WizardNavigatorContainer />
    </CalculatorContext.Provider>
  );
};

const initialState: any = {
  expectedRevenue: 0,
  BPSRequired: 0,
  avgLoanSize: 0
};

const reducer = (state = initialState, action): any => {
  switch (action.type) {
    case 'VALUE_UPDATE':
      return {
        ...state,
        [action.key]: action.value
      };

    default:
      return state;
  }
};

export const CalculatorContext = React.createContext(initialState);
