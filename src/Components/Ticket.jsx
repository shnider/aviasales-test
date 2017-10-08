import React from 'react';
import styled from 'styled-components';

import carrierLogo from '../img/Logo-carrier.png';
import plane from '../img/Plane.svg';

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

  &:active {
    box-shadow: 0 1px 0 #D64D08, 0 2px 1px rgba(0, 0, 0, 0.1),
     2px 2px 1px rgba(0, 0, 0, 0.25) inset;
    background-color: #E16101;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: space-between;
`;

const Origin = styled.div`
  padding: 1.625rem 0 0 2rem;
  text-align: left;

`;

const Destination = styled.div`
padding: 1.625rem 2rem 0 0;
  text-align: right;
`;


const Time = styled.time`
  display: block;
  font-family: "Open Sans";
  font-size: 2rem;
  line-height: 1.625rem;
  color: #4A4A4A;
`;

const City = styled.p`
  margin: 0.5rem 0 0 0;
  font-size: 0.75rem;
  line-height: 0.875rem;
  color: #4A4A4A;
`;

const Date = styled.p`
  margin: 0;
  font-family: "Open Sans";
  font-size: 0.75rem;
  line-height: 1rem;
  color: #8B9497;
`;

const Path = styled.div`
  position: relative;
  padding-top: 1.625rem;
  text-align: center;
`;

const Stops = styled.p`
  display: block;
  position: relative;
  right: 0.7rem;
  margin: 0;
  font-size: 0.625rem;
  line-height: 0.75rem;
  color: #8B9497;
  text-transform: uppercase;
`;

const Line = styled.div`
  position: absolute;
  top: 2.75rem;
  right: 0.1rem;
  width: 6rem;
  height: 1px;
  background: #D2D5D6;

  &:after {
    content: '';
    position: absolute;
    right: -0.9rem;
    top: -0.4rem;
    display: block;
    width: 0.8175rem;
    height: 0.8175rem;
    background-image: url(${plane});
  }
`;

export default ({ price, destination, origin, stops }) =>
  (<Ticket>
    <Buy>
      <Logo src={carrierLogo} alt="Авикомпания" />
      <Button>Купить <br />за {price} Р</Button>
    </Buy>
    <Wrapper>
      <Origin>
        <Time>09:00</Time>
        <City>VVO, Владивосток</City>
        <Date>9 окт 2016, Пт</Date>
      </Origin>
      <Path>
        <Stops>2 пересадки</Stops>
        <Line />
      </Path>
      <Destination>
        <Time>12:15</Time>
        <City>Тель-Авив, TLV</City>
        <Date>9 окт 2016, Пт</Date>
      </Destination>
    </Wrapper>
  </Ticket>);
