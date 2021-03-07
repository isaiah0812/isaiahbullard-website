import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

import { darkBlue, silver, youtubeRed } from '../../../constants/colors';

const YouTubeVideo = styled(Container)`
  width: 60%;
  height: 492px;
  background-color: ${youtubeRed};
  padding: 0;

  @media (max-width: 740px) {
    width: 80%;
    height: 300px
  }
`

export default class YoutubeCard extends React.Component {
  render() {
    const {
      title,
      youtube
    } = this.props;

    return (
      <div style={{padding: '1%'}}>
        <h3 style={{color: darkBlue, textAlign: 'center', fontSize: '4.2vh'}}>{title}</h3>
        <YouTubeVideo fluid>
          <iframe id="player" title={title} type="text/html" allowFullScreen style={{width: '100.5%', height: '100.2%', border: 0}} src={`https://www.youtube.com/embed/${youtube}`} />
        </YouTubeVideo>
        <hr style={{width: '3%', borderWidth: 3, borderColor: silver}} />
      </div>
    );
  }
}