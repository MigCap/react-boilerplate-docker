/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Fragment } from 'react';

import H1 from 'components/H1';
import Layout from 'components/Layout';
import LayoutBox from 'components/LayoutBox';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <Layout>
          <LayoutBox>
            <H1>
              <FormattedMessage {...messages.textLeft} />
            </H1>
          </LayoutBox>
          <LayoutBox>
            <H1>
              <FormattedMessage {...messages.textRight} />
            </H1>
          </LayoutBox>
        </Layout>
      </Fragment>
    );
  }
}
