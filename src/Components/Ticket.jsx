import React from 'react';
import styled from 'styled-components';

import carrierLogo from '../img/Logo-carrier.png';

const Ticket = styled.section`
  display: flex;
  background-color: #FFF;
  box-shadow: 0px 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
  margin: 0 0 1rem 0;
`;

const Buy = styled.div`
  padding: 1.625rem 1.25rem;
  border-right: 1px solid #ECEFF1;
  text-align: center;
`;

const Logo = styled.img`
  padding-bottom: 1.25rem;
  width: 7.5rem;
  height: 2.25rem;
`;

const Button = styled.button`
  display: block;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 0.4rem 2.375rem 0.75rem 2.375rem;
  background-color: #FF6D00;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.1);
  font-family: "Roboto";
  font-weight: 500;
  line-height: 1.125rem;
  color: #fff;
  transition: background-color 0.15s;

  &:hover {
    background-color: #FF8124;
  }
`;

export default ({ price, destination, origin, stops }) =>
  (<Ticket>
    <Buy>
      <Logo src={carrierLogo} alt="Авикомпания" />
      <Button>Купить <br />за {price} Р</Button>
    </Buy>
  </Ticket>);
