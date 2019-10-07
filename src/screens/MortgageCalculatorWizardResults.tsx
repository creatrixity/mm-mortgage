import React, { Fragment } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Content, List, ListItem, Body, Separator } from 'native-base';

import { padTowards } from '../utils';
import { BreadcrumbBar, FormField, WizardBar, WizardForm } from '../components';
import custom from '../../native-base-theme/variables/commonColor';

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

const results = [
  {
    figure: '100',
    title: 'Annual Number of Loans You Need to Close',
    desc: 'Just simple math.'
  },
  {
    figure: '70',
    title: 'Closed Referrals from Real Estate Agents',
    desc:
      'Assumes 70% of your total business comes from direct real estate agent referrals'
  },
  {
    figure: '5.83',
    title: 'Monthly Closed Refferals Required',
    desc: 'Annual loan volume (divided) by 12 Months'
  },
  {
    figure: '7.78',
    title: 'Deals You Need In-Escrow / Under Contract at All Times',
    desc: 'Assumes 25% fallout rate for appraisals, inspections, rate shoppers'
  },
  {
    figure: '15.56',
    title: 'Pre-Approvals Needed to Generate Live Deals',
    desc: 'Assumes 50% of pre-approved pipeline goes into escrow monthly'
  },
  {
    figure: '25.93',
    title: 'Apps Needed to Turn into Pre-Approvals',
    desc: 'Assumes 60% of Applications become Pre-Approvals'
  },
  {
    figure: '34.57',
    title: 'Monthly Introductions Needed to Reach Application Goal',
    desc: 'Assumes 75% of referred borrowers make  application'
  },
  {
    figure: '1.57',
    title: 'Conversations Per Day You Must Have with Borrowers',
    desc: 'Assumes 22 business days per month'
  },
  {
    figure: '15.71',
    title: 'Sales Calls Per Day Needed to Generate 2 Borrower Intructions',
    desc:
      'Assumes an average of 10% of calls will yield a referral. This rate is based upon blending cold calls with warm calls and current relationhip calls. Cold calls will be much lower'
  }
];

export const MortgageCalculatorWizardResults = ({ parentNavigation }) => {
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
      isActive: false
    },
    {
      title: 'See Results',
      isActive: true
    }
  ];

  return (
    <WizardForm
      title={'These are the figures you want'}
      breadcrumbs={breadcrumbs}
      hasSubmit={false}
      wizardSteps={steps}
      handleBreadcrumbPress={location => parentNavigation.push(location)}
    >
      <List
        style={{ flex: 1 }}
        dataArray={results}
        keyExtractor={(item, index) => index.toString()}
        renderRow={({ desc, figure, title }) => (
          <ListItem
            style={{ marginLeft: 0, paddingBottom: 0, borderBottomWidth: 0 }}
          >
            <Body>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    width: 64,
                    height: 64,
                    marginRight: 8,
                    borderWidth: 1,
                    borderColor: custom.grayLight,
                    borderRadius: 500,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Lato_bold',
                      color: custom.brandPrimary
                    }}
                  >
                    {figure}
                  </Text>
                </View>
                <View style={{ flexDirection: 'column', width: '100%' }}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text
                      style={{
                        fontFamily: 'Lato_bold',
                        color: custom.grayDarker,
                        marginBottom: 4,
                        fontSize: 12,
                        flexGrow: 0.8,
                        width: 0
                      }}
                    >
                      {title}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row'
                    }}
                  >
                    <Text
                      style={{
                        color: custom.gray,
                        fontSize: 12,
                        width: 0,
                        flexGrow: 0.7
                      }}
                    >
                      {desc}
                    </Text>
                  </View>
                </View>
              </View>
            </Body>
          </ListItem>
        )}
      />
    </WizardForm>
  );
};

const styles = StyleSheet.create({});
