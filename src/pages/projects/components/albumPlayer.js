import React from 'react';
import { Row, Col, Tab, Nav, Container } from 'react-bootstrap';
import { applePink, bandcampBlue, black, soundcloudOrange, spotifyGreen, white } from '../../../constants/colors';
import { PlayerTab, PlayerSelector, SongLink } from '../../../constants/styled-components';

export default class AlbumPlayer extends React.Component {
  constructor() {
    super();

    this.state = {
      spotifyBgColor: spotifyGreen,
      appleBgColor: 'transparent',
      bandcampBgColor: 'transparent',
      soundcloudBgColor: 'transparent',
    }
  }
  render() {
    return (
      <Container fluid style={{padding: 0}}>
        <Tab.Container 
          defaultActiveKey="spotify"
          onSelect={(e) => {
            switch(e) {
              case 'spotify': this.setState({
                spotifyBgColor: spotifyGreen,
                appleBgColor: 'transparent',
                bandcampBgColor: 'transparent',
                soundcloudBgColor: 'transparent',
              });
              break;
              case 'apple': this.setState({
                spotifyBgColor: 'transparent',
                appleBgColor: applePink,
                bandcampBgColor: 'transparent',
                soundcloudBgColor: 'transparent',
              });
              break;
              case 'bandcamp': this.setState({
                spotifyBgColor: 'transparent',
                appleBgColor: 'transparent',
                bandcampBgColor: bandcampBlue,
                soundcloudBgColor: 'transparent',
              });
              break;
              case 'soundcloud': this.setState({
                spotifyBgColor: 'transparent',
                appleBgColor: 'transparent',
                bandcampBgColor: 'transparent',
                soundcloudBgColor: soundcloudOrange,
              });
              break;
              default: this.setState({
                spotifyBgColor: 'transparent',
                appleBgColor: 'transparent',
                bandcampBgColor: 'transparent',
                soundcloudBgColor: 'transparent',
              })
            }
          }} 
        >
          <Row>
            <Col sm={3} style={{padding: 0}}>
              <Nav className="flex-column">
                <PlayerSelector album={1} bg={this.state.spotifyBgColor}>
                  <PlayerTab eventKey="spotify" color={this.state.spotifyBgColor === 'transparent' ? black : white}>Spotify</PlayerTab>
                </PlayerSelector>
                <PlayerSelector album={1} bg={this.state.appleBgColor}>
                  <PlayerTab eventKey="apple" color={this.state.appleBgColor === 'transparent' ? black : white}>Apple Music</PlayerTab>
                </PlayerSelector>
                <PlayerSelector album={1} bg={this.state.bandcampBgColor}>
                  <PlayerTab eventKey="bandcamp" color={this.state.bandcampBgColor === 'transparent' ? black : white}>Bandcamp</PlayerTab>
                </PlayerSelector>
                <PlayerSelector album={1} bg={this.state.soundcloudBgColor}>
                  <PlayerTab eventKey="soundcloud" color={this.state.soundcloudBgColor === 'transparent' ? black : white}>SoundCloud</PlayerTab>
                </PlayerSelector>
              </Nav>
            </Col>
            <Col sm={9} style={{padding: 0}}>
              <Tab.Content>
                <Tab.Pane eventKey="spotify" style={{
                  backgroundColor: spotifyGreen,
                  padding: '2%',
                  height: 420,
                }}>
                  <iframe 
                    title="Spotify" 
                    src="https://open.spotify.com/embed/album/3vbvMwip1WpplVodTHHOrb" 
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 0,
                    }}
                    allowtransparency="true" 
                    allow="encrypted-media" 
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="apple" style={{
                  backgroundColor: applePink,
                  padding: '2%',
                  height: 420,
                }}>
                  <iframe 
                    title="Apple Music" 
                    src="https://embed.music.apple.com/us/album/maestro/1422921065?app=music&amp;itsct=music_box&amp;itscg=30200&amp;ls=1" 
                    allow="autoplay *; encrypted-media *;" 
                    style={{
                      width: '100%', 
                      height: '100%',
                      maxWidth: '660px', 
                      overflow: 'hidden', 
                      borderRadius: '10px', 
                      background: 'transparent',
                      border: 0
                    }} 
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="bandcamp" style={{
                  backgroundColor: bandcampBlue,
                  padding: '2%',
                  height: 420,
                }}>
                  <iframe 
                    title="Bandcamp" 
                    style={{
                      border: 0, 
                      width: '100%', 
                      height: '100%',
                    }} 
                    src="https://bandcamp.com/EmbeddedPlayer/album=2239082049/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" 
                    seamless 
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="soundcloud" style={{
                  backgroundColor: soundcloudOrange,
                  padding: '2%',
                  height: 420,
                }}>
                  <iframe 
                    title="SoundCloud" 
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 0,
                    }}
                    scrolling="no" 
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/580055703&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" 
                  />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <SongLink href={"https://album.link/s/3vbvMwip1WpplVodTHHOrb"} color={black} target="_blank">Other Sources</SongLink>
      </Container>
    );
  }
}