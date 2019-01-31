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
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';
import GridContainer from 'components/GridContainer';
import Header from 'components/Header';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import Section from 'components/Section';
import FlexContainer from 'components/FlexContainer';
import FlexChild from 'components/FlexChild';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { theme } from '../../styles';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <GridContainer rows={`${theme.headerHeigh} ${theme.mainHeigh} ${theme.footerHeigh}`}>
          <Header>
            <NavBar />
          </Header>
          <Section>
            <FlexContainer height="100%">
              <FlexChild width="80%">
                <H1>
                  <FormattedMessage {...messages.columnLeft} />
                </H1>
              </FlexChild>
              <FlexChild width="20%">
                <H1>
                  <FormattedMessage {...messages.columnRight} />
                </H1>
              </FlexChild>
            </FlexContainer>
          </Section>
          <Footer>
            <H1>
              <FormattedMessage {...messages.footer} />
            </H1>
          </Footer>
        </GridContainer>
      </Fragment>
    );
  }
}
