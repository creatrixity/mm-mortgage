import React, { Fragment } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Content, List, ListItem, Body, Separator } from 'native-base';

import { padTowards } from '../utils';
import { BreadcrumbBar, FormField, WizardBar, WizardForm } from '../components';
import custom from '../../native-base-theme/variables/commonColor';

import { CalculatorContext } from './MortgageCalculatorWizard';

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

export const MortgageCalculatorWizardResults = ({}) => {
  return (
    <WizardForm
      title={'These are the figures you want'}
      hasSubmit={false}
      wizardSteps={[]}
      handleWizardStepPress={location => location}
    >
      <CalculatorContext.Consumer>
        {([{ expectedRevenue, BPSRequired, avgLoanSize }, dispatch]: any) => {
          const userResults = [
            {
              figure: `$${expectedRevenue}`,
              title: 'Targeted Income',
              desc: 'Annual income goal you set for yourself'
            },
            {
              figure: BPSRequired,
              title: 'Current BPS you make',
              desc: 'Average blended BPS paid'
            },
            {
              figure: `$${avgLoanSize}`,
              title: 'Your Average Loan Size',
              desc: 'Pull your OWN data '
            }
          ];

          return (
            <List
              style={{ flex: 1 }}
              dataArray={userResults.concat(results)}
              keyExtractor={({}, index) => index.toString()}
              renderRow={({ desc, figure, title }) => (
                <ListItem style={styles.listItem}>
                  <Body>
                    <View style={styles.resultContainer}>
                      <View style={styles.resultFigure}>
                        <Text style={styles.resultFigureText}>{figure}</Text>
                      </View>
                      <View style={styles.resultBody}>
                        <View style={styles.resultHeadingContainer}>
                          <Text style={styles.resultHeading}>{title}</Text>
                        </View>
                        <View style={styles.resultDescContainer}>
                          <Text style={styles.resultDesc}>{desc}</Text>
                        </View>
                      </View>
                    </View>
                  </Body>
                </ListItem>
              )}
            />
          );
        }}
      </CalculatorContext.Consumer>
    </WizardForm>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginLeft: 0,
    paddingBottom: 0,
    borderBottomWidth: 0
  },

  resultContainer: { flexDirection: 'row', alignItems: 'center' },

  resultHeadingContainer: { flex: 1, flexDirection: 'row' },

  resultFigure: {
    width: 64,
    height: 64,
    marginRight: 8,
    borderWidth: 1,
    borderColor: custom.grayLight,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center'
  },

  resultFigureText: {
    fontFamily: 'Lato_bold',
    color: custom.brandPrimary
  },

  resultBody: { flexDirection: 'column', width: '100%' },

  resultHeading: {
    fontFamily: 'Lato_bold',
    color: custom.grayDarker,
    marginBottom: 4,
    fontSize: 12,
    flexGrow: 0.8,
    width: 0
  },

  resultDescContainer: {
    flexDirection: 'row'
  },

  resultDesc: {
    color: custom.gray,
    fontSize: 12,
    width: 0,
    flexGrow: 0.7
  }
});
