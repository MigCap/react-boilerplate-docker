/**
 *
 * GridContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../styles';

const GridContainerStyled = styled.main`
  display: grid;
  grid-template-rows: ${props => (props.rows ? props.rows : 'auto')};
  grid-template-columns: 100%;
  min-height: ${props => (props.minHeight ? props.minHeight : '100vh')};
  border: solid 5px ${theme.colors.darkBlue};
`;

function GridContainer({ children, ...rest }) {
  return <GridContainerStyled {...rest}>{children}</GridContainerStyled>;
}

GridContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  props: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default GridContainer;
