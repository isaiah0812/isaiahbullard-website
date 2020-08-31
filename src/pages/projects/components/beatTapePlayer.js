import React from 'react';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { PlayerTab, PlayerSelector } from '../../../constants/styled-components';

export default class BeatTapePlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spotifyBgColor: '#1DB954',
      appleBgColor: 'transparent',
      bandcampBgColor: 'transparent',
      soundcloudBgColor: 'transparent',
    }
  }
  render() {
    return (
      <Tab.Container 
        defaultActiveKey="spotify"
        onSelect={(e) => {
          switch(e) {
            case 'spotify': this.setState({
              spotifyBgColor: '#1DB954',
              appleBgColor: 'transparent',
              bandcampBgColor: 'transparent',
              soundcloudBgColor: 'transparent',
            });
            break;
            case 'apple': this.setState({
              spotifyBgColor: 'transparent',
              appleBgColor: '#FA57C1',
              bandcampBgColor: 'transparent',
              soundcloudBgColor: 'transparent',
            });
            break;
            case 'bandcamp': this.setState({
              spotifyBgColor: 'transparent',
              appleBgColor: 'transparent',
              bandcampBgColor: '#629AA9',
              soundcloudBgColor: 'transparent',
            });
            break;
            case 'soundcloud': this.setState({
              spotifyBgColor: 'transparent',
              appleBgColor: 'transparent',
              bandcampBgColor: 'transparent',
              soundcloudBgColor: '#FE5000',
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
              <PlayerSelector album bg={this.state.spotifyBgColor}>
                <PlayerTab eventKey="spotify" color={this.state.spotifyBgColor === 'transparent' ? '#000000' : '#FFFFFF'}>Spotify</PlayerTab>
              </PlayerSelector>
              <PlayerSelector album bg={this.state.appleBgColor}>
                <PlayerTab eventKey="apple" color={this.state.appleBgColor === 'transparent' ? '#000000' : '#FFFFFF'}>Apple Music</PlayerTab>
              </PlayerSelector>
              <PlayerSelector album bg={this.state.bandcampBgColor}>
                <PlayerTab eventKey="bandcamp" color={this.state.bandcampBgColor === 'transparent' ? '#000000' : '#FFFFFF'}>Bandcamp</PlayerTab>
              </PlayerSelector>
              <PlayerSelector album bg={this.state.soundcloudBgColor}>
                <PlayerTab eventKey="soundcloud" color={this.state.soundcloudBgColor === 'transparent' ? '#000000' : '#FFFFFF'}>SoundCloud</PlayerTab>
              </PlayerSelector>
            </Nav>
          </Col>
          <Col sm={9} style={{padding: 0}}>
            <Tab.Content>
              <Tab.Pane eventKey="spotify" style={{
                backgroundColor: '#1DB954',
                padding: '2%',
              }}>
                <iframe 
                  title="Spotify" 
                  src="https://open.spotify.com/embed/album/3vbvMwip1WpplVodTHHOrb" 
                  style={{
                    width: '100%',
                    height: 420,
                    border: 0,
                  }}
                  allowtransparency="true" 
                  allow="encrypted-media" 
                />
              </Tab.Pane>
              <Tab.Pane eventKey="apple" style={{
                backgroundColor: '#FA57C1',
                padding: '2%',
              }}>
                <iframe 
                  title="Apple Music" 
                  src="https://embed.music.apple.com/us/album/maestro/1422921065?app=music&amp;itsct=music_box&amp;itscg=30200&amp;ls=1" 
                  height="450px" 
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" 
                  allow="autoplay *; encrypted-media *;" 
                  style={{
                    width: '100%', 
                    height: 420,
                    maxWidth: '660px', 
                    overflow: 'hidden', 
                    borderRadius: '10px', 
                    background: 'transparent',
                    border: 0
                  }} 
                />
              </Tab.Pane>
              <Tab.Pane eventKey="bandcamp" style={{
                backgroundColor: '#629AA9',
                padding: '2%',
              }}>
                <iframe 
                  title="Bandcamp" 
                  style={{
                    border: 0, 
                    width: '100%', 
                    height: 420,
                  }} 
                  src="https://bandcamp.com/EmbeddedPlayer/album=2239082049/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" 
                  seamless 
                />
              </Tab.Pane>
              <Tab.Pane eventKey="soundcloud" style={{
                backgroundColor: '#FE5000',
                padding: '2%',
              }}>
                <iframe 
                  title="SoundCloud" 
                  style={{
                    width: '100%',
                    height: 420,
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
    );
  }
}