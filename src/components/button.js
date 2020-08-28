import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const StyledButton = styled(Button)`
  border-width: 7px;
  border-style: solid;
  border-radius: 16px;
  border-color: ${props => props.type === "submit" ? '#040B30' : (props.secondary ? '#040B30' : '#FFFFFF')};
  background-color: ${props => props.type === "submit" ? '#707070' : '#29B3F1'};
  text-align: center;
  font-size: 150%;
  color: #FFFFFF;
  padding: 0%;
  width: 150px;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background-color: #FFFFFF;
    border-color: #29B3F1;
    color: #29B3F1;
  }

  @media (max-width: 740px) {
    font-size: 125%;
    width: 120px;
  }

`

/**
 * @todo make this a class component
 */
export default ({submit, secondary, text, href}) => {
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