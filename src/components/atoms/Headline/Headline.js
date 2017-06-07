import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Headline = ({ children }) =>
  <H1>
    {children}

  </H1>;

export default Headline;
