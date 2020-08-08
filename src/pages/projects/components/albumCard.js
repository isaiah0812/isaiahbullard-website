import React from 'react';
import styled from 'styled-components';

const AlbumButton = styled.button`
  width: 20vh;
  height: 20vh;
  position: relative;
  background: url(${props => props.cover});
  background-size: 100%;
  border: 0px;
  padding: 0px;
  margin: 1%;
`

const FadeHover = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.0);
  color: transparent; 
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: #FFFFFF;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`

const AlbumTitle = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  font-weight: normal;
`

export default ({title, cover, onClick}) => {
    return (
      <AlbumButton cover={cover} onClick={onClick}>
        <FadeHover>
          <AlbumTitle>{title}</AlbumTitle>
        </FadeHover>
      </AlbumButton>
    );
}