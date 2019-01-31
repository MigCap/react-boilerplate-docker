/**
 *
 * FlexChild
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins, media } from '../../styles';

const FlexChildStyled = styled.main`
  display: flex;
  justify-content: flex-start;
  background: ${props =>
    props.background ? props.background : theme.colors.white};
  height: ${props => (props.height ? props.height : 'auto')};
  width: ${props => (props.width ? props.width : '100%')};
  border: solid 5px ${theme.colors.blueGrey};
`;

function FlexChild({ children, ...rest }) {
  return <FlexChildStyled {...rest}>{children}</FlexChildStyled>;
}

FlexChild.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  props: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default FlexChild;
