import React from 'react';
import styled from 'styled-components';

import logo from '../img/Logo.svg';

const Link = styled.a`
  display: block;
  margin: 3rem 30rem;
`;

const Logo = styled.img`
  width: 3.75rem;
`;

export default () => (
  <header>
    <Link href="/">
      <Logo src={logo} alt="mainLogo" />
    </Link>
  </header>
);
