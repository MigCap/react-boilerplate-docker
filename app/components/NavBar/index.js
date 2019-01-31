/**
 *
 * NavBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import HeaderLink from './HeaderLink';

const NavBarStyled = styled.div`
  text-align: center;
`;

function NavBar() {
  return (
    <NavBarStyled>
      <HeaderLink to="/">
        <FormattedMessage {...messages.home} />
      </HeaderLink>
      <HeaderLink to="/layouts">
        <FormattedMessage {...messages.layouts} />
      </HeaderLink>
    </NavBarStyled>
  );
}

NavBar.propTypes = {};

export default NavBar;
