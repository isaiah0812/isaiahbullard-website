import React from 'react';
import styled from 'styled-components';

const MenuText = styled.h5`
  padding: 0px 6px;
  color: #FFFFFF;
  text-align: center;
  font-weight: normal;
  line-height: normal;
  font-size: 110%;

  &:hover {
    color: #29B3F1;
  }
`

export default ({name}) => {
  return (
    <MenuText>{name}</MenuText>
  );
}