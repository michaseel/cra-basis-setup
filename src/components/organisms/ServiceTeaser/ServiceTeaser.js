import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  color: red;
`;

const Headline = styled.h3`
  font-size: 20px;
`;

const ServiceTeaser = ({ href, image, title, children }) =>
  <Wrapper>
    <img src={image} alt="" />
    <Headline>{title}</Headline>
    <p>{children}</p>
  </Wrapper>;

ServiceTeaser.propTypes = {
  /** Documentation of this Prop */
  href: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  /** Documentation of that Prop */
  children: PropTypes.string,
};

export default ServiceTeaser;
