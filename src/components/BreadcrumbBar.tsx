import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import custom from '../../native-base-theme/variables/commonColor';
import { padTowards } from '../utils';

export const BreadcrumbBar = ({
  breadcrumbs,
  onBreadcrumbPress = (location: string) => {}
}) => {
  const breadcrumbList = breadcrumbs.map(
    ({ title, isActive, location = '' }, i) => {
      return (
        <Text
          style={isActive ? styles.breadcrumbActive : styles.breadcrumbItem}
          onPress={() => !isActive && onBreadcrumbPress(location)}
          key={i}
        >
          {title} {isActive ? '' : ' > '}
        </Text>
      );
    }
  );

  return (
    <View style={styles.breadcrumbBarContainer}>
      <View style={styles.breadcrumbBar}>
        <Text style={styles.breadcrumbLabel}>You're here:</Text>
        {breadcrumbList}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  breadcrumbBarContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },

  breadcrumbBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: custom.grayLight,
    ...padTowards({ direction: 'all' })
  },

  breadcrumbLabel: { color: custom.gray, marginRight: 8 },
  breadcrumbItem: { color: custom.gray, marginRight: 4 },

  breadcrumbActive: {
    color: custom.brandSecondary,
    fontWeight: 'bold',
    marginTop: 2,
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderBottomColor: custom.brandSecondary
  }
});
