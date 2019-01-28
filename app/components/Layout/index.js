/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { theme } from '../../styles';

const FlexStyled = styled(Flex)`
  background-color: ${theme.colors.blueGrey};
  text-align: center;
`;

function Layout({ children }) {
  return (
    <FlexStyled p={2} justifyContent="center">
      {children}
    </FlexStyled>
  );
}

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;
