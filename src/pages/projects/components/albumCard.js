import React from 'react';
import styled from 'styled-components';

import { white } from '../../../constants/colors';

/**
 * The card containing the album cover art.
 * @constant
 * @name AlbumButton
 * @type {import('styled-components').StyledComponent}
 * @example <AlbumButton cover="cover.jpg" onClick={this.onClick(e)}>...</AlbumButton>
 */
const AlbumButton = styled.button`
  width: 115px;
  height: 115px;
  background: url(${props => props.cover}) no-repeat center;
  background-size: 100%;
  border: 0px;
  padding: 0px;
  margin: 1px;
`

/**
 * The fade effect over an AlbumButton
 * @constant
 * @name FadeHover
 * @type {import('styled-components').StyledComponent}
 * @example <FadeHover>...</FadeHover>
 */
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

/**
 * Text used for the title within the AlbumCard
 * @constant
 * @name AlbumTitle
 * @type {import('styled-components').StyledComponent}
 * @example <AlbumTitle>Title</AlbumTitle>
 */
const AlbumTitle = styled.h3`
  width: 100%;
  font-weight: normal;
  font-size: 120%;
`

/**
 * Card that leads to a project page or a single's information
 * @name AlbumCard
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <AlbumCard title="Title" cover="cover.jpg" onClick={this.onClick(e)} />
 */
export default class AlbumCard extends React.Component {
  render() {
    const { 
      title, 
      cover, 
      onClick 
    } = this.props;

    return (
      <AlbumButton cover={cover} onClick={onClick}>
        <FadeHover>
          <AlbumTitle>{title}</AlbumTitle>
        </FadeHover>
      </AlbumButton>
    );
  }
}