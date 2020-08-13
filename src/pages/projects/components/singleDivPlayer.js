import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

export default ({spotify, apple, bandcamp, soundcloud, textColor}) => {
    return (
        <Tab.Container defaultActiveKey="spotify">
          <Col>
            <Row>
              <Nav variant="pills" style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2%'}}>
                <Nav.Item style={{width: '25%'}}>
                  <Nav.Link eventKey="spotify" style={{color: textColor}}>Spotify</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{width: '25%'}}>
                  <Nav.Link eventKey="apple" style={{color: textColor}}>Apple</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{width: '25%'}}>
                  <Nav.Link eventKey="bandcamp" style={{color: textColor}}>Bandcamp</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{width: '25%'}}>
                  <Nav.Link eventKey="soundcloud" style={{color: textColor}}>SoundCloud</Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
            <Row>
              <Tab.Content style={{width: '100%'}}>
                <Tab.Pane eventKey="spotify">
                  <Container style={{
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
                  <Container style={{
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
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                      src={"https://embed.music.apple.com/us/album/" + apple}
                      title="Apple Music"
                    />
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="bandcamp">
                  <Container style={{
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
                  <Container style={{
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
                      title="Soundcloud"
                    />
                  </Container>
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </Col>
        </Tab.Container>
    )
}