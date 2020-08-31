import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { SongLink } from '../../constants/styled-components';
import AlbumPlayer from './components/albumPlayer';
import BeatTapePlayer from './components/beatTapePlayer';

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
                {this.album.beatTape ?
                  (
                    <ProjectPageInfoParagraph>
                      <strong>Sample(s):</strong>
                      <ProjectPageList>
                        {this.album.albumCredits.samples.map(sample => <li>{sample}</li>)}
                      </ProjectPageList>
                    </ProjectPageInfoParagraph>
                  ) :
                  (
                    <ProjectPageInfoParagraph>
                      <strong>Songwriter(s):</strong>
                      <ProjectPageList>
                        {this.album.albumCredits.songwriters.map(songwriter => <li>{songwriter}</li>)}
                      </ProjectPageList>
                    </ProjectPageInfoParagraph>
                  )
                }
                <ProjectPageInfoParagraph>
                  <strong>Mixing Engineer(s):</strong>
                  <ProjectPageList>
                    {this.album.albumCredits.mixedBy.map(mixer => <li>{mixer}</li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
                {this.album.albumCredits.engineeredBy && (
                  <ProjectPageInfoParagraph>
                    <strong>Vocal Engineer(s):</strong>
                    <ProjectPageList>
                      {this.album.albumCredits.engineeredBy.map(engineer => <li>{engineer}</li>)}
                    </ProjectPageList>
                  </ProjectPageInfoParagraph>
                )}
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
                {this.album.specialThanks && (
                  <ProjectPageInfoParagraph>
                    <strong>Special Thanks:</strong>
                    <ProjectPageList>
                      {this.album.albumCredits.specialThanks.map(thanks => <li>{thanks}</li>)}
                    </ProjectPageList>
                  </ProjectPageInfoParagraph>
                )}
              </Container>
            </Container>
          </Container>
          <Container fluid style={{width: '50%', padding: 0, backgroundColor: '#29B3F1'}}>
            <Container fluid style={{padding: '4%', width: '100%', position: 'sticky', top: '7%', display: 'flex', flexDirection: 'column'}}>
              <ProjectPageSecondaryTitle style={{color: '#FFFFFF'}}>Listen</ProjectPageSecondaryTitle>
              {this.album.beatTape ? <BeatTapePlayer /> : <AlbumPlayer />}
              <SongLink href={"https://album.link/s/3vbvMwip1WpplVodTHHOrb"} color={'#000000'} target="_blank">Other Sources</SongLink>
            </Container>
          </Container>
        </ProjectPageSection>
      </Container>
    )
  }
}