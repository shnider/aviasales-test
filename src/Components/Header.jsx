import React from 'react';
import styled from 'styled-components';

import logo from '../img/Logo.svg';

const Logo = styled.img`
  width: 3.75rem;
  padding: 3rem 30rem;
`;


export default () => (
  <header>
    <Logo src={logo} alt="mainLogo" />
  </header>
);
