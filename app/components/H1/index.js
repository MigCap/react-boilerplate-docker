/**
 *
 * H1
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../styles';

const H1Styled = styled.h1`
  margin: 0;
  color: ${theme.colors.grey};
`;

function H1({ children }) {
  return <H1Styled>{children}</H1Styled>;
}

H1.propTypes = {
  children: PropTypes.object,
};

export default H1;
