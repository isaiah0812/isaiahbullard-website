import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from '../../../components/button';

import { 
  bandcampBlue, 
  black, 
  soundcloudOrange, 
  white, 
  youtubeRed 
} from '../../../constants/colors';
import { 
  PlayerTab, 
  PlayerSelector 
} from '../../../constants/styled-components';

export default class BeatTapePlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bandcampBgColor: bandcampBlue,
      soundcloudBgColor: 'transparent',
      youtubeBgColor: 'transparent'
    }

    this.beatTape = this.props.beatTape;
  }
  render() {
    return (
      <Container fluid style={{padding: 0}}>
        <Tab.Container 
          defaultActiveKey="bandcamp"
          onSelect={(e) => {
            switch(e) {
              case 'bandcamp': this.setState({
                bandcampBgColor: bandcampBlue,
                soundcloudBgColor: 'transparent',
                youtubeBgColor: 'transparent',
              });
              break;
              case 'soundcloud': this.setState({
                bandcampBgColor: 'transparent',
                soundcloudBgColor: soundcloudOrange,
                youtubeBgColor: 'transparent',
              });
              break;
              case 'youtube': this.setState({
                bandcampBgColor: 'transparent',
                soundcloudBgColor: 'transparent',
                youtubeBgColor: youtubeRed,
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
                <PlayerSelector album={1} bg={this.state.bandcampBgColor}>
                  <PlayerTab eventKey="bandcamp" color={this.state.bandcampBgColor === 'transparent' ? black : white}>Bandcamp</PlayerTab>
                </PlayerSelector>
                <PlayerSelector album={1} bg={this.state.soundcloudBgColor}>
                  <PlayerTab eventKey="soundcloud" color={this.state.soundcloudBgColor === 'transparent' ? black : white}>SoundCloud</PlayerTab>
                </PlayerSelector>
                <PlayerSelector album={1} bg={this.state.youtubeBgColor}>
                  <PlayerTab eventKey="youtube" color={this.state.youtubeBgColor === 'transparent' ? black : white}>YouTube</PlayerTab>
                </PlayerSelector>
              </Nav>
            </Col>
            <Col sm={9} style={{padding: 0}}>
              <Tab.Content>
                <Tab.Pane eventKey="bandcamp" style={{
                  backgroundColor: bandcampBlue,
                  padding: '2%',
                }}>
                  <iframe 
                    title="Bandcamp" 
                    style={{
                      border: 0, 
                      width: '100%', 
                      height: 400,
                    }} 
                    src={`https://bandcamp.com/EmbeddedPlayer/album=${this.beatTape.bandcamp}/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/`}
                    seamless 
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="soundcloud" style={{
                  backgroundColor: soundcloudOrange,
                  padding: '2%',
                }}>
                  <iframe 
                    title="SoundCloud" 
                    style={{
                      width: '100%',
                      height: 400,
                      border: 0,
                    }}
                    scrolling="no" 
                    allow="autoplay" 
                    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${this.beatTape.soundCloud}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="youtube" style={{
                  backgroundColor: youtubeRed,
                  padding: '2%',
                }}>
                  <iframe 
                    title="YouTube"
                    style={{
                      width: '100%',
                      height: 400,
                      border: 0,
                    }}
                    src={`https://www.youtube.com/embed/videoseries?list=${this.beatTape.youTube}`} 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <Container fluid style={{paddingTop: 10, display: 'flex', justifyContent: 'center'}}>
          <Button text="Buy Beats" href={'/contact'} />
        </Container>
      </Container>
    );
  }
}