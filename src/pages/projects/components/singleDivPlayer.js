import React from 'react';
import { Container, Tab, Nav } from 'react-bootstrap';

import { PlayerTab, PlayerSelector } from '../../../constants/styled-components'

/**
 * @todo make this a class component
 */
export default class SingleDivPlayer extends React.Component {

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
    const {spotify, apple, bandcamp, soundcloud, textColor} = this.props;
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
        <Container fluid style={{padding: 0}}>
          <Nav style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 0}}>
            <PlayerSelector bg={this.state.spotifyBgColor} style={{width: '25%'}}>
              <PlayerTab eventKey="spotify" color={textColor}>Spotify</PlayerTab>
            </PlayerSelector>
            <PlayerSelector bg={this.state.appleBgColor} style={{width: '25%'}}>
              <PlayerTab eventKey="apple" color={textColor}>Apple Music</PlayerTab>
            </PlayerSelector>
            <PlayerSelector bg={this.state.bandcampBgColor} style={{width: '25%'}}>
              <PlayerTab eventKey="bandcamp" color={textColor}>Bandcamp</PlayerTab>
            </PlayerSelector>
            <PlayerSelector bg={this.state.soundcloudBgColor} style={{width: '25%'}}>
              <PlayerTab eventKey="soundcloud" color={textColor}>SoundCloud</PlayerTab>
            </PlayerSelector>
          </Nav>
        </Container>
        <Container fluid style={{padding: 0}}>
          <Tab.Content style={{width: '100%', padding: 0}}>
            <Tab.Pane eventKey="spotify" style={{
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
            </Tab.Pane>
            <Tab.Pane eventKey="apple" style={{
              backgroundColor: '#FA57C1',
              padding: '2%',
            }}>
              <iframe 
                allow="autoplay *; encrypted-media *;" 
                style={{
                  width: '100%',
                  height: 250,
                  maxWidth: '660px', 
                  overflow: 'hidden', 
                  background: 'transparent',
                  border: 0,
                }} 
                src={"https://embed.music.apple.com/us/album/" + apple}
                title="Apple Music"
              />
            </Tab.Pane>
            <Tab.Pane eventKey="bandcamp" style={{
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
            </Tab.Pane>
            <Tab.Pane eventKey="soundcloud" style={{
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
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    )

  }
}