import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import AlbumPlayer from './components/albumPlayer';
import BeatTapePlayer from './components/beatTapePlayer';
import { darkBlue, lightBlue, spotifyGreen, white } from '../../constants/colors';

const ProjectPageSection = styled(Container)`
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: row;
  color: ${darkBlue};
  flex-wrap: wrap;
`

const ProjectPageCover = styled.img`
  width: 50%;
  height: 100%;

  @media (max-width: 740px) {
    width: 100%;
  }
`

const ProjectPageHeader = styled(Container)`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${darkBlue};
  color: ${white};
  padding: 2%;

  @media (max-width: 740px) {
    width: 100%;
  }
`

const ProjectPageTitle = styled.h1`
  font-weight: normal;
  font-size: 4.5em;
  text-align: center;

  @media (max-width: 740px) {
    font-size: 4em;
  }
`

const ProjectPageReleaseDate = styled.h3`
  font-weight: normal;
  font-style: italic;
  text-align: center;
`

const ProjectPageSecondaryTitle = styled.h2`
  font-weight: normal;
  text-align: center;
  font-size: 2.3em;
`

const ProjectPageList = styled.ul`
  list-style-type: none;
`

const ProjectPageInfoParagraph = styled.div`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
`

const ProjectPageInfoSection = styled(Container)`
  width: 50%;
  padding: 10px;

  @media (max-width: 740px) {
    width: 100%;
  }
`

export default class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spotifyBgColor: spotifyGreen,
      appleBgColor: 'transparent',
      bandcampBgColor: 'transparent',
      soundcloudBgColor: 'transparent',
    }

    this.album = this.props.album;
  }
  render() {
    return (
      <Container fluid style={{ padding: 0 }}>
        <Helmet>
          <title>{this.album.title} - Isaiah Bullard</title>
          <meta name="description" content={`${this.album.title}, by Isaiah Bullard`} />
        </Helmet>
        <ProjectPageSection fluid style={{flexWrap: 'wrap-reverse'}}>
          <ProjectPageCover src={this.album.cover} />
          <ProjectPageHeader fluid>
            <ProjectPageTitle>{this.album.title}</ProjectPageTitle>
            <ProjectPageReleaseDate>Release Date: {this.album.releaseDate}</ProjectPageReleaseDate>
          </ProjectPageHeader>
        </ProjectPageSection>
        <ProjectPageSection fluid>
          <ProjectPageInfoSection fluid>
            <Container fluid style={{width: '100%', padding: '4%', top: '7.5%'}}>
              <ProjectPageSecondaryTitle>{this.album.title}</ProjectPageSecondaryTitle>
              <ProjectPageInfoParagraph>{this.album.description}</ProjectPageInfoParagraph>
              <Container fluid style={{padding: 0, display: 'flex', flexWrap: 'wrap'}}>
                {this.album.albumCredits.features && (
                  <ProjectPageInfoParagraph>
                    <strong>Featuring (in order of appearance):</strong>
                    <ProjectPageList>
                      {this.album.albumCredits.features.map((feature, index) => <li key={index}>{feature}</li>)}
                    </ProjectPageList>
                  </ProjectPageInfoParagraph>
                )}
                {this.album.beatTape ?
                  (
                    <ProjectPageInfoParagraph>
                      <strong>Sample(s):</strong>
                      <ProjectPageList>
                        {this.album.albumCredits.samples.map((sample, index) => <li key={index}>{sample}</li>)}
                      </ProjectPageList>
                    </ProjectPageInfoParagraph>
                  ) :
                  (
                    <ProjectPageInfoParagraph>
                      <strong>Songwriter(s):</strong>
                      <ProjectPageList>
                        {this.album.albumCredits.songwriters.map((songwriter, index) => <li key={index}>{songwriter}</li>)}
                      </ProjectPageList>
                    </ProjectPageInfoParagraph>
                  )
                }
                <ProjectPageInfoParagraph>
                  <strong>Mixing Engineer(s):</strong>
                  <ProjectPageList>
                    {this.album.albumCredits.mixedBy.map((mixer, index) => <li key={index}>{mixer}</li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
                {this.album.albumCredits.engineeredBy && (
                  <ProjectPageInfoParagraph>
                    <strong>Vocal Engineer(s):</strong>
                    <ProjectPageList>
                      {this.album.albumCredits.engineeredBy.map((engineer, index) => <li key={index}>{engineer}</li>)}
                    </ProjectPageList>
                  </ProjectPageInfoParagraph>
                )}
                <ProjectPageInfoParagraph>
                  <strong>Mastering Engineer(s):</strong>
                  <ProjectPageList>
                    {this.album.albumCredits.masteredBy.map((master, index) => <li key={index}>{master}</li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
                <ProjectPageInfoParagraph>
                  <strong>Artwork By:</strong>
                  <ProjectPageList>
                    {this.album.albumCredits.artworkBy.map((artist, index) => <li key={index}>{artist}</li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
                {this.album.albumCredits.specialThanks && (
                  <ProjectPageInfoParagraph>
                    <strong>Special Thanks:</strong>
                    <ProjectPageList>
                      {this.album.albumCredits.specialThanks.map((thanks, index) => <li key={index}>{thanks}</li>)}
                    </ProjectPageList>
                  </ProjectPageInfoParagraph>
                )}
              </Container>
            </Container>
          </ProjectPageInfoSection>
          <ProjectPageInfoSection fluid style={{backgroundColor: lightBlue}}>
            <Container fluid style={{padding: '4%', width: '100%', position: 'sticky', top: '9%', display: 'flex', flexDirection: 'column'}}>
              <ProjectPageSecondaryTitle style={{color: white}}>Listen</ProjectPageSecondaryTitle>
              {this.album.beatTape ? <BeatTapePlayer beatTape={this.album} /> : <AlbumPlayer album={this.album} />}
            </Container>
          </ProjectPageInfoSection>
        </ProjectPageSection>
      </Container>
    )
  }
}