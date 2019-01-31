/**
 *
 * LayoutExamples
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import GridContainer from 'components/GridContainer';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
// import Section from 'components/Section';
// import FlexContainer from 'components/FlexContainer';
// import FlexChild from 'components/FlexChild';

import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLayoutExamples from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { theme, media } from '../../styles';

const LayoutWrapper = styled.div`
  display: flex;
  margin: auto;
  padding: 5rem 5vw 2rem;
  min-height: 100vh;
`;

const GridContainerCustom = styled(GridContainer)`
  grid-template-rows: auto 1fr 1fr auto auto;
  grid-template-columns: auto 1fr 1fr 1fr 0.5fr;
  grid-gap: 1rem;
  width: 60vw;
  max-width: 90vw;
  margin: auto;
  border: none;
  font-family: ${theme.fonts.Calibre};
  transform: rotate(-45deg);
  ${media.tablet`transform: none;`};
`;

const Title = styled.h1`
  grid-column: 1 / 4;
  text-align: right;
  font-size: 4.5rem;
  text-transform: uppercase;
  justify-content: end;
  align-self: end;
  margin-bottom: 0;
  padding: 0;
  color: ${theme.colors.darkNavy};
  span {
    margin-bottom: 0;
    padding: 0;
  }
`;

const TitleHorizontal = styled.h1`
  grid-column: 3 / 4;
  grid-row: 2 / 5;
  font-size: 2.5rem;
  writing-mode: vertical-rl;
  color: orangered;
  justify-content: end;
  margin-top: -10px;
  margin-right: -10px;
  padding: 0;
  span {
    margin-bottom: 0;
    padding: 0;
  }
`;

const References = styled.div`
  grid-column: 1 / 3;
  grid-row: 4 / span 2;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  align-self: end;
  color: ${theme.colors.darkNavy};
  p {
    border-bottom: solid 5px ${theme.colors.darkNavy};
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    li {
      padding-bottom: 5px;
      border-bottom: solid 5px ${theme.colors.darkNavy};
    }
  }
`;

const RedLine = styled.b`
  grid-column: 3 / 6;
  grid-row: 5;
  align-self: start;
  justify-content: end;
  border-bottom: 35px solid orangered;
`;

const NavMenu = styled.div`
  border-top: 5px solid ${theme.colors.darkNavy};
  border-bottom: 5px solid ${theme.colors.darkNavy};
  font-weight: 700;
  grid-column: 4 / 6;
  grid-row: 3;
  align-self: end;
  ul {
    list-style: none;
    padding: 0;
    margin: 2px 0 3px 0;
    li {
      padding: 0;
      a {
        text-decoration: none;
        color: ${theme.colors.darkNavy};
        &:hover {
          color: orangered;
        }
      }
    }
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class LayoutExamples extends React.Component {
  render() {
    return (
      <LayoutWrapper>
        <Helmet>
          <title>LayoutExamples</title>
          <meta name="description" content="Description of LayoutExamples" />
        </Helmet>
        <GridContainerCustom>
          <Title>
            <FormattedMessage {...messages.mockText} />
          </Title>
          <TitleHorizontal>IMPLEMENTING NEW DESIGNS</TitleHorizontal>
          <References>
            <p style={{ margin: '0', padding: '0' }}>References:</p>
            <ul>
              <li>
                <FormattedMessage {...messages.writingMode} />
              </li>
              <li>
                <FormattedMessage {...messages.writingMode} />
              </li>
              <li>
                <FormattedMessage {...messages.writingMode} />
              </li>
              <li>
                <FormattedMessage {...messages.writingMode} />
              </li>
              <li>
                <FormattedMessage {...messages.writingMode} />
              </li>
            </ul>
          </References>
          <RedLine />
          <NavMenu>
            <ul>
              <li>
                <a href="/">
                  <FormattedMessage {...messages.backHome} />
                </a>
              </li>
              <li>
                <a href="/layouts">
                  <FormattedMessage {...messages.layouts} />
                </a>
              </li>
            </ul>
          </NavMenu>
        </GridContainerCustom>
      </LayoutWrapper>
    );
  }
}

LayoutExamples.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  layoutExamples: makeSelectLayoutExamples(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'layoutExamples', reducer });
const withSaga = injectSaga({ key: 'layoutExamples', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LayoutExamples);
