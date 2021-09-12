/**
 * @author Isaiah Bullard
 */
import React from 'react';
import styled from 'styled-components';
import { default as RBButton } from 'react-bootstrap/Button';

import { darkBlue, lightBlue, lightGray, silver, white, red } from '../constants/colors'

/**
 * @constant
 * @type {import('styled-components').StyledComponent}
 * @name StyledButton
 * @example <StyledButton type="submit" secondary="true" href="http://www.example.com">Button Text</StyledButton>
 */
const StyledButton = styled(RBButton)`
  border-width: 7px;
  border-style: solid;
  border-radius: ${props => props.circle ? '50%' : '16px'};
  border-color: ${props => props.trash ? red : (props.muted) ? silver : (props.type === "submit" ? darkBlue : (props.secondary ? darkBlue : white))};
  background-color: ${props => props.trash ? red : (props.muted ? lightGray : (props.type === "submit" ? silver : lightBlue))};
  text-align: center;
  font-size: ${props => props.fontSize ? props.fontSize : "1.5em"};
  color: ${props => props.trash ? white : (props.muted ? silver : white)};
  padding: 0.5%;
  width: ${props => props.width ? props.width : "150px"};
  height: ${props => props.circle ? props.width : (props.height ? props.height: 'auto')};
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${props => props.muted ? lightGray : white};
    border-color: ${props => props.trash ? red : (props.muted ? silver : lightBlue)};
    color: ${props => props.trash ? red : (props.muted ? silver : lightBlue)};
  }

  @media (max-width: 740px) {
    font-size: 125%;
    width: ${props => props.width ? props.width : "120px"};
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
      id,
      submit, 
      secondary, 
      text, 
      href,
      fontSize,
      width,
      height,
      onClick,
      muted,
      trash,
      circle
    } = this.props;

    return (
      <StyledButton
        id={id}
        style={{...(this.props.style)}}
        type={submit ? 'submit' : 'button'} // Has to be strings in order to get rid of the warnings in Chrome
        secondary={secondary}
        href={href}
        fontSize={fontSize}
        width={width}
        height={height}
        onClick={onClick}
        muted={muted}
        trash={trash}
        circle={circle}
      >
        {text}
      </StyledButton>
    );
  }
}