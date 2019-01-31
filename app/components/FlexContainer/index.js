/**
 *
 * Layout_3_9
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins, media } from '../../styles';

const FlexContainerStyled = styled.main`
  display: flex;
  justify-content: flex-start;
  background: ${props =>
    props.background ? props.background : theme.colors.cream};
  height: ${props => (props.height ? props.height : 'auto')};
  border: solid 5px ${theme.colors.pink};
`;

function FlexContainer({ children, ...rest }) {
  return <FlexContainerStyled {...rest}>{children}</FlexContainerStyled>;
}

FlexContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  props: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default FlexContainer;
