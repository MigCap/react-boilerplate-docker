/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins } from '../../styles';

const FooterStyled = styled.footer`
  ${mixins.flexCenter};
  background: ${props =>
    props.background ? props.background : theme.colors.white};
  border: solid 5px ${theme.colors.green};
  height: ${props => (props.height ? props.height : theme.footerHeigh)};
`;

function Footer({ children, ...rest }) {
  return <FooterStyled {...rest}>{children}</FooterStyled>;
}

Footer.propTypes = {
  children: PropTypes.object,
  background: PropTypes.string,
};

export default Footer;
