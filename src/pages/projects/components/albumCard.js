import React from 'react';
import styled from 'styled-components';
import { white } from '../../../constants/colors';

const AlbumButton = styled.button`
  
  width: 115px;
  height: 115px;
  background: url(${props => props.cover}) no-repeat center;
  background-size: 100%;
  border: 0px;
  padding: 0px;
  margin: 1px;
`

const FadeHover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.0);
  color: transparent; 
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: ${white};
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`

const AlbumTitle = styled.h3`
  width: 100%;
  font-weight: normal;
  font-size: 120%;
`

export default class AlbumCard extends React.Component {
  render() {
    const { title, cover, onClick } = this.props;

    return (
      <AlbumButton cover={cover} onClick={onClick}>
        <FadeHover>
          <AlbumTitle>{title}</AlbumTitle>
        </FadeHover>
      </AlbumButton>
    );
  }
}