import React, { useState, useReducer } from 'react';
import { setConfig } from 'react-hot-loader';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';

import { WizardForm, FormField } from '../components';
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

const IndexView = ({ navigation }) => {
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
    },
    {
      title: 'See Results',
      isActive: false
    }
  ];

  return (
    <WizardForm
      breadcrumbs={breadcrumbs}
      wizardSteps={steps}
      handleBreadcrumbPress={location => navigation.push(location)}
      onProceed={() => navigation.push('BPSView')}
    >
      <CalculatorContext.Consumer>
        {([state, dispatch]: any) => {
          return (
            <FormField
              type={'number-pad'}
              value={state.expectedRevenue}
              handleChange={e =>
                dispatch({ type: 'expectedRevenue', value: e.target.value })
              }
            />
          );
        }}
      </CalculatorContext.Consumer>
    </WizardForm>
  );
};

const BPSView = ({ navigation }) => {
  const steps = [
    {
      title: 'Step 1',
      isActive: false
    },
    {
      title: 'Step 2',
      isActive: true
    },
    {
      title: 'Step 3',
      isActive: false
    },
    {
      title: 'See Results',
      isActive: false
    }
  ];

  return (
    <WizardForm
      breadcrumbs={breadcrumbs}
      handleBreadcrumbPress={location => navigation.push(location)}
      submitLabel={'Proceed to Step 3'}
      wizardSteps={steps}
      onProceed={() => navigation.push('LoanSizeView')}
    >
      <CalculatorContext.Consumer>
        {([state, dispatch]: any) => {
          return (
            <FormField
              type={'number-pad'}
              value={state.bpsRequired}
              label={'How many BPS do you want to make?'}
              handleChange={e =>
                dispatch({ type: 'expectedRevenue', value: e.target.value })
              }
            />
          );
        }}
      </CalculatorContext.Consumer>
    </WizardForm>
  );
};

const LoanSizeView = ({ navigation }) => {
  const steps = [
    {
      title: 'Step 1',
      isActive: false
    },
    {
      title: 'Step 2',
      isActive: false
    },
    {
      title: 'Step 3',
      isActive: true
    },
    {
      title: 'See Results',
      isActive: false
    }
  ];

  return (
    <WizardForm
      breadcrumbs={breadcrumbs}
      handleBreadcrumbPress={location => navigation.push(location)}
      submitLabel={'Complete now'}
      wizardSteps={steps}
      onProceed={() => navigation.push('ResultsView')}
    >
      <CalculatorContext.Consumer>
        {([state, dispatch]: any) => {
          return (
            <FormField
              type={'number-pad'}
              value={state.bpsRequired}
              label={'What is your Average Loan Size?'}
              handleChange={e =>
                dispatch({ type: 'expectedRevenue', value: e.target.value })
              }
            />
          );
        }}
      </CalculatorContext.Consumer>
    </WizardForm>
  );
};

export const MortgageCalculatorWizard = ({ navigation }) => {
  const WizardNavigator = createStackNavigator(
    {
      IndexView: {
        screen: ({ ...props }) => (
          <IndexView parentNavigation={navigation} {...props} />
        )
      },

      BPSView: {
        screen: ({ ...props }) => (
          <BPSView parentNavigation={navigation} {...props} />
        )
      },

      LoanSizeView: {
        screen: ({ ...props }) => (
          <LoanSizeView parentNavigation={navigation} {...props} />
        )
      },

      ResultsView: {
        screen: ({ ...props }) => (
          <MortgageCalculatorWizardResults
            parentNavigation={navigation}
            {...props}
          />
        )
      }
    },
    {
      initialRouteName: 'IndexView',
      headerMode: 'none',
      transitionConfig: () => fromRight()
    }
  );

  const WizardNavigatorContainer = createAppContainer(WizardNavigator);

  return (
    <CalculatorContext.Provider value={useReducer(reducer, initialState)}>
      <WizardNavigatorContainer />
    </CalculatorContext.Provider>
  );
};

const initialState: any = {
  expectedRevenue: 0
};

const reducer = (state = initialState, action): any => {
  switch (action.type) {
    case 'expectedRevenue':
      return {
        ...state,
        expectedRevenue: action.value
      };

    default:
      return state;
  }
};

export const CalculatorContext = React.createContext(initialState);
