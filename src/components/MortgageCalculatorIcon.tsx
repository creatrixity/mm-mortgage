import React from 'react';
import Svg, { Path, Text } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const MortgageCalculatorIcon = props => (
  <Svg viewBox="0 0 100 125" {...props}>
    <Path d="M71.5 57.2H28v-15h43.5v15zM31.2 54h37.1v-8.6H31.2V54zm4.5 7.5h-7.9v5.3h7.9v-5.3zm12 0h-7.9v5.3h7.9v-5.3zm12 0h-7.9v5.3h7.9v-5.3zm-24 8.4h-7.9v5.3h7.9v-5.3zm0 8.4h-7.9v5.3h7.9v-5.3zm12-8.4h-7.9v5.3h7.9v-5.3zm0 8.4h-7.9v5.3h7.9v-5.3zm12-8.4h-7.9v5.3h7.9v-5.3zm0 8.4h-7.9v5.3h7.9v-5.3zm4.1 5.3h7.9V69.9h-8l.1 13.7zm7.9-22.1h-8v5.3h7.9l.1-5.3zm10.8-26.6V9.6H64.8v8.1L49.2 2.5 17.7 34 3.9 47.8h6.8l6.3-6.3v38.2c0 9.9 8 17.9 17.9 17.9h29.8c9.9 0 17.8-8 17.9-17.9V41.5l6.5 6.3 7.1.3-13.7-13.2zm-4.8 44.7c0 7.2-5.9 13.1-13.1 13.1H34.9c-7.2 0-13.1-5.9-13.1-13.1v-43L49.2 9.2l15.6 15.1L77.7 37v42.6z" />
  </Svg>
);

export { MortgageCalculatorIcon };
