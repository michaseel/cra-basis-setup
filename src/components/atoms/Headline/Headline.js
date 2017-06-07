import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => (props.primary ? "red" : "gray")};
`;

const Headline = props => <H1 {...props} />;

Headline.propTypes = {
  /** the headline text */
  children: PropTypes.string.isRequired,
  primary: PropTypes.bool
};

Headline.defaultProps = {
  /** the headline text */
  primary: false
};

export default Headline;
