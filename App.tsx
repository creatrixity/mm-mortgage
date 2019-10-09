import React, { useEffect } from 'react';
import * as Font from 'expo-font';
import { StyleProvider } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromRight } from 'react-navigation-transitions';
import { StateProvider } from '@react-simply/state';

import { Home, MortgageCalculatorWizard } from './src/screens';
import { AppContainer } from './src/containers';

import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/commonColor';

export default function App() {
  useEffect(() => {
    Font.loadAsync({
      Lato: require('./assets/fonts/Lato-Regular.ttf'),
      Lato_bold: require('./assets/fonts/Lato-Bold.ttf')
    });
  });

  const AppNavigator = createStackNavigator(
    {
      Home: { screen: Home },
      MortgageCalculatorWizard: { screen: MortgageCalculatorWizard }
    },
    {
      initialRouteName: 'MortgageCalculatorWizard',
      headerMode: 'none',
      transitionConfig: () => fromRight()
    }
  );

  const AppNavigatorContainer = createAppContainer(AppNavigator);

  return (
    <StyleProvider style={getTheme(custom)}>
      <AppContainer>
        <AppNavigatorContainer />
      </AppContainer>
    </StyleProvider>
  );
}
