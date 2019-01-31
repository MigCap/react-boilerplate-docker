/**
 *
 * MainSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../styles';

const SectionStyled = styled.main`
  background: ${props =>
    props.background ? props.background : theme.colors.cream};
  height: ${props => (props.height ? props.height : 'auto')};
  border: solid 5px ${theme.colors.blueGrey};
`;

function Section({ children, ...rest }) {
  return <SectionStyled {...rest}>{children}</SectionStyled>;
}

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  props: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Section;
