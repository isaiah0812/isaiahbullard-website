import React from 'react';
import styled from 'styled-components';

import { 
  darkBlue, 
  lightBlue, 
  white 
} from '../constants/colors';

/**
 * The text appearing in the Menu Object
 * @constant
 * @name MenuText
 * @type {import('styled-components').StyledComponent}
 * @example <MenuText>Menu Item</MenuText>
 */
const MenuText = styled.h5`
  padding: 0px 6px;
  color: ${white};
  text-align: center;
  font-weight: normal;
  line-height: normal;
  font-size: 110%;
  transition: background-color 0.2s, border-color 0.2s, border-radius 0.2s, color 0.2s;

  &:hover {
    color: ${lightBlue};
    background-color: ${darkBlue};
    border: 10px;
    border-color: ${white};
    border-radius: 7px;
  }
`

/**
 * A link within the Menu Object
 * @name MenuItem
 * @author Isaiah Bullard
 * @version 1.0.0
 */
export default class MenuItem extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <MenuText>{name}</MenuText>
    );
  }
}