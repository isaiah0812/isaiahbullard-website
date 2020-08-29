import React from 'react';
import { Container, Row, Tab, Nav } from 'react-bootstrap';

import { PlayerTab } from '../../../constants/styled-components'

/**
 * @todo make this a class component
 */
export default class SingleDivPlayer extends React.Component {

  render() {
    const {spotify, apple, bandcamp, soundcloud, textColor} = this.props;
    return (
      <Tab.Container defaultActiveKey="spotify">
        <Row>
          <Nav variant="pills" style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2%'}}>
            <Nav.Item style={{width: '25%'}}>
              <PlayerTab eventKey="spotify" color={textColor}>Spotify</PlayerTab>
            </Nav.Item>
            <Nav.Item style={{width: '25%'}}>
              <PlayerTab eventKey="apple" color={textColor}>Apple</PlayerTab>
            </Nav.Item>
            <Nav.Item style={{width: '25%'}}>
              <PlayerTab eventKey="bandcamp" color={textColor}>Bandcamp</PlayerTab>
            </Nav.Item>
            <Nav.Item style={{width: '25%'}}>
              <PlayerTab eventKey="soundcloud" color={textColor}>SoundCloud</PlayerTab>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Tab.Content style={{width: '100%', marginLeft: '2%', marginRight: '2%'}}>
            <Tab.Pane eventKey="spotify">
              <Container fluid style={{
                backgroundColor: '#1DB954',
                padding: '2%',
              }}>
                <iframe 
                  src={"https://open.spotify.com/embed/track/" + spotify} 
                  style={{
                    height: 80,
                    width: '100%',
                    border: 0,
                  }}
                  allowtransparency="true" 
                  allow="encrypted-media" 
                  title="Spotify"
                />
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="apple">
              <Container fluid style={{
                backgroundColor: '#FA57C1',
                padding: '2%',
              }}>
                <iframe 
                  allow="autoplay *; encrypted-media *;" 
                  style={{
                    width: '100%  ',
                    height: 250,
                    maxWidth: '660px', 
                    overflow: 'hidden', 
                    background: 'transparent',
                    border: 0,
                  }} 
                  src={"https://embed.music.apple.com/us/album/" + apple}
                  title="Apple Music"
                />
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="bandcamp">
              <Container fluid style={{
                backgroundColor: '#629AA9',
                padding: '2%',
              }}>
                <iframe 
                  style={{
                    border: 0, 
                    width: '100%', 
                    height: '120px',
                  }} 
                  src={"https://bandcamp.com/EmbeddedPlayer/track=" + bandcamp + "/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" }
                  seamless 
                  title="Bandcamp"
                />
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="soundcloud">
              <Container fluid style={{
                backgroundColor: '#FE5000',
                padding: '2%',
              }}>
                <iframe 
                  style={{
                    width: '100%',
                    height: 166,
                    border: 0,
                  }}
                  scrolling="no" 
                  allow="autoplay" 
                  src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + soundcloud + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"} 
                  title="SoundCloud"
                />
              </Container>
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Tab.Container>
    )

  }
}