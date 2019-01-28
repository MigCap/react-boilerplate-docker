/**
 *
 * LayoutBox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '@rebass/grid';
import { theme } from '../../styles';

const LayoutBoxStyled = styled(Box)`
  background: ${theme.colors.orange};
  border: solid 1px ${theme.colors.green};
`;

function LayoutBox({ children }) {
  return (
    <LayoutBoxStyled justifySelf="center" width={1}>
      {children}
    </LayoutBoxStyled>
  );
}

LayoutBox.propTypes = {
  children: PropTypes.array,
};

export default LayoutBox;
