/**
 *
 * LayoutBox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, mixins } from '../../styles';

const HeaderStyled = styled.header`
  ${mixins.flexRight};
  background: ${props =>
    props.background ? props.background : theme.colors.cream};
  height: ${props => (props.background ? props.background : theme.headerHeigh)};
  border: solid 5px ${theme.colors.green};
`;

function Header({ children, ...rest }) {
  return <HeaderStyled {...rest}>{children}</HeaderStyled>;
}

Header.propTypes = {
  children: PropTypes.object,
  props: PropTypes.array,
};

export default Header;
