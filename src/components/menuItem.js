import React from 'react';
import styled from 'styled-components';

const MenuText = styled.h5`
  padding: 0px 6px;
  color: #FFFFFF;
  text-align: center;
  font-weight: normal;
  line-height: normal;
  font-size: 110%;
  transition: background-color 0.2s, border-color 0.2s, border-radius 0.2s, color 0.2s;

  &:hover {
    color: #29B3F1;
    background-color: #040B30;
    border: 10px;
    border-color: #FFFFFF;
    border-radius: 7px;
  }
`

export default class MenuItem extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <MenuText>{name}</MenuText>
    );
  }
}