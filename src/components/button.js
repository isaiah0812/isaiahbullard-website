import React from 'react';
import styled from 'styled-components';
import { Button as RBButton } from 'react-bootstrap';
import { darkBlue, lightBlue, silver, white } from '../constants/colors'

const StyledButton = styled(RBButton)`
  border-width: 7px;
  border-style: solid;
  border-radius: 16px;
  border-color: ${props => props.type === "submit" ? darkBlue : (props.secondary === 'true' ? darkBlue : white)};
  background-color: ${props => props.type === "submit" ? silver : lightBlue};
  text-align: center;
  font-size: 150%;
  color: ${white};
  padding: 0%;
  width: 150px;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${white};
    border-color: ${lightBlue};
    color: ${lightBlue};
  }

  @media (max-width: 740px) {
    font-size: 125%;
    width: 120px;
  }

`

export default class Button extends React.Component {
  render() {
    const { submit, secondary, text, href } = this.props;
    return (
      <StyledButton 
        type={submit ? 'submit' : 'button'} 
        secondary={secondary} 
        href={href}
      >
        {text}
      </StyledButton>
    );
  }
}