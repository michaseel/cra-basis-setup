import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../../constants/themes/defaultTheme';

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => (props.primary ? props.theme.colors.primary : props.theme.colors.default)};
`;

H1.defaultProps = {
  theme: defaultTheme,
};

const Headline = props => <H1 {...props} />;

Headline.propTypes = {
  /** the headline text */
  children: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  headlines: PropTypes.arrayOf(PropTypes.string),
};

Headline.defaultProps = {
  /** the headline text */
  primary: false,
};

export default Headline;
