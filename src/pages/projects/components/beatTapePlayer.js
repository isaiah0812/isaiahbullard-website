import React from 'react';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { PlayerTab, PlayerSelector } from '../../../constants/styled-components';

export default class BeatTapePlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bandcampBgColor: '#629AA9',
      soundcloudBgColor: 'transparent',
      youtubeBgColor: 'transparent'
    }
  }
  render() {
    return (
      <Tab.Container 
        defaultActiveKey="bandcamp"
        onSelect={(e) => {
          switch(e) {
            case 'bandcamp': this.setState({
              bandcampBgColor: '#629AA9',
              soundcloudBgColor: 'transparent',
              youtubeBgColor: 'transparent',
            });
            break;
            case 'soundcloud': this.setState({
              bandcampBgColor: 'transparent',
              soundcloudBgColor: '#FE5000',
              youtubeBgColor: 'transparent',
            });
            break;
            case 'youtube': this.setState({
              bandcampBgColor: 'transparent',
              soundcloudBgColor: 'transparent',
              youtubeBgColor: '#FF0000',
            });
            break;
            default: this.setState({
              bandcampBgColor: 'transparent',
              soundcloudBgColor: 'transparent',
              youtubeBgColor: 'transparent',
            })
          }
        }} 
      >
        <Row>
          <Col sm={3} style={{padding: 0}}>
            <Nav className="flex-column">
              <PlayerSelector album bg={this.state.bandcampBgColor}>
                <PlayerTab eventKey="bandcamp" color={this.state.bandcampBgColor === 'transparent' ? '#000000' : '#FFFFFF'}>Bandcamp</PlayerTab>
              </PlayerSelector>
              <PlayerSelector album bg={this.state.soundcloudBgColor}>
                <PlayerTab eventKey="soundcloud" color={this.state.soundcloudBgColor === 'transparent' ? '#000000' : '#FFFFFF'}>SoundCloud</PlayerTab>
              </PlayerSelector>
              <PlayerSelector album bg={this.state.youtubeBgColor}>
                <PlayerTab eventKey="youtube" color={this.state.youtubeBgColor === 'transparent' ? '#000000' : '#FFFFFF'}>YouTube</PlayerTab>
              </PlayerSelector>
            </Nav>
          </Col>
          <Col sm={9} style={{padding: 0}}>
            <Tab.Content>
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
              <Tab.Pane eventKey="youtube" style={{
                backgroundColor: '#FF0000',
                padding: '2%',
              }}>
                <iframe 
                  title="YouTube"
                  style={{
                    width: '100%',
                    height: 420,
                    border: 0,
                  }}
                  src="https://www.youtube.com/embed/videoseries?list=PLFzSU3ciTsEdcdV4b1BQs2YlmdVb8g39h" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}