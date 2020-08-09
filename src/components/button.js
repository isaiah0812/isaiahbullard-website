import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const StyledButton = styled(Button)`
  border-width: 7px;
  border-style: solid;
  border-radius: 16px;
  border-color: ${props => props.submit ? '#040B30' : (props.secondary ? '#040B30' : '#FFFFFF')};
  background-color: ${props => props.submit ? '#707070' : '#29B3F1'};
  text-align: center;
  font-size: 175%;
  padding: 0px 25px;
  color: #FFFFFF;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background-color: #FFFFFF;
    border-color: #29B3F1;
    color: #29B3F1;
  }

`

export default ({submit, secondary, text, href}) => {
  return (
    <StyledButton 
      type={submit ? 'submit' : 'button'} 
      submit={submit} 
      secondary={secondary} 
      href={submit ? undefined : href}
    >
      {text}
    </StyledButton>
  );
}