import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

import { PlayerTab, SongLink } from '../../constants/styled-components';

const ProjectPageSection = styled(Container)`
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: row;
  color: #040B30;
`

const ProjectPageCover = styled.img`
  width: 50%;
`

const ProjectPageHeader = styled(Container)`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #040B30;
  color: #FFFFFF;
`

const ProjectPageTitle = styled.h1`
  font-weight: normal;
  font-size: 4.5em;
  text-align: center;
`

const ProjectPageReleaseDate = styled.h3`
  font-weight: normal;
  font-style: italic;
`

const ProjectPageSecondaryTitle = styled.h2`
  font-weight: normal;
  text-align: center;
  font-size: 2.3em;
`

const ProjectPageList = styled.ul`
  list-style-type: none;
`

const ProjectPageInfoParagraph = styled.p`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
`

const PlayerSelector = styled(Nav.Item)`
  background-color: ${props => props.bg};
  border-radius: 10px 0px 0px 10px;
  border: 0px;
`

export default class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spotifyBgColor: '#1DB954',
      appleBgColor: 'transparent',
      bandcampBgColor: 'transparent',
      soundcloudBgColor: 'transparent',
    }

    this.album = this.props.album;
  }
  render() {
    return (
      <Container fluid style={{ padding: 0 }}>
        <ProjectPageSection fluid style={{width: '100%', padding: 0, display: 'flex', flexDirection: 'row'}}>
          <ProjectPageCover src={this.album.cover} />
          <ProjectPageHeader fluid>
            <ProjectPageTitle>{this.album.title}</ProjectPageTitle>
            <ProjectPageReleaseDate>Release Date: {this.album.releaseDate}</ProjectPageReleaseDate>
          </ProjectPageHeader>
        </ProjectPageSection>
        <ProjectPageSection fluid>
          <Container fluid style={{width: '50%', padding: 0}}>
            <Container fluid style={{width: '100%', padding: '4%'}}>
              <ProjectPageSecondaryTitle>{this.album.title}</ProjectPageSecondaryTitle>
              <ProjectPageInfoParagraph>{this.album.description}</ProjectPageInfoParagraph>
              <Container fluid style={{padding: 0, display: 'flex', flexWrap: 'wrap'}}>
                {this.album.albumCredits.features && (
                  <ProjectPageInfoParagraph>
                    <strong>Featuring (in order of appearance):</strong>
                    <ProjectPageList>
                      {this.album.albumCredits.features.map(feature => <li>{feature}</li>)}
                    </ProjectPageList>
                  </ProjectPageInfoParagraph>
                )}
                <ProjectPageInfoParagraph>
                  <strong>Songwriter(s):</strong>
                  <ProjectPageList>
                    {this.album.albumCredits.songwriters.map(songwriter => <li>{songwriter}</li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
                <ProjectPageInfoParagraph>
                  <strong>Mixing Engineer(s):</strong>
                  <ProjectPageList>
                    {this.album.albumCredits.mixedBy.map(mixer => <li>{mixer}</li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
                <ProjectPageInfoParagraph>
                  <strong>Vocal Engineer(s):</strong>
                  <ProjectPageList>
                    {this.album.albumCredits.engineeredBy.map(engineer => <li>{engineer}</li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
                <ProjectPageInfoParagraph>
                  <strong>Mastering Engineer(s):</strong>
                  <ProjectPageList>
                    {this.album.albumCredits.masteredBy.map(master => <li>{master}</li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
                <ProjectPageInfoParagraph>
                  <strong>Artwork By:</strong>
                  <ProjectPageList>
                    {this.album.albumCredits.artworkBy.map(artist => <li>{artist}</li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
                <ProjectPageInfoParagraph>
                  <strong>Special Thanks:</strong>
                  <ProjectPageList>
                    {this.album.albumCredits.specialThanks.map(thanks => <li>{thanks}</li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
              </Container>
            </Container>
          </Container>
          <Container fluid style={{width: '50%', padding: 0, backgroundColor: '#29B3F1'}}>
            <Container fluid style={{padding: '4%', width: '100%', position: 'sticky', top: '7%', display: 'flex', flexDirection: 'column'}}>
              <ProjectPageSecondaryTitle style={{color: '#FFFFFF'}}>Listen</ProjectPageSecondaryTitle>
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
                      <PlayerSelector style={{backgroundColor: this.state.spotifyBgColor}}>
                        <PlayerTab eventKey="spotify" color={this.state.spotifyBgColor === 'transparent' ? '#000000' : '#FFFFFF'}>Spotify</PlayerTab>
                      </PlayerSelector>
                      <PlayerSelector style={{backgroundColor: this.state.appleBgColor}}>
                        <PlayerTab eventKey="apple" color={this.state.appleBgColor === 'transparent' ? '#000000' : '#FFFFFF'}>Apple Music</PlayerTab>
                      </PlayerSelector>
                      <PlayerSelector style={{backgroundColor: this.state.bandcampBgColor}}>
                        <PlayerTab eventKey="bandcamp" color={this.state.bandcampBgColor === 'transparent' ? '#000000' : '#FFFFFF'}>Bandcamp</PlayerTab>
                      </PlayerSelector>
                      <PlayerSelector style={{backgroundColor: this.state.soundcloudBgColor}}>
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
              <SongLink href={"https://album.link/s/3vbvMwip1WpplVodTHHOrb"} color={'#000000'} target="_blank">Other Sources</SongLink>
            </Container>
          </Container>
        </ProjectPageSection>
      </Container>
    )
  }
}