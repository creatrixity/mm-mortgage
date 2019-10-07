import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, H1, Form, Input, Item, Text } from 'native-base';

import { padTowards } from '../utils';
import custom from '../../native-base-theme/variables/commonColor';

export const FormField = ({
  label = 'How much money do you want to make?',
  type = 'default',
  value = '',
  handleChange
}: {
  label?: string;
  type: 'default' | 'number-pad';
  value?: any;
  handleChange: (e) => any;
}) => {
  return (
    <Fragment>
      <H1 style={styles.formFieldLabel}>{label}</H1>

      <Item style={styles.formField} regular>
        <View style={styles.formFieldAddon}>
          <Text style={styles.formFieldAddonText}>$</Text>
        </View>
        <Input
          style={styles.formFieldInput}
          onChange={(e: any) => {
            handleChange(e);
          }}
          placeholder=""
          value={value}
          keyboardType={type}
        />
      </Item>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  formField: { borderWidth: 0 },

  formFieldAddon: {
    backgroundColor: custom.grayLight,
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,

    ...padTowards({ direction: 'horizontal', size: 24 })
  },

  formFieldAddonText: { fontFamily: 'Lato_bold' },

  formFieldInput: {
    backgroundColor: custom.grayLighter,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    fontFamily: 'Lato_bold'
  },

  formFieldLabel: {
    marginBottom: 16,
    fontWeight: '100'
  }
});
