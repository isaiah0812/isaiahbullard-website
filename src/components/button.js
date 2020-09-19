/**
 * @author Isaiah Bullard
 */
import React from 'react';
import styled from 'styled-components';
import { default as RBButton } from 'react-bootstrap/Button';

import { darkBlue, lightBlue, silver, white } from '../constants/colors'

/**
 * @constant
 * @type {import('styled-components').StyledComponent}
 * @name StyledButton
 * @example <StyledButton type="submit" secondary="true" href="http://www.example.com">Button Text</StyledButton>
 */
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

/**
 * The common Button object used throughout the project.
 * @name Button
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <Button submit secondary href="https://www.example.com" />
 */
export default class Button extends React.Component {
  /**
   * @name render
   * @returns {React.Component}
   */
  render() {
    /**
     * @since 1.0.0
     */
    const { 
      submit, 
      secondary, 
      text, 
      href 
    } = this.props;
    return (
      <StyledButton 
        type={submit ? 'submit' : 'button'} // Has to be strings in order to get rid of the warnings in Chrome
        secondary={secondary}
        href={href}
      >
        {text}
      </StyledButton>
    );
  }
}